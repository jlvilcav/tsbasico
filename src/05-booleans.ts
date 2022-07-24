(()=>{
  let isEnable = true;
  isEnable = false;
  console.log('IsEnable',isEnable);

  let isNew: boolean = false;
  console.log('IsNew',isNew);
  isNew = true;
  console.log('IsNew',isNew);

  const random = Math.random();
  console.log('Random',random);
  isNew = random >= 0.5 ? true : false;
  console.log('IsNew',isNew);

  //Always use boolean not Boolean
})();
