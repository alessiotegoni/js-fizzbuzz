for (let i = 0; i < 100; i++) {
  let num = i + 1;

  const isMultipleOf3 = num % 3 === 0;
  const isMultipleOf5 = num % 5 === 0;

  if (isMultipleOf3 && isMultipleOf5) {
    console.log("FizzBuzz");
    continue;
  }

  if (isMultipleOf3) {
    console.log("Fizz");
    continue;
  }

  if (isMultipleOf5) {
    console.log("Buzz");
    continue;
  }

  console.log(num);
}
