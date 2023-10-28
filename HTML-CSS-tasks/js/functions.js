 /* Функция для проверки, является ли строка палиндромом */
 console.log("палиндромом");
function isPalindrome(str) {
    // Преобразуем строку в нижний регистр и удаляем все пробелы
    str = str.toLowerCase().replace(/\s/g, '');  
    // Переворачиваем строку и сравниваем с исходной
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome('дед')); // true
  console.log(isPalindrome('ИскАть таКси')); // true
  console.log(isPalindrome('Крот')); // false
 /* Функция которая принимает строку, 
 извлекается в ней цифры от 0 до 9 
 и возвращает их в виде целого положительного числа. 
 Если в строке нет ни одной цифры, то вернуть Nan */
 console.log("принимает строку,  извлекается в ней цифры от 0 до 9  и возвращает их в виде целого положительного числа");
  function extractNumbers(str) { 
    // Ищем все цифры в строке
    const regex = /\d+/g;
    // Если найдены цифры, то возвращаем их сумму, иначе - NaN 
  const match = str.match(regex); 
  if (match) { return parseInt(match.join('')); } 
  else { return NaN; } 
    }
 console.log(extractNumbers('2023 год')); // 2023
 console.log(extractNumbers('1 каштан, 0.5 банана')); // 105 
 console.log(extractNumbers('просто строка')); // NaN
  /* Функция которая принимает три параметра: 
  исходную строку, минимальную длину и строку с добавочными символами 
  — и возвращает исходную строку, дополненную указанными символами до заданной длины. 
  Символы добавляются в начало строки. 
  Если исходная строка превышает заданную длину, она не должна обрезаться. 
  Если «добивка» слишком длинная, она обрезается с конца. */
  console.log("принимает исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку");
  function addPadding(str, minLength, padding) {
    if (str.length >= minLength) {
      return str;
    }
    const paddingLength = minLength - str.length;
    const repeatedPadding = padding.repeat(Math.ceil(paddingLength / padding.length));
    const trimmedPadding = repeatedPadding.slice(0, paddingLength);    
    return trimmedPadding + str;
  }
  console.log(addPadding('1', 2, '0'));      // '01'
  console.log(addPadding('1', 4, '0'));      // '0001'
  console.log(addPadding('q', 4, 'werty'));  // 'werq'
  console.log(addPadding('q', 4, 'we'));     // 'wweq'
  console.log(addPadding('qwerty', 4, '0')); // 'qwerty'
   /* Функция для проверки длины строки. 
   Она принимает строку, которую нужно проверить, 
   и максимальную длину и возвращает true, 
   если строка меньше или равна указанной длине, 
   и false, если строка длиннее. */
   console.log("принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.");
   function checkStringLength(str, maxLength) {
    return str.length <= maxLength;
  }
  console.log(checkStringLength('проверяемая строка', 20)); // true
  console.log(checkStringLength('проверяемая строка', 18)); // true
  console.log(checkStringLength('проверяемая строка', 10)); // false