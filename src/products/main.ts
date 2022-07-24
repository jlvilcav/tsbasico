import {addProduct,calcStock,products} from './product.service';

addProduct({name:'Socks', createAt:new Date(),stock:10});
addProduct({name:'Socks 2', createAt:new Date(),stock:19,size:'M'});

console.log(products);
const total = calcStock();
console.log(total);
