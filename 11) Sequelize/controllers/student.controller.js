import db from "../models/index.js";

const create = (req, res) => {
  const std = {
    name: req.body.name,
    gpa: req.body.gpa || 0,
    is_graduated: req.body.is_graduated || false
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