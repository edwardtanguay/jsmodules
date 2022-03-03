import { customers } from './customers.js';
import { orders } from './orders.js';
import { products } from './products.js';

const title = (title) => {
	console.log('');
	console.log(`=== ${title} ================`);
}

// console.log(`There are ${customers.length} customers.`);
// console.log(`There are ${orders.length} orders.`);
// console.log(`There are ${products.length} products.`);

title('(1) display all company names of customers');
// customers.filter(m => m.address.country === 'UK').forEach(customer => console.log(customer.companyName));
customers.forEach(customer => console.log(customer.companyName));

title('(2) display city - customerName');
customers.forEach(m => console.log(`${m.address.city} - ${m.companyName}`));

title('(3) display city - customerName only for those from London');
customers.filter(m => m.address.city === 'London').forEach(m => console.log(`${m.address.city} - ${m.companyName}`));

title('(3.1) get array of customers from London');
console.log(customers.filter(m => m.address.city === 'London'));
// const getCustomersFromLondon = () => {
// 	const custs = [];
// 	customers.forEach(m => {
// 		if (m.address.city === 'London') {
// 			custs.push(m);
// 		}
// 	});
// 	return custs;
// }
// console.log(getCustomersFromLondon());

// (4) create function displayCustomerOrders(customerId) which returns a string the following information:
// console.log(displayCustomerOrders('AROUT'));
// returns Around the Horn (AROUT) has 14 orders
title('create function displayCustomerOrders(customerId)');
const displayCustomerOrders = (customerId) => {

	return `${customers.find(m => m.customerID === customerId).companyName} (${customerId}) has ${orders.filter(m => m.customerID === customerId).length} orders`;
};
console.log(displayCustomerOrders('AROUT'));
console.log(displayCustomerOrders('SPLIR'));

