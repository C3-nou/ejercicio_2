const db = require("./database/conn.js");
const Infected = db.infected;
const Op = db.Sequelize.Op;

exports.create = async function (data) {
    status = false
    if (!data.id_de_caso) {
        return status;
    }

    //console.log("Before id_de_caso")

    const infected = await Infected.findOne({ where: { id_de_caso: data.id_de_caso } });
    //console.log("Infected Info: ", infected)
    if (infected === null) {
        //console.log("Ingresa a guardar")
        // Create a Infected

        data.fecha_reporte_web = data.fecha_reporte_web.split(' ')[0].split("/").reverse().join("-");
        data.fecha_inicio_sintomas = data.fecha_inicio_sintomas.split(' ')[0].split("/").reverse().join("-");
        data.fecha_diagnostico = data.fecha_diagnostico.split(' ')[0].split("/").reverse().join("-");
        data.fecha_recuperado = data.fecha_recuperado.split(' ')[0].split("/").reverse().join("-");
        const Infected_insert = {
            fecha_reporte_web: data.fecha_reporte_web ? new Date(data.fecha_reporte_web) : false,
            id_de_caso: data.id_de_caso ? data.id_de_caso : false,
            fecha_de_notificaci_n: data.fecha_de_notificaci_n ? new Date(data.fecha_de_notificaci_n) : false,
            departamento: data.departamento ? data.departamento : false,
            departamento_nom: data.departamento_nom ? data.departamento_nom : false,
            ciudad_municipio: data.ciudad_municipio ? data.ciudad_municipio : false,
            ciudad_municipio_nom: data.ciudad_municipio_nom ? data.ciudad_municipio_nom : false,
            edad: data.edad ? data.edad : false,
            unidad_medida: data.unidad_medida ? data.unidad_medida : false,
            sexo: data.sexo ? data.sexo : false,
            fuente_tipo_contagio: data.fuente_tipo_contagio ? data.fuente_tipo_contagio : false,
            ubicacion: data.ubicacion ? data.ubicacion : false,
            estado: data.estado ? data.estado : false,
            pais_viajo_1_cod: data.pais_viajo_1_cod ? data.pais_viajo_1_cod : false,
            pais_viajo_1_nom: data.pais_viajo_1_nom ? data.pais_viajo_1_nom : false,
            recuperado: data.recuperado ? data.recuperado : false,
            fecha_inicio_sintomas: data.fecha_inicio_sintomas ? new Date(data.fecha_inicio_sintomas) : false,
            fecha_diagnostico: data.fecha_diagnostico ? new Date(data.fecha_diagnostico) : false,
            fecha_recuperado: data.fecha_recuperado ? new Date(data.fecha_recuperado) : false,
            tipo_recuperacion: data.tipo_recuperacion ? data.tipo_recuperacion : false,
            per_etn_: data.per_etn_ ? data.per_etn_ : false,
        };

        Infected.create(Infected_insert)
            .then(data => {
                return 'data';
            })
            .catch(err => {
                return status;
            });
    }else{
        //console.log("Ingresa al false")
        return status;
    }
};