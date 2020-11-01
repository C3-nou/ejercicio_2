const db = require("./database/conn.js");
const Infected = db.infected;
const Op = db.Sequelize.Op;

exports.create = async function(req, res){
  if (!req.body.id_de_caso) {
    res.status(400).send({
      message: "ID del Caso no puede estar vacío."
    });
  }

  const infected = await Infected.findOne({ where: { id_de_caso: req.body.id_de_caso } });
  console.log("Infected Info: ", infected)
  if (infected === null) {
    // Create a Infected

    req.body.fecha_reporte_web = req.body.fecha_reporte_web.split(' ')[0].split("/").reverse().join("-");
    req.body.fecha_inicio_sintomas = req.body.fecha_inicio_sintomas.split(' ')[0].split("/").reverse().join("-");
    req.body.fecha_diagnostico = req.body.fecha_diagnostico.split(' ')[0].split("/").reverse().join("-");
    req.body.fecha_recuperado = req.body.fecha_recuperado.split(' ')[0].split("/").reverse().join("-");  
    const Infected_insert = {
      fecha_reporte_web: req.body.fecha_reporte_web ? new Date(req.body.fecha_reporte_web) : false,
      id_de_caso: req.body.id_de_caso ? req.body.id_de_caso : false,
      fecha_de_notificaci_n: req.body.fecha_de_notificaci_n ? new Date(req.body.fecha_de_notificaci_n) : false,
      departamento: req.body.departamento ? req.body.departamento : false,
      departamento_nom: req.body.departamento_nom ? req.body.departamento_nom : false,
      ciudad_municipio: req.body.ciudad_municipio ? req.body.ciudad_municipio : false,
      ciudad_municipio_nom: req.body.ciudad_municipio_nom ? req.body.ciudad_municipio_nom : false,
      edad: req.body.edad ? req.body.edad : false,
      unidad_medida: req.body.unidad_medida ? req.body.unidad_medida : false,
      sexo: req.body.sexo ? req.body.sexo : false,
      fuente_tipo_contagio: req.body.fuente_tipo_contagio ? req.body.fuente_tipo_contagio : false,
      ubicacion: req.body.ubicacion ? req.body.ubicacion : false,
      estado: req.body.estado ? req.body.estado : false,
      pais_viajo_1_cod: req.body.pais_viajo_1_cod ? req.body.pais_viajo_1_cod : false,
      pais_viajo_1_nom: req.body.pais_viajo_1_nom ? req.body.pais_viajo_1_nom : false,
      recuperado: req.body.recuperado ? req.body.recuperado : false,
      fecha_inicio_sintomas: req.body.fecha_inicio_sintomas ? new Date(req.body.fecha_inicio_sintomas) : false,
      fecha_diagnostico: req.body.fecha_diagnostico ? new Date(req.body.fecha_diagnostico) : false,
      fecha_recuperado: req.body.fecha_recuperado ? new Date(req.body.fecha_recuperado) : false,
      tipo_recuperacion: req.body.tipo_recuperacion ? req.body.tipo_recuperacion : false,
      per_etn_: req.body.per_etn_ ? req.body.per_etn_ : false,
    };

    Infected.create(Infected_insert)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error al crear infectado."
        });
      });
  }
};

// Retrieve all Infecteds from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Infected.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Infecteds."
      });
    });
};

// Find a single Infected with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Infected.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al buscar id = ${id}`
      });
    });
};

// find all published Infected
exports.findInfo = (req, res) => {
  console.log(req.body)
  if( req.body.gender ){ filter_obj = { sexo: req.body.gender } };
  if( req.body.estado ){ filter_obj = { estado: { [Op.like]: `%${req.body.estado}%` } } };
  if(req.body.ciudad) { filter_obj = { ciudad_municipio: parseInt(req.body.ciudad) } }
  Infected.findAll({ where: filter_obj })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al filtrar por Género."
      });
    });
};