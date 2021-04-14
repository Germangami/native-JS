// // const es = prompt ('Какое офицальное название JS?');
// // if (es == 'ECMAScript') {
// //     alert ('Verno');
// // } else {
// //     alert ('Ne verno');
// // }     


// // for (начало; условие; шаг) {
// //     // ... тело цикла ...
// //   }

// let array = ['slon',22,33]
// // let a = array[1];
// // alert(a); 

// for (let i = 2; i <= 10; i+=2) {
//     alert (i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0; 
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


// let a = prompt ('Vvedi 4islo bolsze 100!');
// while (a <= 100 && a) {
//     a = prompt ('Jeszcze raz kurwo')
// }


// for ( let i = 2; i<=10; i++ ) { 
//     if (i % 2) {
//         alert (i);
//     }
// }


// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//   if (browser == 'Edge') {
//       alert ('You got the Edge');
//   } else if (browser == 'Chrome'
//   || browser == 'Firefox'
//   || browser == 'Safari'
//   || browser == 'Opera') {
//       alert ('Okay we support these browser too');
//   } else {
//       alert ('Pl')
//   }

//   const number = +prompt('Введите число между 0 и 3', '');

//   if (number === 0) {
//     alert('Вы ввели число 0');
//   }

//   if (number === 1) {
//     alert('Вы ввели число 1');
//   }

//   if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');

// const number =+ prompt ('Введите число между 0 и 3', '');

// switch (number) {
//     case (0):
//         alert('Вы ввели число 0');
//         break;

//     case (1): 
//         alert ('Вы ввели число 1')
//         break;

//     case (2) || (3): 
//         alert ('Вы ввели число 2, а может и 3');
//         break;

