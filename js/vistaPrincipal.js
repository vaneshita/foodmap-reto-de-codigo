$(document).ready(function(){
  var distrito = $('#input-distrito');
  var ubicacion = $('#ubicacion');
  var primero = $('#primero');
  var segundo = $('#segundo');
  var img1 = $('#img1');
  var img2 = $('#img2');
  var img3 = $('#img3');
  var img4 = $('#img4');
  var datos= Object.keys(data);
  console.log(datos);
  distrito.keyup(function(e) {
    for (var i = 0; i < datos.length; i++) {
      if (distrito.val() === datos[i]) {
        if(e.keyCode == 13) {
          $('#ubicacion').text('restaurantes en'+' '+datos[i]);
          var restaurant = Object.keys(data[datos[i]]);
          var comidas1 = Object.keys(data[datos[i]][restaurant[0]]);
          var comidas2 = Object.keys(data[datos[i]][restaurant[1]]);
          console.log(comidas1[0]);
          $('#primero').text(restaurant[0]);
          primero.on('click', function(event) {
            img1.attr('src', '../assets/img/' + comidas1[0] + '.jpg');
            img2.attr('src', '../assets/img/' + comidas1[1] + '.jpg');
          });
          $('#segundo').text(restaurant[1]);
          segundo.on('click', function(event) {
            img3.attr('src', '../assets/img/' + comidas2[0] + '.jpg');
            img4.attr('src', '../assets/img/' + comidas2[1] + '.jpg');
        });
          }
        }
      }
    });
});
