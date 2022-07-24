(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    };
  }

  const product = createProductToJson('Socks', new Date(), 10, 'S');
  console.log(product);
  console.log(product.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes | undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    };
  }

  const product2 = createProductToJsonV2('Socks', new Date(), 10);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);

})();
