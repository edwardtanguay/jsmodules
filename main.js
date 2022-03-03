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
title('(4) create function displayCustomerOrders(customerId)');
const displayCustomerOrders = (customerId) => {
	return `${customers.find(m => m.customerID === customerId).companyName} (${customerId}) has ${orders.filter(m => m.customerID === customerId).length} orders`;
};
console.log(displayCustomerOrders('AROUT'));
console.log(displayCustomerOrders('SPLIR'));

title('(4.1) returns Around the Horn (AROUT) has 13 orders and 23 products')
const displayCustomerOrdersAndProducts = (customerId) => {
	const numOfProducts = orders.filter(m => m.customerID === customerId).reduce((sum, order) => sum + order.details.length, 0);
	return `${customers.find(m => m.customerID === customerId).companyName} (${customerId}) has ${orders.filter(m => m.customerID === customerId).length} orders and ${numOfProducts} product kinds`;
};
console.log(displayCustomerOrdersAndProducts('AROUT'));

title('(4.2) returns Around the Horn (AROUT) has 13 orders and 23 product kinds and 55 products')
const displayCustomerOrdersAndProductsAndProductKinds = (customerId) => {
	const numOfProductKinds = orders.filter(m => m.customerID === customerId).reduce((sum, order) => sum + order.details.length, 0);
	const numOfProducts = orders.filter(m => m.customerID === customerId).reduce((sum, order) => {
		const totalQuantity = order.details.reduce((acc, prod) => {
			acc += prod.quantity;
			return acc;
		}, 0);
		sum += totalQuantity;
		return sum;
	}, 0);
	return `${customers.find(m => m.customerID === customerId).companyName} (${customerId}) has ${orders.filter(m => m.customerID === customerId).length} orders and ${numOfProductKinds} product kinds and ${numOfProducts} products`;
};
console.log(displayCustomerOrdersAndProductsAndProductKinds('AROUT'));


title('(4.3) another solution to 4.2')
const customerId = 'AROUT';
const ordersFirma = orders.filter((m) => customerId === m.customerID);
let sum = 0;
ordersFirma.forEach(m => {
	m.details.forEach(t => {
		sum += t.quantity;
	});
});
console.log(sum);

title('(5) create function getCustomerOrderObject(customerId)');
const getCustomerOrderObject = (customerId) => {
	return {
		id: customerId,
		name: customers.find(m => m.customerID === customerId).companyName,
		orderIds: orders.filter(m => m.customerID === customerId).map(m => m.orderID)
	}
};
// const obj = getCustomerOrderObject('AROUT');
// console.log(obj.orderIds.length);
console.log(getCustomerOrderObject('AROUT'));
console.log(getCustomerOrderObject('LEHMS'));