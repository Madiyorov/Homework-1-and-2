
let name = prompt('Kак вас зовут?');

let lastname = prompt('Kак ваша фамилия?');

alert('Рад быль познокомится ' + name + ' ' + lastname);




var b = +prompt('Введите свой возраст');

if(b == 18) {
    alert('Вы еще молоды. Вам нужно учится');
}
else if(b <= 0) {
    alert(' Такого не может быть');
}
else if(b <= 18) {
    alert(' Вы еще молоды. Вам нужно учится');
}
else if(b <= 50) {
    alert(' Вам нужно работать');
}
else if(b <= 59) {
    alert(' Вам скоро на пенсию');
}
else if(b <= 150) {
    alert(' Вы пенсионер');
}
else {
    alert('Такого не может быть');
}



var c = +prompt('10 + 18 = ?' )
// console.log(c);

alert( 'Ответ: ' + (10 + 18) + ' Ваш ответ: ' + c);

if(c == 28) {
    alert('Ваш ответ: Правильно' );
}
else if(c < 28) {
    alert(' Ваш ответ: Не правльно' );
}
else if(c > 28) {
    alert(' Ваш ответ: Не правльно' );
}
else {
    alert('Такого не может быть' );
}



var d = +prompt('38 - 10 = ?' )
// console.log(d);

alert( 'Ответ: ' + (38 - 10) + ' Ваш ответ: ' + d);

if(d == 28) {
    alert('Ваш ответ: Правильно' );
}
else if(d < 28) {
    alert(' Ваш ответ: Не правльно' );
}
else if(d > 28) {
    alert(' Ваш ответ: Не правльно' );
}
else {
    alert('Такого не может быть' );
}

var e = +prompt('1 * 28 = ?' )
// console.log(e);

alert( 'Ответ: ' + (1 * 28) + ' Ваш ответ: ' + e);

if(e == 28) {
    alert('Ваш ответ: Правильно' );
}
else if(e < 28) {
    alert(' Ваш ответ: Не правльно' );
}
else if(e > 28) {
    alert(' Ваш ответ: Не правльно' );
}
else {
    alert('Такого не может быть' );
}

var f = +prompt('28 / 1 = ?' )
// console.log(f);

alert( 'Ответ: ' + (28 / 1) + ' Ваш ответ: ' + f);

if(f == 28) {
    alert('Ваш ответ: Правильно' );
}
else if(f < 28) {
    alert(' Ваш ответ: Не правльно' );
}
else if(f > 28) {
    alert(' Ваш ответ: Не правльно' );
}
else {
    alert('Такого не может быть' );
}

var j = +prompt('28 % 100 = ?' )
// console.log(j);

alert( 'Ответ: ' + (28 % 100) + ' Ваш ответ: ' + j);

if(j == 28) {
    alert('Ваш ответ: Правильно' );
}
else if(j < 28) {
    alert(' Ваш ответ: Не правльно' );
}
else if(j > 28) {
    alert(' Ваш ответ: Не правльно' );
}
else {
    alert('Такого не может быть' );
}
