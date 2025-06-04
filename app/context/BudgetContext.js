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
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
    console.log(categories);
    
  }, [categories]);

  

  const addTransaction = (transaction) => {
    setTransactions(prev => [...prev, transaction]);
    
    setCategories(prev => prev.map((cat,ind) =>{ 
      return ind === transaction.id? {...cat, spent: Number(cat.spent || 0) + transaction.amount} : cat}
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



  const value = {
    initialCategory,
    transactions,
    categories,
    addTransaction,
    addCategory,
    updateCategory,
    deleteCategory
  };

  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
} 