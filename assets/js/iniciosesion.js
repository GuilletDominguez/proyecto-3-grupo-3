window.onload = () => {
    var mensaje = document.getElementById('mensaje');
    var form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        axios.post('http://163.172.135.235:3000/api/v1/users/login', {

                email: email,
                password: password,

            })
            .then(function(res) {
                console.log(res.data);
                if (res.status == 200) {
                    mensaje.innerHTML = '<p>¡Bienvenido!';
                    localStorage.setItem('token', res.data.token);
                    setTimeout(
                        function(){
                            window.location.href = "list-events.html";
                        }, 3000);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
         
    });

}

