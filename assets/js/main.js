meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
diassemana=["lun","mar","mié","jue","vie","sáb","dom"];


window.onload = () => {
    var loading = document.getElementById('loading');    var mensaje = document.getElementById('mensaje');
    // var form = document.getElementById('form');
    // form.addEventListener('submit', function(e) {
    //     loading.style.display = 'block';

    //     e.preventDefault();
    //     var email = document.getElementById('email').value;
    //     var password = document.getElementById('password').value;

    //     axios.post('http://192.168.1.1:3000/api/v1/users/login', {

    //             email: email,
    //             password: password,

    //         })
    //         .then(function(res) {
    //             console.log(res.data);
    //             if (res.status == 200) {
    //                 mensaje.innerHTML = 'Has logeado correctamente, el token ha sido guardado en memoria.';
    //                 localStorage.setItem('token', res.data.token);
    //             }
    //         })
    //         .catch(function(err) {
    //             console.log(err);
    //         })
    //         .then(function() {
    //             loading.style.display = 'none';
    //         });
    // });

    var mensaje1 = document.getElementById('mensaje1');
    var listDiv = document.getElementById('listDiv');
    var indice;
    // boton.addEventListener('click', function() {
        loading.style.display = 'block';
        mensaje1.innerHTML = '';
        axios.get('http://163.172.135.235:3000/api/v1/events?page=1', {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                    listDiv.style.display = 'block';                                                     
                    mensaje1.innerHTML = '<h1>Lista de eventos</h1>';                                           
                    var todoList = document.getElementById('todo-list');                                                    
                    var arrayData = res.data.data;
                   
                    indice = res.data.page
                    todoList.innerHTML = '';
                    for (let i = 0; i < arrayData.length; i++) {
                        var myUrl = 'index.html?id=' + arrayData[i]._id ;
                        todoList.innerHTML += '<li class="marcador-evento"><a id="myUniqueLinkId" class="listas-eventos" href="'+ myUrl +'">' + arrayData[i].name +'</a></li>';
                    }
    
                    comprobarPaginación(res.data.page, res.data.total_pages);

                }

            })
            .catch(function(err) {
                console.log(err);
            })
            .then(function() {
                loading.style.display = 'none';
            });
    // });
    
    var boton = document.getElementById('atras');
    boton.addEventListener('click', function() {
        indice--;
        loading.style.display = 'block';
        mensaje1.innerHTML = '';
        axios.get('http://163.172.135.235:3000/api/v1/events?page='+ indice + '' , {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                    listDiv.style.display = 'block';                                                     
                    mensaje1.innerHTML = '<h1>Lista de eventos</h1>';                                           
                    var todoList = document.getElementById('todo-list');                                                    
                    var arrayData = res.data.data;
                    
                    todoList.innerHTML = '';
                    for (let i = 0; i < arrayData.length; i++) {
                        var myUrl = 'index.html?id=' + arrayData[i]._id ;
                        todoList.innerHTML += '<li class="marcador-evento"><a id="myUniqueLinkId" class="listas-eventos" href="'+ myUrl +'">' + arrayData[i].name +'</a></li>';
                    }
                }
                comprobarPaginación(res.data.page, res.data.total_pages);
            })
            .catch(function(err) {
                console.log(err);
            })
            .then(function() {
                loading.style.display = 'none';
            });
        
    });




    var boton = document.getElementById('delante');
    boton.addEventListener('click', function() {
        indice++;
        loading.style.display = 'block';
        mensaje1.innerHTML = '';
        axios.get('http://163.172.135.235:3000/api/v1/events?page='+ indice + '' , {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                    listDiv.style.display = 'block';                                                     
                    mensaje1.innerHTML = '<h1>Lista de eventos</h1>';                                           
                    var todoList = document.getElementById('todo-list');                                                    
                    var arrayData = res.data.data;
                
                    todoList.innerHTML = '';
                    for (let i = 0; i < arrayData.length; i++) {
                        var myUrl = 'index.html?id=' + arrayData[i]._id ;
                        todoList.innerHTML += '<li class="marcador-evento"><a id="myUniqueLinkId" class="listas-eventos" href="'+ myUrl +'">' + arrayData[i].name +'</a></li>';
                    }
                }
                comprobarPaginación(res.data.page, res.data.total_pages);
            })
            .catch(function(err) {
                console.log(err);
            })
            .then(function() {
                loading.style.display = 'none';
            });

    });
    
    // var boton = document.getElementById('formPost');
    // boton.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     if (localStorage.getItem('token') != null) {
    //         var token = localStorage.getItem('token');
    //     } else {
    //         var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGFhYzc4NzU2ZmNmYzFiZGQ5YWE2OWEiLCJlbWFpbCI6InBhY29AcGFjby5lcyIsImlhdCI6MTYyMTg4MzgxNiwiZXhwIjoxNjIxOTU1ODE2fQ.b-llibgs0br0YhZHq7nxoSwnisrfDmeFlCKJNoJe060';
    //     }
    //     loading.style.display = 'block';
    //     axios.post('http://192.168.1.1:3000/api/v1/events', {

    //             date: '2021-12-30',
    //             name: document.getElementById('name').value,
    //             description: document.getElementById('description').value,
    //             type: true,
    //             photo: './assets/img/foto.jpg'
            
    //         }, {
    //             headers: {
    //                 token: token
    //             }
    //         })
    //         .then(function(res) {
    //             console.log(res);
    //             console.log(res.data);
    //             if (res.status == 201) {
    //                 mensaje.innerHTML = 'El nuevo evento ha sido almacenado con id: ' + res.data._id;
    //             }
    //         })
    //         .catch(function(err) {
    //             console.log(err);
    //         })
    //         .then(function() {
    //             loading.style.display = 'none';
    //         });
    // });
    //Arrays de datos:

