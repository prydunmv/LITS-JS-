
const valutes = {
    'долар': 27,
    'євро': 30,
    'рубль': 0.20,
    'злоті': 7,
    'фунт стерлінг': 32
}

function myFunction() {
    let valute = $('#valutes')[0].value;
    let course = valutes[valute];
    let number = 0;
    number = document.getElementById('number').value;
    document.getElementById("text").innerHTML = "за "+ number + " одиниць ви отримаєтете в гривневому еквіваленті " +course * number +" грн";
  }