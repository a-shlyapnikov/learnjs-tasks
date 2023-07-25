/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.


let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let calculator = {
    arg1,
    arg2,
    read(){
        this.arg1 = +prompt("Введтие первое число");
        this.arg2 = +prompt("Введите второе число");
    },
    sum(){
        return this.arg1 + this.arg2;
    },
    mul(){
        return this.arg1 * this.arg2;
    }
};

calculator.read()
alert(calculator.sum())
alert(calculator.mul())