//Tras cargarse la página ...

//fecha actual
hoy=new Date(); //objeto fecha actual
diasemhoy=hoy.getDay(); //dia semana actual
diahoy=hoy.getDate(); //dia mes actual
meshoy=hoy.getMonth(); //mes actual
annohoy=hoy.getFullYear(); //año actual
// Elementos del DOM: en cabecera de calendario 
tit=document.getElementById("titulos"); //cabecera del calendario
ant=document.getElementById("anterior"); //mes anterior
pos=document.getElementById("posterior"); //mes posterior
// Elementos del DOM en primera fila
f0=document.getElementById("fila0");
//Pie de calendario
pie=document.getElementById("fechaactual");
pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+annohoy;
//formulario: datos iniciales:
document.buscar.buscaanno.value=annohoy;
// Definir elementos iniciales:
mescal = meshoy; //mes principal
annocal = annohoy //año principal
//iniciar calendario:
cabecera() 
primeralinea()
escribirdias()
//FUNCIONES de creación del calendario:
//cabecera del calendario

}

function comprobarPaginación(page, totalPage) {
    // si page == 1 -> atras disable - adelante enable
    var botonAtras = document.getElementById('atras');
    var botonDelante = document.getElementById('delante');

    if(page == 1) {
        botonAtras.disabled = true;
        botonDelante.disabled = false;
    } else if (page == totalPage) {
        botonDelante.disabled = true;
        botonAtras.disabled = false;
    }
    else{
        botonDelante.disabled = false;
        botonAtras.disabled = false;
    }
    // si page > 1 y page < total page -> los 2 botones enable
    // si page = total page -> adelante disable - atras enable 
}

function cabecera() {
    tit.innerHTML=meses[mescal]+" de "+annocal;
    mesant=mescal-1; //mes anterior
    mespos=mescal+1; //mes posterior
    if (mesant<0) {mesant=11;}
    if (mespos>11) {mespos=0;}

    } 
//primera línea de tabla: días de la semana.
function primeralinea() {
    for (i=0;i<7;i++) {
        celda0=f0.getElementsByTagName("th")[i];
        celda0.innerHTML=diassemana[i]
        }
    }
