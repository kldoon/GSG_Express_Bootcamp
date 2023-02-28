const EVAL_ARR = [
  {
    status: "Underweight",
    from: 0,
    to: 18.5,
    color: 'yellow'
  },
  {
    status: "Normal",
    from: 18.5,
    to: 25,
    color: 'green'
  },
  {
    status: "Overweight",
    from: 25,
    to: 30,
    color: 'orange'
  },
  {
    status: "Obesity",
    from: 30,
    to: 100,
    color: 'red'
  },
];

const evaluate = (bmi) => {
  const cClass = EVAL_ARR.find(item => {
    if (bmi >= item.from && bmi < item.to) {
      return true;
    }
  });

  return cClass;
};

export {
  EVAL_ARR,
  evaluate
}