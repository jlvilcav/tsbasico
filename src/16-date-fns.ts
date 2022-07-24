import { subDays, format } from 'date-fns';

const date = new Date(1988,1,28); // 0=Jan, 1=Feb, 2=Mar, 3=Apr, 4=May, 5=Jun, 6=Jul, 7=Aug, 8=Sep, 9=Oct, 10=Nov, 11=Dec
const rpta = subDays(date,10);
const str = format(rpta,'dd/MM/yyyy');
console.log(str);
