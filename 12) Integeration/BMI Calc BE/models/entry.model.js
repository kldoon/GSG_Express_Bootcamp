import { DataTypes, Sequelize } from "sequelize";

// This line just to get the autocomplete working!
let s = new Sequelize({ dialect: 'mysql' });

const Entry = (sequelize) => {
  s = sequelize;
  return s.define("entry", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

export default Entry;