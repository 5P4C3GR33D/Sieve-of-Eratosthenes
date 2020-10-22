let number = prompt("Enter quantity:", 20);

function findPrimeNumber(quantity) {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(i);
  }
  //console.log(arr);

  for (let i = 2; i <= Math.sqrt(quantity); i++) {
    if (arr[i]) {
      for (let j = i * i; j < quantity; j += i) {
        arr[j] = 0;
      }
    }
  }
  //console.log(arr.filter((value) => value > 1));
  document.write(arr.filter((value) => value > 1));
}

findPrimeNumber(number);
