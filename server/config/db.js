require("dotenv").config();

module.exports = {
  username: process.env.NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  //   operatorAliases: false,
  //   define: {
  //     timestamps: true,
  //     underscored: true,
  //     underscoredAll: true,
  //   },
};
