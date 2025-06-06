'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const BudgetContext = createContext({});

export function useBudget() {
  return useContext(BudgetContext);
}

export function BudgetProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('transactions');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [categories, setCategories] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('categories');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    console.log(transactions);
    
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
    // console.log(categories);
    
  }, [categories]);

  

  const addTransaction = (transaction) => {
    // console.log(transaction);
    
    setTransactions(prev => [...prev, {...transaction, id: transactions.length }]);
    
    setCategories(prev => prev.map((cat,ind) =>{ 
      return ind === transaction.category? {...cat, spent: Number(cat.spent || 0) + transaction.amount} : cat}
    ));
  };

  const initialCategory = (category) => {
    setCategories(category)
  }

  const addCategory = (category) => {
    setCategories(prev => [...prev, {...category, id: categories.length + 1}]);
  };

  const updateCategory = (category) => {
    setCategories(prev => prev.map(c => c.id === category.id ? category : c));
  };

  const deleteCategory = (id) => {
    setTransactions(prev => prev.filter(c => c.id !== id));
    setCategories(prev => {
      const filtered = prev.filter(c => c.id !== id);
      return filtered.map((category, index) => ({
        ...category,
        id: index + 1
      }));
    });
  };

  const updateTransaction = (transaction) => {
    console.log(transaction);
    
    setCategories(prev => prev.map(c => c.id === transaction.category ? {...c, spent: Number(c.spent || 0) - transactions[transaction.id].amount + transaction.amount} : c));
    setTransactions(prev => prev.map(c => c.id === transaction.id ? transaction : c));
  };

  const deleteTransaction = (id) => {
    console.log(transactions[id]);
    
    setCategories(prev => prev.map(c => c.id === transactions[id].category ? {...c, spent: c.spent - transactions[id].amount} : c));

    setTransactions(prev => {
      const filtered = prev.filter(c => c.id !== id);
      return filtered.map((transaction, index) => ({
        ...transaction,
        id: index
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
    deleteTransaction
  };

  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
} 