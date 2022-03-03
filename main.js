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

