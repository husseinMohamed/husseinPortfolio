//change navbar color and add icon after scroll
$(document).ready(function(){
    $(window).bind('scroll', function(){
        var navHeight = $(window).height() - 125;

        if($(window).scrollTop() > navHeight){
            $('nav').addClass('fixed');
            $('a').addClass('hideNavItems');
        }else{
            $('nav').removeClass('fixed');
            $('a').removeClass('hideNavItems');
        }
    });


});

//Turn off interval for carousel 

$('.carousel').carousel({
    interval: false
});

//Animations

window.sr= ScrollReveal();
sr.reveal('.title', {
  duration: 1000, 
  origin: 'top'
});

window.sr= ScrollReveal();
sr.reveal('.titleDesc', {
  duration: 1500, 
  origin: 'top'
});

window.sr= ScrollReveal();
sr.reveal('.summary', {
  duration: 2000, 
  origin: 'top'
});

window.sr= ScrollReveal();
sr.reveal('.projButton', {
  duration: 2700, 
  origin: 'top',
  distance: '70px'
})

window.sr= ScrollReveal();
sr.reveal('.githubIcon', {
  duration: 3800, 
  origin: 'top',
})

window.sr= ScrollReveal();
sr.reveal('.newContText', {
  duration: 700, 
  origin: 'top',
 
  viewFactor: 0.3
})

window.sr= ScrollReveal();
sr.reveal('.aqua', {
  duration: 1000, 
  origin: 'right',
  distance: '200px',
  viewFactor: 0.3
})

window.sr= ScrollReveal();
sr.reveal('.wonder', {
  duration: 1000, 
  origin: 'left',
  distance: '200px',
  viewFactor: 0.3
})

