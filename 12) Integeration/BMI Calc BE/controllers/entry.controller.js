import db from "../models/index.js";
import { Op } from "sequelize";

const create = (req, res) => {
  const entry = new db.Entry({
    fullName: req.body.fullName,
    height: req.body.height || 0,
    weight: req.body.weight || 0,
    status: req.body.status,
    color: req.body.color
  });

  entry.save()
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send(err.message || "Something went wrong");
    });
};

const findAll = async (req, res) => {
  db.Entry.findAll()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(500).send(err.message || "Something went wrong");
    });
};

const deleteById = (req, res) => {
  db.Entry.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.status(203).send();
    })
    .catch(err => {
      res.status(500).send(err.message || "Something went wrong");
    });
}

export default {
  create,
  findAll,
  deleteById
}