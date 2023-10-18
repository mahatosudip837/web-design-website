$(document).ready(function(){
    // hero slider 
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000
    });
    $('.counter').counterUp({
        delay: 10,
        time: 3000
        });
    // portfolio slider 
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        smartSpeed:1000,
        margin:24,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
            }
        }
    });

    // reviews slider 
    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000
    });
});

let navbarCollapse = document.querySelector('.navbar-collapse.collapse');
let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(function(e){
        e.addEventListener('click',function(){
            navbarCollapse.classList.remove('show')
        })
})
