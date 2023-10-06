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
  return text[index];
}

function solve() {
  let sudoku = read(0);
  function isEmpty(el) {
    if (el === '-') {
      return true;
    }
    return false;
  }

  function searchDigits(row, column) {
    let arr = [];
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[row][i] !== '-') {
        arr.push(sudoku[row][i]);
      }
    }
    for (let j = 0; j < sudoku.length; j++) {
      if (sudoku[j][column] !== '-') {
        arr.push(sudoku[j][column]);
      }
    }
    let boxColumn = Math.floor(column / 3) * 3;
    let boxRow = Math.floor(row / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxColumn; j < boxColumn + 3; j++) {
        if (sudoku[i][j] !== '-') {
          arr.push(sudoku[i][j]);
        }
      }
    }
    const arrNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return [...arrNumber, ...arr].filter(
      (el) => arrNumber.includes(el) !== arr.includes(el)
    );
  }

  for (let r = 0; r < sudoku.length; r++) {
    for (let c = 0; c < sudoku.length; c++) {
      if (isEmpty(sudoku[r][c])) {
        k = 0;
        sudoku[r][c] = searchDigits(r, c)[0];
      }
    }
  }

  console.table(sudoku);
}

solve();
// [1, 5, 8, 2, 9, 1, 6, 3, 2] // 4, 7

// [
//   ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
//   ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
//   ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
//   ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
//   ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
//   ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
//   ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
//   ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
//   ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
// ];

// Math.floor((c / 3) * 3) -4   3, 3
// Math.floor((r / 3) * 3) -0

// 0 - 2 3 - 5 6 - 8

// 1 2 3 4 5 6 7  9
//
