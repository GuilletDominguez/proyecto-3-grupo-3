


var form = document.getElementById('form');
console.log(form);
var mensaje = document.getElementById('mensaje');
var nombre = document.getElementById('nombres');
var apellido= document.getElementById('apellidos');
var telefono= document.getElementById('telefono');
var  email= document.getElementById('email');



form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(1);

    var todo = { first_name: nombre.value, last_name: apellido.value, };

console.log(todo == true);
    if(todo){  
        console.log('todotrue');     
    mensaje.innerHTML = 'Confirmation Successfully'
    } 
    else{
    mensaje.innerHTML = 'Completa los Campos'
    }
})