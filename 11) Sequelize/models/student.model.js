import { DataTypes, Sequelize } from "sequelize";

// This line just to get the autocomplete working!
let s = new Sequelize({ dialect: 'mysql' });

const Student = (sequelize) => {
  s = sequelize;
  // "student" is going to be the table name in DB
  return s.define("student", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gpa: {
      type: DataTypes.FLOAT
    },
    is_graduate: {
      type: DataTypes.BOOLEAN
    }
  });
};

export default Student;