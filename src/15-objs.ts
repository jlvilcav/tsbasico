(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {title:string, createAt:Date,stock:number,size?:Sizes};

  const products:Product[] = [];
  const addProduct= (data:Product)=>{
    products.push(data);
    // console.log(`${data.title} - ${data.createAt} - ${data.stock} - ${data.size}`);
  }
  addProduct({title:'Socks', createAt:new Date(),stock:10});
  addProduct({title:'Socks 2', createAt:new Date(),stock:19,size:'M'});

  console.log(products);
})();
