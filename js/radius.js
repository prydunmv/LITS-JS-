function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomInRange(10, 100)
let circleRadius = getRandomInRange(10, 100); 
let circuit = Math.floor(2 * Math.PI * circleRadius) ;
let areaOfTheCircle = Math.floor(Math.PI * (Math.pow(circleRadius, 2)));

console.log("радіус кола - "+circleRadius+"см");
console.log("довжина кола - "+circuit+"см");
console.log("площа кола - "+areaOfTheCircle+"см");
