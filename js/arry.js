function sortNumericArray(mas) {
    for(let i=0, tmp;i<mas.length-1;i++){
    for(let j=0;j<mas.length-1;j++){
        if(mas[j]>mas[j+1]){
            tmp=mas[j];
            mas[j]=mas[j+1];
            mas[j+1]=tmp;
        }
    }
    }
    console.log ( mas );
}

sortNumericArray([23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5]);

