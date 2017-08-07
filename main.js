
//pictures on aboutme enlarge upon hover
$(document).ready(function() {
   $('.photos').mouseenter(function() {
       $(this).animate({
           width: '+=30px', height: '+=30px'
       });
   });
   $('.photos').mouseleave(function() {
       $(this).animate({
           width: '-=30px', height: '-=30px'
       }, 'fast'); 
   });
   $('.photos').click(function() {
       $(this).toggle(1000);
   }); 
});



//bio slides in on about me
$(document).ready(function() {
                 $('.bio').hide();
                 $('.bio').html("I am a second year Computer Science student at UCLA exploring web development, app development, and software development. This page is still under construction, but be sure to check back soon for exciting updates!").slideDown(1500);
         });

//shows detail of a featured work
$(document).ready(function(){
    $(".rig-cell").click(function(){
        $('.popupbox').css('visibility','visible');
    });
    $(".popupbox").click(function(){
        $('.popupbox').css('visibility','hidden');
    });
});

/*
document.getElementById('#moda').onclick = function() {
    document.getElementById('#modatitle').innerHTML = 'Hey There';
    document.getElementById('#modasub').innerHTML = 'Hey There sub';
    document.getElementById('#modadesc').innerHTML = 'Hey There description';
}
*/

$(document).ready(function(){
    $(".rig-cell").click(function(){
    switch ($(this).attr('id')) {
        case 'moda': 
          $("#title" ).replaceWith("<h1>MODA</h1>");
          $( "#subheading" ).replaceWith("<h3>An App</h3>");
          $( "#description" ).replaceWith("<p>The iOS app, Moda, is a new way to shop and save all your liked items in one place. Whenever the price drops on an item you have saved, you receive a push notification letting you know that your item is on sale. </p>");
          break;
      case 'touchtest':
          $( "#title" ).replaceWith("<h1>TouchTest</h1>");
          $( "#subheading" ).replaceWith("<h3>An App</h3>");
          $( "#description" ).replaceWith("<p>The iOS app, Moda, is a new way to shop and save all your liked items in one place. Whenever the price drops on an item you have saved, you receive a push notification letting you know that your item is on sale. </p>");
          break;
    }
    });
});
/*
$(document).ready(function(){
    $(".div").click(function(){
        $('.popupbox').css('visibility','hidden');
    });
});
*/
/*
$(document).ready(function () {
  $('.rig-cell').on('click', function (event)
    {

        $('.popupbox').fadeIn();

    });
});
*/
/*
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
}

$('#photos').append(allImages);

*/