
var container = document.getElementById('container');

var mensaje = document.getElementById('mensaje');
var titulo = document.getElementById('inputEvento');
var inicio= document.getElementById('inputInicio');
var hora= document.getElementById('inputHora');
var nombre= document.getElementById('inputNombre');
var telefono= document.getElementById('inputTelefono');



form.addEventListener('submit', function(e){
    e.preventDefault();

    var todo = { title: titulo.value, inicio: inicio.value, hora: hora.value, name:nombre.value, telefono: telefono.value };

console.log(todo == true);
    if(todo){  
             
    mensaje.innerHTML = 'Evento Creado Successfully'
    } 
    else{
    mensaje.innerHTML = 'Completa los Campos'
    }
})