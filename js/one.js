let arry=[23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5, 0, 56, 1, 1, 1, 70];
const unitArry = arry.filter(function(item,index) {
     return index === arry.indexOf(item);
 });
 console.log (unitArry);