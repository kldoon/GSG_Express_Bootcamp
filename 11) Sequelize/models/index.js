import { Sequelize } from "sequelize";
import dbConfig from '../config/db.config.js'
import Student from "./student.model.js";

const db = {};
db.sequelize = new Sequelize(
  dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
      max: dbConfig.pool.max,
      min: dbConfig.pool.min
    }
  }
);

db.Student = Student(db.sequelize);

export default db;