import { DataTypes } from "sequelize";

const Student = (sequelize) => {
  // "student" is going to be the table name in DB
  return sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
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