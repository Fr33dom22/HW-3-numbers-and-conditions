"use strict";

// 1. Вік користувача

let age = +prompt("Введіть ваш вік:");

if (isNaN(age) || age < 0) {
  alert("Некоректні дані!");
} else if (age <= 11) {
  alert("Ви дитина");
} else if (age <= 17) {
  alert("Ви підліток");
} else if (age <= 59) {
  alert("Ви дорослий");
} else if (age <= 125) {
  alert("Ви пенсіонер");
} else if (age >= 126) {
  alert("Ви суперпенсіонер");
} else {
  alert("Невідома помилка.");
}

// 2. Число 0-9 -> спецсимвол

let num = +prompt("Введіть число від 0 до 9:");
let symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
if (num >= 0 && num <= 9) {
  alert("Ваш символ: " + symbols[num]);
} else {
  alert("Некоректне число");
}

// 3. Сума в діапазоні

let start = +prompt("Введіть початок діапазону:");
let end = +prompt("Введіть кінець діапазону:");
let sum = 0;
for (let i = start; i <= end; i++) {
  sum += i;
}
alert("Сума чисел: " + sum);

// 4.Найбільший спільний дільник

let a = +prompt("Введіть перше число:");
let b = +prompt("Введіть друге число:");
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
alert("Найбільший спільний дільник: " + a);

// 5. Дільники числа

let n = +prompt("Введіть число:");
let divs = "";
for (let i = 1; i <= n; i++) {
  if (n % i === 0) divs += i + " ";
}
alert("Дільники: " + divs);

// 6. Паліндром (5 цифр)

let pal = prompt("Введіть п’ятизначне число:");
if (pal.length === 5 && pal === pal.split("").reverse().join("")) {
  alert("Це паліндром!");
} else {
  alert("Не паліндром");
}

// 7. Знижка на покупку

let total = +prompt("Введіть суму покупки:");
let discount = 0;
if (total >= 200 && total < 300) discount = 3;
else if (total >= 300 && total < 500) discount = 5;
else if (total >= 500) discount = 7;
let finalSum = total - (total * discount) / 100;
alert(`Сума до оплати: ${finalSum} (знижка ${discount}%)`);

// 8. Статистика з 10 чисел

let positives = 0, negatives = 0, zeros = 0, even = 0, odd = 0;
for (let i = 0; i < 10; i++) {
  let val = +prompt(`Введіть число ${i+1}:`);
  if (val > 0) positives++;
  else if (val < 0) negatives++;
  else zeros++;

  if (val % 2 === 0) even++;
  else odd++;
}
alert(`Додатніх: ${positives}, Від’ємних: ${negatives}, Нулів: ${zeros}, Парних: ${even}, Непарних: ${odd}`);

// 9. Дні тижня по колу

let days = ["Понеділок","Вівторок","Середа","Четвер","П’ятниця","Субота","Неділя"];
let i = 0;
while (confirm(days[i] + ". Хочете побачити наступний день?")) {
  i = (i + 1) % days.length;
}