//rellenar celdas con los días
function escribirdias() {
    //Buscar dia de la semana del dia 1 del mes:
    primeromes=new Date(annocal,mescal,"1") //buscar primer día del mes
    prsem=primeromes.getDay() //buscar día de la semana del día 1
    prsem--; //adaptar al calendario español (empezar por lunes)
    if (prsem==-1) {prsem=6;}
    //buscar fecha para primera celda:
    diaprmes=primeromes.getDate() 
    prcelda=diaprmes-prsem; //restar días que sobran de la semana
    empezar=primeromes.setDate(prcelda) //empezar= tiempo UNIX 1ª celda
    diames=new Date() //convertir en fecha
    diames.setTime(empezar); //diames=fecha primera celda.
    //Recorrer las celdas para escribir el día:
    for (i=1;i<7;i++) { //localizar fila
        fila=document.getElementById("fila"+i);
        for (j=0;j<7;j++) {
            midia=diames.getDate() 
            mimes=diames.getMonth()
            mianno=diames.getFullYear()
            celda=fila.getElementsByTagName("td")[j];
            celda.innerHTML=midia;
            //Recuperar estado inicial al cambiar de mes:
            celda.style.backgroundColor="#9bf5ff";
            celda.style.color="#492736";
            //domingos en rojo
            if (j==6) { 
               celda.style.color="#f11445";
               }
            //dias restantes del mes en gris
            if (mimes!=mescal) { 
               celda.style.color="#a0babc";
               }
            //destacar la fecha actual
            if (mimes==meshoy && midia==diahoy && mianno==annohoy ) { 
               celda.style.backgroundColor="#f0b19e";
               celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
               }
            //pasar al siguiente día
            midia=midia+1;
            diames.setDate(midia);
            }
        }
    }
//Ver mes anterior
function mesantes() {
    nuevomes=new Date() //nuevo objeto de fecha
    primeromes--; //Restamos un día al 1 del mes visualizado
    nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior 
    mescal=nuevomes.getMonth() //cambiamos las variables que usarán las funciones
    annocal=nuevomes.getFullYear()
    cabecera() //llamada a funcion de cambio de cabecera
    escribirdias() //llamada a funcion de cambio de tabla.
    }
//ver mes posterior
function mesdespues() {
    nuevomes=new Date() //nuevo obejto fecha
    tiempounix=primeromes.getTime() //tiempo de primero mes visible
    tiempounix=tiempounix+(45*24*60*60*1000) //le añadimos 45 días 
    nuevomes.setTime(tiempounix) //fecha con mes posterior.
    mescal=nuevomes.getMonth() //cambiamos variables 
    annocal=nuevomes.getFullYear()
    cabecera() //escribir la cabecera 
    escribirdias() //escribir la tabla
    }
//volver al mes actual
function actualizar() {
    mescal=hoy.getMonth(); //cambiar a mes actual
    annocal=hoy.getFullYear(); //cambiar a año actual 
    cabecera() //escribir la cabecera
    escribirdias() //escribir la tabla
    }
//ir al mes buscado
function mifecha() {
    //Recoger dato del año en el formulario
    mianno=document.buscar.buscaanno.value; 
    //recoger dato del mes en el formulario
    listameses=document.buscar.buscames;
    opciones=listameses.options;
    num=listameses.selectedIndex
    mimes=opciones[num].value;
    //Comprobar si el año está bien escrito
    if (isNaN(mianno) || mianno<1) { 
       //año mal escrito: mensaje de error
       alert("El año no es válido:\n debe ser un número mayor que 0")
       }
    else { //año bien escrito: ver mes en calendario:
         mife=new Date(); //nueva fecha
         mife.setMonth(mimes); //añadir mes y año a nueva fecha
         mife.setFullYear(mianno);
         mescal=mife.getMonth(); //cambiar a mes y año indicados
         annocal=mife.getFullYear();
         cabecera() //escribir cabecera
         escribirdias() //escribir tabla
         }
    }

