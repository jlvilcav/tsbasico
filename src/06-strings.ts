(()=>{
  let productTitle:string = 'My amazinf product';
  // productTitle = null;
  // productTitle = ()=>{};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('ProductTitle',productTitle);

  const productDescription:string = "I'm writing it here to test the length of the string";
  console.log('ProductDescription',productDescription);
  let productPrice:number = 100;
  let isNew:boolean = false;
  const sumary =`
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log('Sumary',sumary);
})();
