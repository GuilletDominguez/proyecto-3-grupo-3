window.onload = () => 
{
    axios.get('http://163.172.135.235:3000/api/v1/users',{
        reponseType : 'json'
    })------> requerimiento
    axios.post('http://163.172.135.235:3000/api/v1/users')------> envio de informacion
      var form = document.getElementById('form');
      function enviar(objeto) {
          console.log('conectar con la base de datos');
          console.log(objeto);
          return dato;
      }

      form.onsubmit = () => {
          var nombre = document.getElementById('nombre');
          var telefono = document.getElementById('telefono');
          var apellidos = document.getElementById('apellidos');
          var email = document.getElementById('email');
          var mensaje =document.getElementById('mensaje');

          var objeto = {"nombre": nombre,evalue, "telefono": apellidos,evalue, "apellidos": telefono,evalue, "email": email,evalue, "mensaje": mensaje,evalue };
          
          enviar(objeto);
      }
  }