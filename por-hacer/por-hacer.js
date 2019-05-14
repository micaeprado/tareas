const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer); //forma de pasar obj a json

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se puedo grabar', err)
        else
            console.log(`db/data.json`.bgCyan);
    });
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');

    }catch(error) {
        listadoPorHacer = [];
    }
}
 
const crear = (descripcion) => {
    
    cargarDB();

    let porHacer = {
        descripcion,
        completado : false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return listadoPorHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar
};