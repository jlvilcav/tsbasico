(()=>{
  let userId:string|number = '123';
  userId = 123;
  userId = '123';

  function greeting(myText:string|number){
    if (typeof myText === 'string') {
      console.log(`String ${myText.toLowerCase()}`);
    } else {
      console.log(`Number ${myText.toFixed(1)}`);
    }
    return `Hola ${myText}`;
  }
  greeting('123 hola');
  greeting(123.154545);

})();
