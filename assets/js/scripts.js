class Persona{
    constructor(nombre,direccion,edad,hobby){
        this.nombre = nombre;
        this.direccion=direccion;
        this.edad = edad;
        this.hobby= hobby;
    }
};

const empleado ={
    'nombre': 'Rodrigo',
    'direccion': 'Pasaje Alba 324',
    'edad': 32,
    'departamento':{
        'nombre': 'ventas',
        'turno': 'manana',
        'direccion':{
            'ciudad': 'punta arenas',
            'calle': 'calle industrial 1020'
        }
    }
};



const estudiante = new Persona('luisa', 'avenidad central', 29, 'pintar');

const { nombre } = estudiante;

let nombreCompleto = `${nombre} viatela`;

console.log(nombreCompleto);

const {direccion:dirDomicilio } = estudiante;
console.log(dirDomicilio);


const { departamento, departamento:{direccion}, departamento:{direccion:{calle}}} = empleado;
console.log(departamento);
console.log(direccion);
console.log(calle);


const infoSobrePersona = ({nombre, edad, hobby})=>{
    let mensaje = `${nombre} tiene ${edad} años y le gusta ${hobby}`;
    console.log(mensaje);
};

infoSobrePersona(estudiante);

const obtenerUsuario = ()=>{

    const elusuario = {
        'nombre':'Alex',
        'correo': 'alex@correo.uk',
        'edad':22
    };

    return elusuario;
};

const { nombre: nombUsuario, edad:edUsuario} = obtenerUsuario();
console.log(nombUsuario);
console.log(edUsuario);

const suma = (x,y,z)=>x+y+z;
let numeros = [7,8,9];
console.log(suma.apply(null,numeros));
console.log(suma(...numeros));

var a = [1,2,3,4,5];
var b = [6,7,8,9,0];
var c = [...b];
var d = a;
console.log(a);
console.log(d);
console.log(b);
console.log(c);
var e = [...a , ...b];
console.log(e);


var f = [1,1,1,1,1,1,1,1,1];


let caracteres = new Set(['x','y','x','y','z','z','z']);
console.log(caracteres);

console.log(caracteres.size);
console.log(caracteres.delete('y'));
console.log(caracteres);

console.log(caracteres.add(1).add(3).add(1).add(5));
console.log(caracteres.entries());
console.log(caracteres.has(3));


let computador = {
    tipo: 'laptop',
    sistema: 'windows'
};

let servidor = {
    tipo: 'servidor',
    sistema: 'linux'
};

let tablet = {
    tipo: 'tablet',
    sistema: 'android'
}

let telefono = {
    numero: '3242342343242'
}

let equipment = new WeakSet([computador,servidor]);

console.log(equipment.has(servidor));
console.log(equipment.add(tablet).add(computador).add(tablet).add(telefono));
console.log(equipment);
console.log(equipment.size);

let otroEquipment = new Set([computador, servidor, computador, computador]);
console.log(otroEquipment);
console.log(otroEquipment.add(tablet));
console.log(otroEquipment);
console.log(otroEquipment.size);

console.log('______________________EXTRAYENDO DEL WEAKSET____________________');

console.log('ingresando a una posicion definida del weakset');
console.log(equipment[1]);

/* NO ES POSIBLE EXTRAER INFORMACIÓN DEL WEAKSET MEDIANTE forEach(),  AL IGUAL QUE NO FUNCIONA size
let resultadoWeakSet = '';
equipment.forEach(function(valor){
    console.log(valor);
    resultadoWeakSet += valor + ', ';
});

NO ES POSIBILE UTILIZAR entries() CON WEAKSET

console.log('________salida con iterador______________');
let iteradorEquipment = equipment.entries();
console.log(iteradorEquipment);
for (let elemento of iteradorEquipment){
    console.log(elemento);
}


NO ES POSIBILE UTILIZAR values() CON WEAKSET
console.log('weak values');
console.log(equipment.values());

*/





console.log('______________________EXTRAYENDO DEL SET____________________');
console.log('set values');
console.log(otroEquipment.values());
console.log('__________salida con for each')
otroEquipment.forEach(function(valor){
    console.log(valor);
    // resultadoWeakSet += valor + ', ';
});

console.log('________salida con iterador______________');
/* entries retorna un par valor,valor
let iteradorOtroEquipment = otroEquipment.entries();
*/

let iteradorOtroEquipment = otroEquipment.values();
console.log(iteradorOtroEquipment);
for (let elemento of iteradorOtroEquipment){
    console.log(elemento);
}


/* NO ES POSIBLE AGREGAR PRIMITIVOS AL WEAKSET
let otroWeakset = new WeakSet(['x','y','x','y','z']);
console.log(otroWeakset);
*/

let juan = {
    nombre: 'Juan Diaz',
    correo: 'juan@gmail.com',
    telefono: 543535353
};

let isabel = {
    nombre: 'Isabel Meza',
    correo: 'isabel@hotmail.com',
    telefono: 53234541233
};

let carlos = {
    nombre: 'Carlos Aguilar',
    correo: 'carlos@yahoo.com',
    telefono: 656543334
};

let Administrador = {
    nombre: 'Administrador',
    salario: 3200000,
    personal: true
};

let Tecnico = {
    nombre: 'Tecnico',
    salario: 1200000,
    personal: false
};


let Jefe = {
    nombre: 'Jefe',
    salario: 5300000,
    personal: true
};

let rolesUsuario = new Map();
rolesUsuario.set(juan,Administrador).set(isabel,Jefe).set(carlos,Tecnico);

console.log(rolesUsuario.get(carlos));
let datosCarlos = rolesUsuario.get(carlos);
let salarioCarlos = datosCarlos.salario;
console.log('El salario de Carlos es: '+salarioCarlos);

console.log(rolesUsuario.has(isabel));

console.log(rolesUsuario.size);

console.log('__________utilizamos metodo keys()___________');
for(let llave of rolesUsuario.keys()){
    // console.log(llave);
    console.log(llave.nombre);
}

console.log('__________utilizamos metodo values()___________');
for(let valor of rolesUsuario.values()){
    // console.log(valor);
    console.log(valor.salario);
}

console.log('__________utilizamos metodo entries()___________');
for(let pareja of rolesUsuario.entries()){
    // console.log(valor);
    console.log(`La llave.nombre es: ${pareja[0].nombre}, y el valor.salario es ${pareja[1].salario}`);
}