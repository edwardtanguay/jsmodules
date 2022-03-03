import { customers } from './customers.js';
import { orders } from './orders.js';
import { products } from './products.js';

// console.log(`There are ${customers.length} customers.`);
// console.log(`There are ${orders.length} orders.`);
// console.log(`There are ${products.length} products.`);

// (1) display all company names of customers 
// customers.filter(m => m.address.country === 'UK').forEach(customer => console.log(customer.companyName));
customers.forEach(customer => console.log(customer.companyName));

// (2) display city - customerName
customers.forEach(m => console.log(`${m.address.city} - ${m.companyName}`));