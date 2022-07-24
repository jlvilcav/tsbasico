(()=>{
  // let myNumber:number = undefined;
  // let myString:string = null;

  let myNull:null = null; // se debe declarar el tipo nulo o undefined para que el compilador no detecte errores
  let myUndefined:undefined = undefined;

  let myNumber:number | null = null;
  myNumber = 12;

  let myString:string | undefined = undefined;
  myString = 'Hola';

  function hi(name:string|null){
    let hello:string = 'Hello ';
    if(name){
      hello += name.toLocaleLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiv2(name:string|null){
    let hello:string = 'Hello ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Juan');
  hi(null);

  hiv2('Juan 2');
  hiv2(null);

})();
