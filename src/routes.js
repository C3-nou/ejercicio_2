module.exports = app => {
    const infected = require("./middleware.js");
  
    var router = require("express").Router();
  
    // Creación
    router.post("/", infected.create);
  
    // Retorna Todos
    router.get("/", infected.findAll);
  
    // Retorna Filtrado por id
    router.get("/:id", infected.findOne);

    // Retorna Filtrado por genero
    router.post("/filter", infected.findInfo);
  
    app.use('/api/infected', router);
  };