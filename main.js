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

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
