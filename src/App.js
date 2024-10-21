import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Vessapapru',
      amount: 95.12,
      date: new Date("2022-07-14"),
    },
    {
      id: 'e2',
      title: 'Uusi Töllö',
      amount: 799.49,
      date: new Date("2023-01-12"),
    },
    {
      id: 'e3',
      title: 'Auton insurance',
      amount: 300.00,
      date: new Date("2023-02-02"),
    },
    {
      id: 'e4',
      title: 'Uusi pöytä (puuta)',
      amount: 450,
      date: new Date("2022-12-11"),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <p>Tuomas / VAMK / BIT</p>
    </div>
  );
}

export default App;