//     case (2) || (3): 
//         alert ('Вы ввели число 2, а может и 3');
//         break;
//     }

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// console.log (result)

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function checkAge (age) {
//   return (age > 18) ? true : alert ('Roditeli?');
// }

// function checkAge (age) {
//  return (age > 18) || confirm ('Roditeli')
// }

// function min (a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let 


// function ask (question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk () {
//     alert ('Вы согласны?');
// }

// function showCancel () {
//     alert ('Вы отменили?');
// }

// ask ('Вы согласны?', showOk, showCancel);

// (блочная и функцианальная)

// // let name = 'Ivan'


// function calcSum (a,b) {
//     if (a > b) {
//         alert (a);
//     } else {
//         alert (b);
//     }
// }

//  (a,b) => a+b;

// calcSum (2,19);

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let ofice = {
//     Valera: 98,
//     Anna: 3,
//     Gernam: 101,
//     Uasia: 333,
// }
// let sum = 0;
// for (let zarplata in ofice) {
//     sum = sum + ofice[zarplata];
// }

// alert (sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// let cantulator = {
//   sum () {
//     return this.a + this.b
//   },

//   read () {
//     this.a = +prompt ('a?', 0);
//     this.b = +prompt ('b?', 0)
//   }
// }
// cantulator.read();
// alert (cantulator.sum());

// let user = {
//   name: 'Herman',
//   age: 24,
// };

// let admin = {
//   name: 'Namreg',
//   age: 0
// };

// sayHi = function () {
//   alert(this.name);
// }

// sayFirstName = function () {
//   alert(this.age);
// }

// user.f = sayFirstName; 
// admin.f = sayFirstName;

// user.f ();
// admin.f ();

// user.f = sayHi; 
// admin.f = sayHi;

// user.f();
// admin.f();


// const a = {
//   name: 'Namreg',
//   age: 0
// };

// let b = {};

// let b = {...a};

// for (let key in a) {
//   b[key] = a[key]
// }

// a.name = 'German';

// alert(a.name);
// alert(b.name);


// let calculator = {
//    a: 0,
//    b: 0,

//   read() { 
//     this.a = +prompt ('a?', 0);
//     this.b = +prompt ('b?', 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   name: 'Herman',
//   step: 0,
//   up() {
//     this.step++;
//   return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     alert( this.step );
//   }
// };

// ladder.up().up().down().showStep();


// let user = {
//     1: 'Valera',
//     age: 25,
//     lastName:'Sosnowski'
// };

// let num = +'12';

// console.log(num);


// let user = {
//         name: 'Valera',
//         age: 25,
//         lastName:'Sosnowski'
//     };

//     let user = {
//         userData: {
//               name: " Герман",
//               address: {
//                     strit: "бла бла"
//                }
//         }
//    }

//    let user2 = {
//         age: 24,
//    };

//   let megaUser = {};
//   let a = megaUser;

// //   for (let key in user) {
// //       megaUser[key] = user[key]
// //   };

// //   for (let blabla in user2) {
// //       megaUser[blabla] = user2[blabla]
// //   }

// //   console.log(megaUser)

// //   Object.assign({}, user2) 

//   megaUser = {...user2, ...user,userData: { ...user.userData, address: { ...user.userData.address }}};
// //   megaUser = {
// //       age: 24,
// //       userData: { 

// //        },
// //   }  
//   megaUser.userData.address.strit = 'kurwa';
//   console.log(user)
//   console.log(megaUser)


// let footwear = ['adidas', 'nike', 'vans', 'riback', 'jordan'];

// // footwear.unshift('briczka' добовляет в начало);
// // footwear.shift(удаляет в начале);
// // footwear.push('Gazelle' добовляет в конец);
// // footwear.pop(удаляет последний ); 

// // for (let sneakers of footwear) {
// //     alert(sneakers);
// // };

// for (let i=0; i<footwear.length; i++) {

//     alert(footwear[i])
// }

// let styles = ['Джаз','Блюз'];
// styles.push('Рок-н-ролл');
// styles[1] = 'Классика';
// alert(styles.shift());
// styles.unshift('Рэп','Регги')

// console.log(styles);











// let sneakers = ['adidas', 'nike', 'рибОК'];

// sneakers.indexOf('nike')
// alert (sneakers.indexOf('nike2'))

// for (let footwear of sneakers) {
//     alert(footwear);
// }

// for (let i = 0; i < sneakers.length; i++) {
//     alert(sneakers[i]);
// }

// sneakers.splice(0, 1, 'Dawaj')

// alert(sneakers)



// for (let best of 'privet') {
//     alert(best);
// }

// let obj = {
//     name: 'Ivan',
//     age: 30,
//     size: 188
// };

// let map = new Map(Object.entries(obj));
// alert(map[1])


// let arr = ['Apple', 'Orange', 'Banana'];
// // for (let i = 0; i < arr.length; i++) {
// //     alert(arr[i]); 
// // }

// for (let dlina of arr) {
//     alert(dlina);
// }


// let users = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ages = users.map(number => {
//     if (number % 2 !== 0) {
//         return number + 1;
//     } else {
//         return number;
//     }
// });


// let users = [1, 2, 3, 10];
// let ages = users.map(her=>'German');
// console.log(ages)
// console.log(users)

// let megaUser = [2, 2, 2, 2, 2, 2, 1];
// // let num = megaUser.map(number => {
// //     if (number % 2 !== 0) {
// //         return number + 1;
// //     }
// //     return number;

// // })
// // let num = megaUser.map(number =>  {
// //     return number % 2 !== 0 ? number + 1 : number
// // });

// let num = megaUser.map(number =>  number % 2 !== 0 ? number + 1 : number);

// console.log(megaUser)
// console.log(num)

// let tit = [1,2];
// let bit = tit.concat([3,4]);
// alert(bit)


// item => item.id == 1



// function hi(item) {
//     if (Array.isArray(item)) {
//         return item.length;
//     } else {
//         return item;
//     }
// }
// console.log(hi([1, 2, 3, 4]))

// let str = 'privet'
// console.log(str.split(''));


// let student = {
//     name: 'Herman',
//     age: 24,
//     learn: ['html', 'css', 'js']
// };

// let ja = JSON.stringify(student);

// console.log(typeof ja)
// console.log(ja)

// function gidra(){
//     gidra()
//     return 
// };



// function sumTo(n) {
//     if (n==1) {
//         return n;
//     }else{
//         return n + sumTo(n-1);
//     }
// }

// console.log(sumTo(3));



// function sayBy() {
//     console.log('By');

//     sayBy.plusik++;
// }
// sayBy.plusik = 0;

// sayBy();
// sayBy();
// sayBy();
// console.log(`вызвана ${sayBy.plusik} раза`)

// let sum = new Function('a', 'b', 'return a + b');
// console.log(sum(1,2))

// setTimeout;
// setInterval;

// function privet(name, age) {
//     alert(name + ' ' + age)
// }

// setInterval(privet, 1000, 'Herman', 'Namreg');

// function a() {
//     setTimeout(() => {
//       console.log(1);
//     }, 2);

//     setTimeout(() => {
//       console.log(2);
//     });

//     console.log(3);

//     setTimeout(() => {
//       console.log(4);
//     });
//   }

//   a();

// let user = {
//     name: 'Herman',
//     age: 24,
// };

// let wtf = Object.getOwnPropertyDescriptor (user, 'name',);

// console.log(wtf)

// Object.defineProperty(user, 'name', {
//     writable: false
// });

// user.name = 'Peet';

// console.log(user.name)

// alert(user.name)


// let user = {};

// Object.defineProperty (user,'name', {
//     value: 'Herman',
//     enumerable: false,
//     configurable: false,
//     writable: false,
// });
// let descriptor = Object.getOwnPropertyDescriptor (user, 'name')
// console.log(descriptor)
// user.name = 'Namreg';
// alert (user.name)


// let superPuper = {
//     name: 'Herman',
//     surname: 'Piatrouski',

//     get fullName() {
//         return `${this.name}`+' '+ `${this.surname}`;
//     }
// };

// alert(superPuper.fullName)

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayBy() {
//         alert('bye');
//     }
// }

// let user = new User('Herman');
// user.sayBy();

// class Namreg {
//     constructor(user) {
//         this.user = user;
//     }

//     sayBy(){
//         alert('bye');
//     }

// }

// let namreg = new Namreg('Herman1')
// namreg.sayBy()
// alert(namreg instanceof Namreg)


// class Animal {
//     speed;
//     name;

//     constructor(name, lastName) {
//         this.speed = 0;
//         this.name = name + ' ' + lastName;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }
// }

// // Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {

//     constructor(name, lastName) {
//         super(name, lastName)
//     }
//     hide() {
//         this.stop();
//     }

// }

// let rabbit = new Rabbit("Белый кролик", 'Wasia');

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!


// class User {
//     name;
//     age;

//     constructor(name) {
//         this.name = name;
//         this.age = 0;
//     }

//     method1() {
//         alert(this.name);
//     }

// }

// class Admin extends User {
//     method1() {
//         alert(this.name+'_'+this.age)
//     }
// }

// let admin1 = new Admin('Karl');

// let user1 = new User('Vasia');
// let user2 = new User('Kasia');
// let user3 = new User('Dorota');

// let users = [user1, user2, user3, admin1];

// // users.forEach(value => {
// //     value.method1()
// // })


// for (let i = 0; i < users.length; i++) {
//     users[i].method1()
// };

// admin1 instanceof User


// let value = true;
// value = String(value)
// console.log(typeof (value))

// let str = '123';
// str = +str
// console.log(typeof str)

// let age = prompt ('vozrast', 18);

// let question = (age<3)? 'Privet maly':
//     (age <18) ? 'Privet':
//     (age <100)? 'Zdarova':
//     'kakoj age!';
//     console.log(question)

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log( i );
//     }
//   }


// for (let i = 0; i <= 10; i++) {
//     if (i % 1 == 1) {
//         console.log(i);
//     }
// }



// let vasia = {
//     name: 'Vasia',
//     height: 130,
// };

// let piotrek = Object.create(vasia);

// piotrek = {
//     name: 'Piotrek'

// }

// alert(piotrek.name)












// 1 стринга 
// 2 нуб
// 3 нул
// 4 андерфаинд 
// 5 сымбол
// 6 бигинт 
// 7 булиан 
// 8 об

// == / === 




// let array = [2,4,6,3];

// let sum = 0;
// for (let i = 4; i < array.length; i++) {
// 15 += array[3] (3) = 6
// };
// console.log(15)


// 6 += 5
// 6 = 6 + 5

// LET 
// 1) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 0);
//     }, 3000);
//   }

//   2) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 1);
//     }, 3000);
//   }

//   3) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 2);
//     }, 3000);
//   }

//   4) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 3);
//     }, 3000);
//   }

// =========

// VAR 
// 1) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 0);
//     }, 3000);
//   }
//   1) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 1);
//     }, 3000);
//   }

//   2) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 1);
//     }, 3000);
//   }
//   1) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 2);
//     }, 3000);
//   }

//   2) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 2);
//     }, 3000);
//   }

//   3) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 2);
//     }, 3000);
//   }
//   1) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 3);
//     }, 3000);
//   }

//   2) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 3);
//     }, 3000);
//   }

//   3) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 3);
//     }, 3000);
//   }

//   4) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 3);
//     }, 3000);
//   }
//   1) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 4);
//     }, 3000);
//   }

//   2) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 4);
//     }, 3000);
//   }

//   3) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 4);
//     }, 3000);
//   }

//   4) {
//     setTimeout(function() {
//       console.log('The index of this number is: ' + 4);
//     }, 3000);
//   }



// ЗАМЫКАНИЕ/Closures

// var f = function () {
//     console.log(1);
// }

// var execute = function (f) {
//     setTimeout(f, 1000);
// }

// execute(f); // что выведет в консоль и почему

// f = function () {
//     console.log(2);
// }

// execute(f);


// Promise.resolve(10)


//     .then(e => console.log(e)) // ??

//     .then(e => Promise.resolve(e))

//     .then(console.log) // ??

//     .then(e => {

//         if (!e) {

//             throw 'Error caught';

//         }

//     })

//     .catch(e => {

//         console.log(e); // ??

//         return new Error('New error');

//     })

//     .then(e => {

//         console.log(e.message); // ??

//     })

//     .catch(e => {

//         console.log(e.message); // ??

//     });


//     console.log = function(a){
//         console.log(a)
//     }

// let func = (a) => {console.log(a)}
// let func = a => console.log(a)

//     console.log = (a) =>(a)

//     function(a,b){
//         console.log(a+b)
//     }

// let users = [{ id: 1, name: 'German' }, { id: 2, name: 'Bogdan' }, { id: 3, name: 'Anna' }]

// // 1 создать переменную и записать туда массив имен пользв

// users = users.map(value => { return (value.id) });
// // console.log(usersName)

// // map = грубо говоря объект
// // set = упорядоченный объект

// // ключь id значение объект юзера

// let usersMap = new Map();
// usersMap.set(4, { id: 4, name: 'Herman' });
// users.forEach(value => {
//     usersMap.set(value.id, value)
// })

// console.log(usersMap.get(1));


// let usersMap = new Map();
// users.forEach(value=>{
//     usersMap.set(value.id, value)
// });

// console.log(usersMap.get(1)); 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3))





// 1-----------------------------------------------------------------------
// let question = prompt('Какое «официальное» название JavaScript?');

// if(question == 'ECMAScript'){
//     alert('Верно!')
// }else{
//     alert("Не знаете? ECMAScript!")
// };
// 2---------------------------------------------------------------------------
// // Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// // 1, если значение больше нуля,
// // -1, если значение меньше нуля,
// // 0, если значение равно нулю.
// // Предполагается, что пользователь вводит только числа.

// let num = prompt("Введи число", 0);

// let message = (num > 0) ? '1' :
//               (num < 0) ? '-1':
//               '0';

// alert(message);
// 3--------------------------------------------------------------------------------
//     При помощи цикла for выведите чётные числа от 2 до 10

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// };

// 4-----------------------------------------------------------------------------------
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0; 
// while (i<3) {
//   i++
// }

// alert( `number ${i}!` );

// 5-----------------------------------------------------------------------------------------
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let question;
// do {
//   question = prompt ('vedi 4islo', 100);
// } while (question <=100);

// alert(question)

// for (; ;) {
//   if (+prompt('vvedi 4islo', 0) > 100) { break }
// }

// 6---------------------------------------------------------------------------------------
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function showMin (a,b) {
//   if (a<b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(showMin (2,5));
// console.log(showMin (3,-1));
// console.log(showMin (1,1));

// 7----------------------------------------------------
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Запустить демо

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// function pow(x,n) {
//   let result = x;
//   for (let i=0; i<n; i++) {
//     return result = result * x;
//   }
// }

// let x = prompt ('vvedi x?');
// let n = prompt ('vvedi n?');

// if (n<1) {
//   alert (`stepen ${n} ne podderzhivaetsia` )
// }else {
//   alert(pow(x,n))
// }

// 8---------------------------------------------------------

// let obj = {};

// function isEmty(obj) {
//   for (let key in obj) {
//     return false
//   }
//   return false
// }

// 9-----------------------------------------------------------

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// // let sum = 0;
// // for (let key in salaries) {
// //   sum = sum + salaries[key]
// // }

// // console.log(sum)

// function calcSum(){
//   let sum = 0;
//   for (let key in salaries) {
//   return sum += salaries[key]
//   }
// }

// console.log(calcSum())


// 10------------------------------------------------------------------

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function sumCalc(obj){
//   for (let key in obj){
//     if(typeof obj[key] == 'number'){
//       obj[key] *= 2;
//     }
//   }
// }


// 11----------------------------------------------------------------------

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// let calculator = {
//   read() {
//     this.a = +prompt('vedi a', 0);
//     this.b = +prompt('vedi b', 0)
//   },

//   sum() {
//     return this.a + this.b
//   },

//   mul() {
//     return this.a * this.b
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


// function seyHi(){
//     alert('Privet')
// }

// 12----------------------------------------------------
// let a = +prompt ('enter the number', 0);
// let b = +prompt ('enter the number', 0);

// function calcSum(a,b){
//     return a+b;
// };

// console.log(calcSum(a,b));

// 13------------------------------------------------------
// function readNumber(){
//    let num = prompt ('enter the number', 0)

//    for (; ;){
//     if(+prompt('enter the number') == nul && num == ' ');
//    }

// }

// console.log(readNumber())


// function readNumber(){
//     let num = prompt ('enter the number', 0)

//     for ()
// }


// function makeExchange(sumMoney){

//     if(sumMoney => 10000){
//         return {error: "You are rich, my friend! We don't have so much coins for exchange"}
//     }

//     if (sumMoney / 50 >= 1){
//         result.H = Math.floor(sum)
//     }
// }


// let fun = function(a,b){
//   return console.log(a+b);
// }

// fun(2,4)

// let sum = (a,b) => (a*b);

// console.log(sum(2,3))

// let sayHi = () => (console.log('Hello World!'));

// sayHi();


// let age = prompt ('Сколько тебе лет?', 18);

// let welcome = (age > 18) ? 
//   () => alert('Zdraste') :
//   () => alert('Privet');

//   welcome();

// let sum = (a,b) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum(13,2));


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Вы согласны?",
//   () =>  alert("Вы согласились."),
//   () =>  alert("Вы отменили выполнение.")
// );

// let user = {
//   name: 'John',
//   age: 30,
// };

// let key = prompt('Vvedi imia user', 'name');

// console.log(user[key])



// let fruit = prompt('Kakoj frukt', 'ms');

// let bag = {
//   [fruit]: 5,
// };

// console.log(bag.ms);


// let megaUser = {
//   name: 'Alex',
//   age: 30,
//   sex: 'M'
// };

// console.log('name' in megaUser);
// console.log(megaUser.age === undefined);



// let config = {
//     alert: setInterval( () => {
//         console.log('Alert!')
//     }, 1000)
// }

// config = null;


// setInterval(() => console.log('Hi!'), 1000);


//  info = {
//     [Symbol('a')]: 'b'
// }

// console.log(info)
// console.log(object.keys(info))

// const getUser = user => {name: user.name, age: user.age}

// const user = { name: "taras", age: 26 }

// console.log(getUser(user))


// const one = (false || {} || null);
// const two = (null || false || "" );
// const three = ([] || 0 || true);

// console.log(one, two, three)


// console.log(Number(2) === Number(2));
// // console.log(Bolean(true) === Bolean(true));
// console.log(Symbol('foo') === Symbol('foo'));


// const numbers = [1,2,3,4,5];
// const [y] = numbers;

// console.log(y);



//         function checkAge(age) {
//             if (age > 18) {
//                 return true;
//             } else {
//                 return confirm('razreshal kto?')
//             }
//         }

// function checkAge(age) {
//     return (age > 18) || confirm('kto ty?')
//      };

// let checkAge = (age) => {return(age > 18) ? true : confirm('kto ty?')};
// checkAge();




// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// function min(a,b) {
//     if ( a < b) {
//         return a;
//     } else ( a > b ) 
//         return b;
// }

// console.log(min(2, 5)); 
// console.log(min(3, -1)); 
// console.log(min(1, 1));



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Wy soglasny?",
//     ()=>alert('Da!'),
//     ()=>alert('Net!')
// );


// let user = {
//     name: 'Herman',
//     age: 24,
//     sayHi(){
//         alert(this.name);
//     }
// };


// let user = {name:'Olia'};
// let admin = {name:'Sveta'};

// function sayHi() {
//     console.log(this.name)
// }

// user = sayHi;
// admin.f = sayHi;

// admin.f();
// user();




// let calculator = {
    
//     read() {
//         this.a = +prompt('vvedi 4islo a', 0),
//         this.b = +prompt('vvedi 4islo b', 0)
//     },

//     sum() {
//         return this.a + this.b
//     },

//     mul() {
//         return this.a * this.b
//     }

// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul())