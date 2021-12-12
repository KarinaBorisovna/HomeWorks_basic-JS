'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let d;
  let x;
  let x1;
  let x2;

  d = (b ** 2)-(4 * a * c);
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    x = -b / (2 * a);
    arr.push(x)
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d) )/(2 * a);
    x2 = (-b - Math.sqrt(d) )/(2 * a);
    arr.push(x1, x2);
  }

  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, date) {

  let percentNum = parseInt(percent, 10);
  let contributionNum = parseInt(contribution, 10);
  let amountNum = parseInt(amount, 10);

  if ((typeof percentNum === 'number') && (Number.isNaN(percentNum) === true)) {    
    alert(`Параметр "Процентная ставка" содержит неправильное значение ${percentNum}`)
  }

  if ((typeof contributionNum === 'number') && (Number.isNaN (contributionNum) === true)) {
    alert(`Параметр "Начальный взнос" содержит неправильное значение ${contributionNum}`)
  }
  
  if ((typeof amountNum === 'number') && (Number.isNaN (amountNum) === true)) {
    alert(`Параметр "Общая стоимость" содержит неправильное значение ${amountNum}`)
  }

  let totalAmount;
  let returnSum;
  let payment;
  let P;

  let now = new Date();
  let dt = new Date(date);
  let month = dt.getMonth();
  let dtNow = new Date(now);
  let monthNow = dtNow.getMonth();
  let yearNow = dtNow.getFullYear();
  let year = dt.getFullYear();
 
  let monthCount = (monthNow + 1) - (month + 1);
  let yearSum = year - yearNow;
  let monthSum; 

  if (monthCount === 0) {
    monthSum = yearSum * 12;
  } else if (monthCount != 0) {
    if (monthNow < month) {
      monthSum = (yearSum * 12) + Math.abs(monthCount);
    } else if (monthNow > month) {
      monthSum = (yearSum * 12) - Math.abs(monthCount);
    }
  }

  P = (percentNum / 100) / 12;
  returnSum = amountNum - contributionNum;
  payment = returnSum * (P + (P / (((1 + P) ** monthSum) - 1)))
  totalAmount = Number((payment * monthSum).toFixed(2));
  return totalAmount;
}

// let res;
// res = calculateTotalMortgage('4t0', 0, 'fsd50000', '12');

