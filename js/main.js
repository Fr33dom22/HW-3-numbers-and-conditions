"use strict";

// 1. Вік користувача
while (true) {
  let input = prompt("Введіть ваш вік:");
  if (input === null) {
    alert("Ви скасували введення!");
    break;
  }
  let age = Number(input);
  if (Number.isNaN(age) || age < 0) {
    alert("Некоректні дані, спробуйте ще раз");
    continue;
  }
  if (age <= 11) alert("Ви дитина");
  else if (age <= 17) alert("Ви підліток");
  else if (age <= 59) alert("Ви дорослий");
  else if (age <= 125) alert("Ви пенсіонер");
  else alert("Ви суперпенсіонер");
  break;
}

// 2. Число 0-9 -> спецсимвол
while (true) {
  let numInput = prompt("Введіть число від 0 до 9:");
  if (numInput === null) {
    alert("Введення скасовано.");
    break;
  }
  numInput = numInput.trim();
  if (/^[0-9]$/.test(numInput)) {
    let num = Number(numInput);
    let symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
    alert("Ваш символ: " + symbols[num]);
    break;
  } else {
    alert("Некоректне число, спробуйте ще раз");
  }
}

// 3. Сума в діапазоні
while (true) {
  let startInput = prompt("Введіть початок діапазону:");
  let endInput = prompt("Введіть кінець діапазону:");
  if (startInput === null || endInput === null) {
    alert("Введення скасовано.");
    break;
  }
  let start = Number(startInput);
  let end = Number(endInput);
  if (Number.isNaN(start) || Number.isNaN(end)) {
    alert("Некоректні дані, спробуйте ще раз");
    continue;
  }
  let sum = 0;
  for (let i = start; i <= end; i++) sum += i;
  alert("Сума чисел: " + sum);
  break;
}

// 4. Найбільший спільний дільник
while (true) {
  let aInput = prompt("Введіть перше число:");
  let bInput = prompt("Введіть друге число:");
  if (aInput === null || bInput === null) {
    alert("Введення скасовано.");
    break;
  }
  let a = Number(aInput);
  let b = Number(bInput);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Некоректні дані, спробуйте ще раз");
    continue;
  }
  let x = a,
    y = b;
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  alert("Найбільший спільний дільник: " + x);
  break;
}

// 5. Дільники числа
while (true) {
  let nInput = prompt("Введіть число:");
  if (nInput === null) {
    alert("Введення скасовано.");
    break;
  }
  let n = Number(nInput);
  if (Number.isNaN(n) || n <= 0) {
    alert("Некоректні дані, спробуйте ще раз");
    continue;
  }
  let divs = "";
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divs += i + " ";
  }
  alert("Дільники: " + divs);
  break;
}

// 6. Паліндром (5 цифр)
while (true) {
  let pal = prompt("Введіть п’ятизначне число:");
  if (pal === null) {
    alert("Введення скасовано.");
    break;
  }
  if (/^\d{5}$/.test(pal)) {
    if (pal === pal.split("").reverse().join("")) {
      alert("Це паліндром!");
    } else {
      alert("Не паліндром");
    }
    break;
  } else {
    alert("Потрібно ввести п’ятизначне число, спробуйте ще раз");
  }
}

// 7. Знижка на покупку
while (true) {
  let totalInput = prompt("Введіть суму покупки:");
  if (totalInput === null) {
    alert("Введення скасовано.");
    break;
  }
  let total = Number(totalInput);
  if (Number.isNaN(total) || total < 0) {
    alert("Некоректна сума, спробуйте ще раз");
    continue;
  }
  let discount = 0;
  if (total >= 200 && total < 300) discount = 3;
  else if (total >= 300 && total < 500) discount = 5;
  else if (total >= 500) discount = 7;
  let finalSum = total - (total * discount) / 100;
  alert(`Сума до оплати: ${finalSum} (знижка ${discount}%)`);
  break;
}

// 8. Статистика з 10 чисел
let positives = 0,
  negatives = 0,
  zeros = 0,
  even = 0,
  odd = 0;
for (let i = 0; i < 10; i++) {
  let valInput = prompt(`Введіть число ${i + 1}:`);
  if (valInput === null) {
    alert("Введення скасовано.");
    break;
  }
  let val = Number(valInput);
  if (Number.isNaN(val)) {
    alert("Некоректні дані, введіть ще раз");
    i--;
    continue;
  }
  if (val > 0) positives++;
  else if (val < 0) negatives++;
  else zeros++;

  if (val % 2 === 0) even++;
  else odd++;
}
alert(
  `Додатніх: ${positives}, Від’ємних: ${negatives}, Нулів: ${zeros}, Парних: ${even}, Непарних: ${odd}`
);

// 9. Дні тижня
let days = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя",
];
let i = 0;
while (confirm(days[i] + ". Хочете побачити наступний день?")) {
  i = (i + 1) % days.length;
}
