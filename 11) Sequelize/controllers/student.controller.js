import db from "../models/index.js";

const create = (req, res) => {
  const std = {
    name: 'Ahmad',
    gpa: 2.5,
    is_graduated: false
  };

  db.Student.create(std)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send(err.message || "Something went wrong");
    });
};

const findAll = (req, res) => {

};

export default {
  create,
  findAll
}