const EVAL_ARR = [
  {
    status: "Underweight",
    from: 0,
    to: 18.5
  },
  {
    status: "Normal",
    from: 18.5,
    to: 25
  },
  {
    status: "Overweight",
    from: 25,
    to: 30
  },
  {
    status: "Obesity",
    from: 30,
    to: 100
  },
];

const evaluate = (bmi) => {
  // let status = "Unknown";
  // EVAL_ARR.forEach(item => {
  //   if (bmi >= item.from && bmi < item.to) {
  //     status = item.status;
  //     return;
  //   }
  // });
  // return status

  const cClass = EVAL_ARR.find(item => {
    if (bmi >= item.from && bmi < item.to) {
      return true;
    }
  });

  return cClass.status;
};

export {
  EVAL_ARR,
  evaluate
}