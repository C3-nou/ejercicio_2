// let departament = sequelize.define("departament",{
//     name: {
//         type: Sequelize.STRING
//     },
// })

// let city = sequelize.define("city",{
//     name: {
//         type: Sequelize.STRING
//     },
// })

// let Infected = sequelize.define("infected", {
//     fecha_reporte_web: {
//         type: Sequelize.DATE
//     },
//     id_de_caso: {
//         type: Sequelize.STRING
//     },
//     fecha_de_notificaci_n: {
//         type: Sequelize.DATE
//     },
//     departamento: {
//         type: Sequelize.INTEGER,
//         references: 'departament',
//         referencesKey: 'id'
//     },
//     ciudad: {
//         type: Sequelize.INTEGER,
//         references: 'city',
//         referencesKey: 'id'
//     },
//     edad: {
//         type: Sequelize.INTEGER
//     },
//     unidad_medida: {
//         type: Sequelize.INTEGER
//     },
//     sexo: {
//         type: Sequelize.STRING
//     },
//     fuente_tipo_contagio: {
//         type: Sequelize.STRING
//     },
//     ubicacion: {
//         type: Sequelize.STRING
//     },
//     recuperado: {
//         type: Sequelize.STRING
//     },
//     fecha_inicio_sintomas: {
//         type: Sequelize.DATE
//     },
//     fecha_diagnostico: {
//         type: Sequelize.DATE
//     },
//     fecha_recuperado: {
//         type: Sequelize.DATE
//     },
//     tipo_recuperacion: {
//         type: Sequelize.STRING
//     },
//     per_etn_: {
//         type: Sequelize.INTEGER
//     }
// })

module.exports = (sequelize, Sequelize) => {
    const infected = sequelize.define("infected", {
        fecha_reporte_web: {
            type: Sequelize.DATE
        },
        id_de_caso: {
            type: Sequelize.STRING
        },
        fecha_de_notificaci_n: {
            type: Sequelize.DATE
        },
        departamento: {
            type: Sequelize.INTEGER,
        },
        departamento_nom: {
            type: Sequelize.STRING,
        },
        ciudad: {
            type: Sequelize.INTEGER,
        },
        ciudad_nom: {
            type: Sequelize.STRING,
        },
        edad: {
            type: Sequelize.INTEGER
        },
        unidad_medida: {
            type: Sequelize.INTEGER
        },
        sexo: {
            type: Sequelize.STRING
        },
        fuente_tipo_contagio: {
            type: Sequelize.STRING
        },
        ubicacion: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },
        pais_viajo_1_cod: {
            type: Sequelize.INTEGER,
        },
        pais_viajo_1_nom: {
            type: Sequelize.STRING,
        },
        recuperado: {
            type: Sequelize.STRING
        },
        fecha_inicio_sintomas: {
            type: Sequelize.DATE
        },
        fecha_diagnostico: {
            type: Sequelize.DATE
        },
        fecha_recuperado: {
            type: Sequelize.DATE
        },
        tipo_recuperacion: {
            type: Sequelize.STRING
        },
        per_etn_: {
            type: Sequelize.STRING
        }
    });

    return infected;
};