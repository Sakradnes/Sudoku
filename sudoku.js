function read(index) {
  const fs = require('fs');

  const text = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\r\n');
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].replace(/.{9}/g, '$& ').trim().split(' ');
  }
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[i][j] != undefined) {
        text[i][j] = Array.from(text[i][j]);
      }
    }
  }
  return (text[index])
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
