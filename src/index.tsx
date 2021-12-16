import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: 'test withdraw',
          amount: 300.00,
          type: 'withdraw',
          category: 'food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'test deposit',
          amount: 5000.00,
          type: 'deposit',
          category: 'development',
          createdAt: new Date()
        }
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);