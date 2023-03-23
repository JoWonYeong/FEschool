function gugudan(n) {
  let result = '';
  for (let i = 1; i <= 9; i++) {
    result = result + n * i + ' ';
  }
  return result;
}

console.log(gugudan(2));
