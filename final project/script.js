$(document).ready(function() { 
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|windows phone|Opera Mini/i.test(navigator.userAgent) ) {
    $('<link/>', {
       rel: 'stylesheet',
       type: 'text/css',
       href: 'slideshow.css'
    }).appendTo('head');
  }else {
            $(".one").mouseenter(function() { 
                $(".two").css("opacity", "0");
                $(".three").css("opacity", "0");
                $(".wrapper").css("background-image", "url('https://cdn.glitch.com/fbc1da7c-a981-4689-8ab4-54aa1ae41b56%2Fscreen1%20copy.png?v=1575774446859')");
                $(".change").css("color", "white");
            }).mouseleave(function(){
              $(".two").css("opacity", "1");
              $(".three").css("opacity", "1");
              $(".wrapper").css("background-image", "none"); 
              $(".change").css("color", "black");
            });  
  
          $(".two").mouseenter(function() { 
                $(".one").css("opacity", "0");
                $(".three").css("opacity", "0");
                $(".wrapper").css("background-image", "url('https://cdn.glitch.com/fbc1da7c-a981-4689-8ab4-54aa1ae41b56%2Fscreen2.png?v=1575774448383')");
                $(".change").css("color", "white");
            }).mouseleave(function(){
              $(".one").css("opacity", "1");
              $(".three").css("opacity", "1");
              $(".wrapper").css("background-image", "none");
              $(".change").css("color", "black");
            });  
  
          $(".three").mouseenter(function() { 
                $(".two").css("opacity", "0");
                $(".one").css("opacity", "0");
                $(".wrapper").css("background-image", "url('https://cdn.glitch.com/fbc1da7c-a981-4689-8ab4-54aa1ae41b56%2Fscreen3%20copy.png?v=1575774441913')");
                $(".change").css("color", "white");
            }).mouseleave(function(){
              $(".two").css("opacity", "1");
              $(".one").css("opacity", "1");
              $(".wrapper").css("background-image", "none");
              $(".change").css("color", "black");
            }); 
  }
});

function openAbt() {
  document.getElementById("ABT").style.width = "100%";
  document.getElementById("ABT").style.opacity = "1";
}

function closeAbt() {
  document.getElementById("ABT").style.width = "0";
  document.getElementById("ABT").style.opacity = "0";
}