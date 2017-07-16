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

$(document).ready(function() {
                 $('.bio').hide();
                 $('.bio').html("I am a second year Computer Science student at UCLA exploring web development, app development, and software development. This page is still under construction, but be sure to check back soon for exciting updates!").slideDown(1500);
         });
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