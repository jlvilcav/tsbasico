// var _ = require('lodash');
import _ from 'lodash';
//npm i --save-dev @types/lodash

const data = [
  {
    name:'Socks',
    role:'admin'
  },
  {
    name:'Juan',
    role:'seller'
  },
  {
    name:'Jorge',
    role:'seller'
  },
  {
    name:'Socks2',
    role:'admin'
  }
];

const rpta = _.groupBy(data,(item)=>item.role);
console.log(rpta);
console.log(`const rta = 1 + '1';`);
