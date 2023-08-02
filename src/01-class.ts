const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

console.log(`Fecha sin especificar: ${date}`);

const date2 = new Date(1993, 10, 28);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(`Fecha sin especificar: ${date2}`);

let myVar;
export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13)
console.log(myDate);
