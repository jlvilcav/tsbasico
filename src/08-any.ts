(()=>{
  let myDynamicVar:any = 'hola'; //permite todos los tipos
  myDynamicVar = true;
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = [1,2,3];
  myDynamicVar = [1,2,3,true];
  //No se aconseja usar esto

  const rta = (myDynamicVar as string).toLowerCase(); // se fuerza a ser tratado como un string

  myDynamicVar = 121245;
  const rta2 = (<number>myDynamicVar).toFixed(); // se fuerza a ser tratado como un number y se le aplica una funcion

})();
