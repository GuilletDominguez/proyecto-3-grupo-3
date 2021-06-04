
 var description = document.getElementById('description');
 var date = document.getElementById('date');
 var img = document.getElementById('imgEvent');
 const valores = window.location.search;
 const urlParams = new URLSearchParams(valores);

var prodId = getParameterByName('id');
window.onload = () => {
    description.innerHTML = '';
    date.innerHTML = '';
    img.innerHTML = '';
        axios.get('http://163.172.135.235:3000/api/v1/events/'+ prodId , {
                responseType: 'json'
            })
            

            .then(function(res) {
                if (res.status == 200) {                                                                        
                    var descriptionEvent = res.data.description;
                    var dateEvent = res.data.date;
                    var imgEvent = res.data.photo;
                    description.innerHTML = '<p>'+ descriptionEvent +'</p>';
                    date.innerHTML = '<i class="far fa-clock" style="font-size: 50px;"></i><p>'+ dateEvent + '<br><a href="">Añadir a calendario</a> </p>';
                    img.innerHTML = '   <img class="cabezal"src="'+ imgEvent +'" style="width: 90%;" alt="" srcset="">';
                {
                        
                    }

                }

            })
            .catch(function(err) {
                console.log(err);
            })
         

        }








        /**
 * 


 * @param String name
 * @return String
 */
 function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
        