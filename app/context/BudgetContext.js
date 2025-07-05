"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const BudgetContext = createContext({});

export function useBudget() {
  return useContext(BudgetContext);
}

export function BudgetProvider({ children }) {
  const {updateCurrUser} = useAuth()
  const [details, setDetails] = useState(()=>{
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("currUser");
      return saved ? JSON.parse(saved).details : {categories:[],reminders:[],transactions:[]};
    }
    return {categories:[],reminders:[],transactions:[]};
  })
  console.log(details);
  

  const [transactions, setTransactions] = useState(details.transactions);
  const [categories, setCategories] = useState(details.categories);
  const [reminders, setReminders] = useState(details.reminders);

  useEffect(() => {
    setDetails({categories:categories,transactions:transactions,reminders:reminders})
    
  }, [transactions,reminders,categories]);

  useEffect(()=>{
    updateCurrUser(details)
  },[details])

  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      ...prev,
      { ...transaction, id: transactions.length },
    ]);

    setCategories((prev) =>
      prev.map((cat, ind) => {
        return ind === transaction.category
          ? { ...cat, spent: Number(cat.spent || 0) + transaction.amount }
          : cat;
      })
    );
  };

  const initialCategory = (category) => {
    setCategories(category);
  };

  const addCategory = (category) => {
    setCategories((prev) => [
      ...prev,
      { ...category, id: categories.length  },
    ]);
  };

  const updateCategory = (category) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === category.id ? category : c))
    );
  };

  const deleteCategory = (id) => {
    setTransactions((prev) => prev.filter((c) => c.id !== id));
    setCategories((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      return filtered.map((category, index) => ({
        ...category,
        id: index ,
      }));
    });
  };

  const updateTransaction = (transaction) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === transaction.category
          ? {
              ...c,
              spent:
                Number(c.spent || 0) -
                transactions[transaction.id].amount +
                transaction.amount,
            }
          : c
      )
    );
    setTransactions((prev) =>
      prev.map((c) => (c.id === transaction.id ? transaction : c))
    );
  };

  const deleteTransaction = (id) => {
    console.log(transactions[id]);

    setCategories((prev) =>
      prev.map((c) =>
        c.id === transactions[id].category
          ? { ...c, spent: c.spent - transactions[id].amount }
          : c
      )
    );

    setTransactions((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      return filtered.map((transaction, index) => ({
        ...transaction,
        id: index,
      }));
    });
  };

  const addReminder = (reminder) => {
    setReminders((prev) => [...prev, {...reminder, id: reminders.length}]);
  };

  const editReminder = (id, reminder) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? reminder : r))
    );
  };

  const deleteReminder = (id) => {
    setReminders((prev) => {
      const filtered = prev.filter((r) => r.id !== id);
      return filtered.map((reminder, index) => ({
        ...reminder,
        id: index,
      }));
    });
  };

  const value = {
    initialCategory,
    transactions,
    updateTransaction,
    categories,
    addTransaction,
    addCategory,
    updateCategory,
    deleteCategory,
    deleteTransaction,
    addReminder,
    reminders,
    editReminder,
    deleteReminder,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}
