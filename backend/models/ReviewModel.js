// models/ReviewModel.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Review = db.define(
  "reviews",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Anonymous",
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Review;
