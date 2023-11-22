$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

  $("#menu").click(function(){
    $("body").toggleClass("dark_layout");
 });

});

function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme = document.getElementsByTagName('link')[1];

  // Change the value of href attribute 
  // to change the css sheet.
  if (theme.getAttribute('href') == 'css/style.css') {
      theme.setAttribute('href', 'css/dark.css');
  } else {
      theme.setAttribute('href', 'css/style.css');
  }
}