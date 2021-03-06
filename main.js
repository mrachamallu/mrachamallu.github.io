
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
                  $('.bio').html("Hey There! I am a third year Computer Science student at UCLA exploring software development and product management. Feel free to browse around and read a few articles :) ").slideDown(1500);
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
function changeDescription() {
    document.getElementById('modatitle').innerHTML = 'Hey There';
    document.getElementById('modasub').innerHTML = 'Hey There sub';
    document.getElementById('modadesc').innerHTML = 'Hey There description';
  }

  */
/*
document.getElementById('#moda').onclick = function() {
    document.getElementById('#modatitle').innerHTML = 'Hey There';
    document.getElementById('#modasub').innerHTML = 'Hey There sub';
    document.getElementById('#modadesc').innerHTML = 'Hey There description';
}
*/
/*
$(document).ready(function(){
    $(".rig-cell").click(function(){
    switch ($(this).attr('id')) {
        case 'moda': 
          $("#title").replaceWith("<h1>MODA</h1>");
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
*/

//explanation of each featured work
$(document).ready(function(){
    $(".rig-cell").click(function(){
    switch ($(this).attr('id')) {
        case 'moda': 
          $('#title h1').text('Moda');
          $( "#subheading h3").text('An App');
          $( "#description p" ).text("The iOS app, Moda, is a new way to shop and save all your liked items in one place. Whenever the price drops on an item you have saved, you receive a push notification letting you know that your item is on sale. ");
          break;
      case 'touchtest':
          $('#title h1').text('TouchTest');
          $( "#subheading h3").text('A Health App');
          $( "#description p" ).text("An app that can assess and preliminarily diagnose mobile disorders such as Parkinsons in a few short steps");
          break;
      case 'discoball':
          $('#title h1').text('LED Discoball');
          $( "#subheading h3").text('A Phidgets Project');
          $( "#description p" ).text("Transform your dance party experience. A smart discoball that lights up with different flashing patterns in response to different decibel levels. Coded in Java.");
          break;
      case 'bruinNavigator':
          $('#title h1').text('Bruin Navigator');
          $( "#subheading h3").text('A c++ Project');
          $( "#description p" ).text("A map-based c++ application that recommends optimal directions from point to point in the Los Angeles area. Data were obtained from OpenStreetMaps and was parsed with a self-designed C++ parser. The navigation is optimized using A*, a path-finding algorithm that recommends the shortest path based on a carefully chosen heuristic.");
          break;
      case 'mouseCar':
          $('#title h1').text('Mouse Car');
          $( "#subheading h3").text('IEEE Capstone Project');
          $( "#description p" ).text("A maze-traversing car that uses an Arduino Nano and PCBs with IR light sensors for sensing walls. Implements PID control for optimal driving.");
          break;
      case 'stanford':
          $('#title h1').text('Neuroscience Internship');
          $( "#subheading h3").text('Stanford, California');
          $( "#description p" ).text("Interned under Nobel Prize Leaureate Dr. Sudhof in the Stanford Department of Molecular and Cellular Physiology. Worked with Matlab to analyze neural networks of fetal mice brain. Performed 8 surgeries/week in the hypothalamus region of lab mice brains.");
          break;
      case 'prepEgg':
          $('#title h1').text('Prep Egg');
          $( "#subheading h3").text('Summer Internship');
          $( "#description p" ).text("iOS App Development");
          break;
      case 'comingSoon':
          $('#title h1').text('Coming Soon');
          $( "#subheading h3").text('Coming Soon');
          $( "#description p" ).text("I am always looking for new ideas and fun projects to work on!");
          break;
        default:
        console.log("no featured work");
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
