(()=>{
  const calcTotal = (price: number[]): string => {
    let total = 0;
    price.forEach((item)=>{
      total += item;
    });
    return total.toString();
  }

  const printTotal = (price: number[]): void => {
    const rpta = calcTotal(price);
    console.log(`el valor total es ${rpta}`);
  }

  const total = calcTotal([1,2,3,4,5,3,4,2,1]);
  console.log(total);
})();
