
let n = prompt('введіть число');
if (n > 0 && n < 100000) {
    console.log('число прийнято')
} else {
    console.log('введіть правильне число')
}
    function division() {
        for (i = 1; i < n; i++) {
            if (i % 2 === 0){
                console.log(i+'ділиться на 2')
                continue
            }
            if (i % 3 === 0){
                console.log(i+'ділиться на 3')
                continue
            }
            if (i % 2 === 0 && i % 3 === 0 ) {
                console.log(i+'ділиться на 2 та ділиться на 3') 
                continue
            }
        }
    }

division();