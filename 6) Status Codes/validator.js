// is the user object invalid?
const validateUserObject = (body) => {
  if (!body.fullName) {
    return "Full name is not found";
  } else if (!body.age || body.age < 13) {
    return "Age should be more than 13";
  } else if (!body.address) {
    return "Address is required";
  }
  return false;
};

export {
  validateUserObject
}