function factorialize(num) {
  let value = 1;
  if (num == 1 || num === 0) {
    return value;
    console.log(value);
  } else {
    for (let i = 1; i < num; i++) {
      value *= i;
    }
    return num * value;
  }
}
factorialize(9);
