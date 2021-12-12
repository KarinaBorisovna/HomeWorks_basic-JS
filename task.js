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

  let list = {'percent': percent, 'contribution': contribution, 'amount': amount};
  let listNum = {};
  let itemNum;
  
  for (let item in list) {
    itemNum = parseInt(list[item], 10);
    if (isNaN(itemNum)) {
      return (`Параметр ${item} содержит неправильное значение "${list[item]}"`);
    } else {
      listNum[item] = itemNum;
    }
  }

      let totalAmount;
      let returnSum;
      let payment;
      

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

      let P = (listNum['percent'] / 100) / 12;
      returnSum = listNum['amount'] - listNum['contribution'];
      payment = returnSum * (P + (P / (((1 + P) ** monthSum) - 1)))
      totalAmount = parseFloat((payment * monthSum).toFixed(2));
      
    return totalAmount;  
}


// let res;
// res = calculateTotalMortgage('10g', 0, 1000, 12);
