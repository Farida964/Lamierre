// config/Database.js
import { Sequelize } from "sequelize";

const db = new Sequelize("lamierre_db", "root", "Freepalestina", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

export default db;
