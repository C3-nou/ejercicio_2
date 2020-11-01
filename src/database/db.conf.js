module.exports = {
    HOST: "localhost",
    USER: "dev",
    PASSWORD: "DeV.2020",
    DB: "pruebas_node",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };