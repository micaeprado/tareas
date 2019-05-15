const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const estado = {
    alias: 'e',
    desc: 'Lista los elementos de la lista que tengan el estado cargado'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado,
    })
    .command('borrar', 'Borra un elemento de la lista de tareas', {
        descripcion
    })
    // .command('listar', 'Lista los elementos de la lista de tareas', {
    //     estado
    // })
    .help()
    .argv;

module.exports = {
    argv
};