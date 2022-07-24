(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data:{email:string, password:string})=>{
    console.log(`${data.email} - ${data.password}`);
  }
  // login('jvilca@gmail.com','123456');
  login({email:'jvilca@gmail.com', password:'123456'});
  const products:any[] = [];
  const addProduct= (data:{title:string, createAt:Date,stock:number,size?:Sizes})=>{
    products.push(data);
    // console.log(`${data.title} - ${data.createAt} - ${data.stock} - ${data.size}`);
  }
  addProduct({title:'Socks', createAt:new Date(),stock:10});
  addProduct({title:'Socks 2', createAt:new Date(),stock:19,size:'M'});

  console.log(products);
})();
