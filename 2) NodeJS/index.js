setTimeout(() => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    console.log("Hello NodeJS World!");
    sum += i;
  }
  console.log(sum + 10);
}, 200);
