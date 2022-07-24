(()=>{
  let productPrice = 100;
  productPrice = 123.45;
  console.log('ProductPrice',productPrice);

  let customerAge:number = 34;
  customerAge = customerAge + 1;
  console.log('ProductAge',productPrice);

  let productInStock: number; //Si no se asigna valor se debe indicar el typo de variable para que no de error

  console.log('ProductInStock',productInStock);
  if (productInStock > 10) {
    console.log('ProductInStock es mayor a 10');
  }
  let discount = parseInt('100');

  console.log('Discount',discount);
  if (discount <= 200) {
    console.log('Aplica');
  } else {
    console.log('No aplica');
  }

  let hex = 0xf00d;
  console.log('Hex',hex);
  let bin = 0b1010;
  console.log('Bin',bin);

  const myNumber: number = 123; //Don't use Number, always use number

})();
