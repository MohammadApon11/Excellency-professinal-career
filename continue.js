const number = [3, 53, 23, 34, 51, 50, 53, 35, 93, 100, 184];
for (let i = 0; i < number.length; i++) {
  const current = number[i];
  if (current > 50) {
    continue;
  }
  console.log(current);
}
