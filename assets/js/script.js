



$('.owl-banner').owlCarousel({
 loop:true,
 margin:10,
 nav:true,
 autoplay:true,
 autoplayHoverPause:true,
 animateOut:'fadeOut',
 smartSpeed:300,
 autoplayTimeout:3000,
 responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});

$('.owl-blog').owlCarousel({
 loop:true,
 margin:10,
 nav:true,
 autoplay:true,
 autoplayHoverPause:true,
 smartSpeed:500,
 autoplayTimeout:3000,
 responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});


$('.owl-client').owlCarousel({
 loop:true,
 margin:10,
 nav:true,
 autoplay:true,
 autoplayHoverPause:true,
 smartSpeed:300,
 autoplayTimeout:3000,
 responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
});



$('.owl-read').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        600:{
            items:2
        }
    }
});


$('#line').click(function(){
    $('#nav').addClass('open');

})
$('#cros').click(function(){
    $('#nav').removeClass('open');
    
});



$(window).scroll(function(){
    if ($(this).scrollTop()){  
        $('.menu-wrapper').addClass("sticky");
    }
    else{
        $('.menu-wrapper').removeClass("sticky");
    }
});


var navres1 = document.getElementById("nav-menu-toogle");
var bar1=document.getElementById("bar");
bar1.addEventListener('click',()=>{
    navres1.classList.toggle('activemenu');
});

var navres2 = document.getElementById("nav-menu-toogle2");
var bar2=document.getElementById("bar2");
bar2.addEventListener('click',()=>{
    navres2.classList.toggle('activemenu');
});

var navres3 = document.getElementById("nav-menu-toogle3");
var bar3=document.getElementById("bar3");
bar3.addEventListener('click',()=>{
    navres3.classList.toggle('activemenu');
});

var navres4 = document.getElementById("nav-menu-toogle4");
var bar4=document.getElementById("bar4");
bar4.addEventListener('click',()=>{
    navres4.classList.toggle('activemenu');
});

  /*var navres5 = document.getElementById("nav-menu-toogle5");
  var bar5=document.getElementById("bar5");
  bar5.addEventListener('click',()=>{
    navres5.classList.toggle('activemenu');
});*/

$(document).ready(function(){
    $('#bar5').click(function(){
        $('#nav-menu-toggle5').animate({maxHeight:'100%'})
    })
})

    $(document).ready(function(){
        $(document).mousemove(function(event){
            var x = event.pageX;
            var y = event.pageY;
            $('.cursor').offset({top:y, left:x});
             $('.cursor2').offset({top:y, left:x});
        })
    })





var price = document.querySelector('.pricing-wrapper').querySelectorAll('.pricing-block');

price.forEach(element=>{
    element.addEventListener('mouseover' , function(){
        price.forEach(box=>box.classList.remove("price-active"))
        this.classList.add("price-active")
    })
});













