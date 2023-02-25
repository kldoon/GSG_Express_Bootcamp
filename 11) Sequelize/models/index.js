import { Sequelize } from "sequelize";
import dbConfig from '../config/db.config.js'

const sequelize = new Sequelize(
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

const db = {};
db.sequelize = sequelize;

export default db;