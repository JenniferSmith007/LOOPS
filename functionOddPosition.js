function odd(arr) {
  let result = arr.filter((num, i) => i % 2 == 1).join(" ");
  console.log(result);
}

odd([1, 0, 1005, 42, 74, 83]);
