(()=>{
  type UserID = string|number|boolean; //alias type
  let userId:UserID;



  //Literal types
  type Sizes = 'S'|'M'|'L'|'XL'|'XXL';
  let shirtSize:Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XXL';

  function greeting(myText:UserID, size:Sizes){
    if (typeof myText === 'string') {
      console.log(`String ${myText.toLowerCase()}`);
    } /*else {
      console.log(`Number ${myText.toFixed(1)}`);
    }*/
    return `Hola ${myText}`;
  }
  greeting('123 hola', 'S');
  greeting(123.154545, 'S');
  greeting(true, 'S');
  greeting(false, 'S');

})();
