const ncome = [ 200, 345, 234, 123, 456, 234, 398,768 ];
const costs = [23, 23, 45, 56, 234, 233, 134, 234, 33 ];

let sumNcome = 0;
let sumCosts = 0;

for (let i = 0; i < ncome.length; i++) {
    sumNcome = sumNcome + ncome[i];
}

for (let i = 0; i < costs.length; i++) {
    sumCosts = sumCosts + costs[i];
}

let balans = sumNcome - sumCosts;

console.log(sumNcome);
console.log(sumCosts);
console.log(balans);

if (balans > 0){
    console.log("Вітаю ваш баланс плюсовий і дорівноє- "+balans);
} else { 
      console.log( "Нажаль ваш баланс нижче нуля і дорівноє- "+balans);
  }
