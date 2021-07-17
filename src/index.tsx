import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs'

createServer({
	models: {
		transaction: Model
	},

	seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance abc',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-06-20 08:00:00')
        },
        {
          id: 2,
          title: 'Supermercado',
          type: 'withdraw',
          category: 'Compras',
          amount: 500,
          createdAt: new Date('2021-05-20 08:00:00')
        }
      ]
    });
  },
	routes() { 
		this.namespace = 'api';
		
		this.get('/transactions', () => this.schema.all('transaction'))


		this.post('/transactions', (_, request) => {
			const data = JSON.parse(request.requestBody)
			return this.schema.create('transaction', data)
		})
	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);