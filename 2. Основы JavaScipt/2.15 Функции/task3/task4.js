// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
function pow(x, n){
    return x**n;
}

function getBase(){
    let base;
    do{
        base = prompt("Введите основание степени(основание должно быть натуральным числом)");
    }while(base < 0)
    return base;
}

let x = prompt("Введите х:")
let n = getBase();
alert(pow(x, n))

