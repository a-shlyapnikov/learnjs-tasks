/*Для каждого цикла запишите, какие значения он выведет. 
Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет?*/

//Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

//Постфиксный вариант i++

let j = 0;
while (j++ < 5) alert( j );// 1 2 3 4 5