
let valutes = {
    'долар': 25,
    'канадський долар': 30,
    'рубль': 0.20,
    'злоті': 7,
    'фунт стерлінг': 32
}

async function getCurrency() {
 const response = await fetch('https://api.exchangeratesapi.io/latest');
 let valut = await response.json();
let course = valut.rates;
    valutes['долар'] = course.USD
    valutes['канадський долар'] = course.CAD,
    valutes['рубль'] = course.RUB,
    valutes['злоті'] = course.PLN,
    valutes['фунт стерлінг'] =  course.AUD
}


document.getElementById("countButton").addEventListener("click",  function() {
    let valute = $('#valutes')[0].value;
    let course = valutes[valute];
    console.log(valutes);
    let number = 0;
    number = document.getElementById('number').value;
    document.getElementById("text").innerHTML = "за "+ number + " одиниць ви отримаєтете в гривневому еквіваленті " +course * number +" грн";
  });

  getCurrency() 
