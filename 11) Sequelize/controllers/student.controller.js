import db from "../models/index.js";
import { Op } from "sequelize";

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

const findAll = async (req, res) => {
  const minGPA = req.query.minGPA;
  const where = {};
  if (minGPA) {
    where.gpa = { [Op.gte]: minGPA }
  }

  try {
    const students = await db.Student.findAll({
      where
    });
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(err.message || "Something went wrong");
  }
};

export default {
  create,
  findAll
}