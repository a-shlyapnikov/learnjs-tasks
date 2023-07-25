/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt 
и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/


let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

function Calculator() {
    this.arg1,
        this.arg2
    this.read = function() {
        this.arg1 = +prompt("Введите первое число");
        this.arg2 = +prompt("Введите второе число");
    }
    this.sum = function() {
        return this.arg1 + this.arg2;
    }
    this.mul = function() {
        return this.arg1 * this.arg2;
    }
}



