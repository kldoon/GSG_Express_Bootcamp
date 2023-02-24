const logger = (req, res, next) => {
  console.log(`[${req.method}][${req.originalUrl}] - ${new Date().toLocaleString()}`);
  next();
};

const printHi = (req, res, next) => {
  console.log("Hi====");
  next();
}

const printBye = (req, res, next) => {
  console.log("====bye");
}

export {
  logger,
  printHi,
  printBye
}