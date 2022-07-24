(()=>{
  let prices =[1,2,2,3,1,1,212];
  // prices.push('asa');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);
  // prices =[12,14,15];
  let products =['hola1',true];
  products.push(false);

  let mixed:(number|string|boolean|Object)[] = [1,'hola',true];
  mixed.push(false);
  mixed.push(121212);
  mixed.push('hola2');
  mixed.push({});
  mixed.push([]);

  let numbers =[1,2,3,4,5,6,7,8,9,10];
  numbers.map(n=>n*2);
})();
