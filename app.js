gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

$(document).ready(function(){

    $(window).scroll(function(){
        var windowHeight = jQuery(window).height();
        var changeColor = windowHeight-100;
        // $("nav").toggleClass('fixed-top scrolled py-2', $(window).scrollTop() > changeColor);
    });


    $(".navbar-toggler").click(function(){
      if($(this).hasClass('collapsed')){
        $("nav").removeClass('mobile-nav-expand');
      }else{
        $("nav").addClass('mobile-nav-expand');
      }
    });   

    //navbar
    //****************/
    let navTL = gsap.timeline({
      scrollTrigger:{
        trigger: "nav", 
        start:"top bottom"      
      }
    });

    navTL
    .from(".nav-item", {
      y: -100,
      opacity:0,
      stagger:0.1   
    })
    .from("a.logo", {
      y: -100,
      opacity:0  
    }, "-=0.2");


    //slider
    //****************/
    let sliderTL = gsap.timeline({
      scrollTrigger:{
        trigger: ".slider", 
        start:"top bottom"      
      }
    });

    sliderTL
    .from(".slider h1.name", {
      y: 100 
    })
    .from(".slider .intro p", {
      y: 50  
    }, "-=0.2");

    gsap.from(".quote-1 h1", {
      scrollTrigger: {trigger: ".quote-1", start:"top bottom", end:"+=200", scrub:1, toggleActions: "play complete complete complete"},
      y: 120
    });

    //highlight
    //****************/
    // var temp = document.querySelector(".horizontal-container").offsetWidth;
    // let highlightEnd = temp*1.3;
    let highlightTL = gsap.timeline({
      scrollTrigger:{
        trigger: ".highlight", 
        start:"top 80%",
      }
    });
    
    highlightTL
    .from(".highlight .text-container h1",{
      y:50   
    })
    .from(".highlight .seperate-line", 5,{
      width:0,
      ease:Power4.easeOut   
    });

    highlightTL.duration(3);




    

//     let allSections = gsap.utils.toArray('.horizontal-container .item');
//     let container = jQuery('.horizontal-container');

// var scrollWidth = 1.55;
// var windowWidth = $(window).width();

// function resizeContainer (windowWidth) { 

//   if( windowWidth < 1400 ) {
//     scrollWidth = 1.33;
//   }
//   if( windowWidth < 1080 ) {
//     scrollWidth = 1.1;
//   }
//   if( windowWidth < 800 ) {
//     scrollWidth = 2.15;
//   }
//   if( windowWidth < 620 ) {
//     scrollWidth = 1.55;
//   }
//   if( windowWidth < 580 ){
//     scrollWidth = 1.43;
//   }
//   if( windowWidth < 500 ){
//     scrollWidth = 1.35;
//   }
//   if( windowWidth < 420 ){
//     scrollWidth = 1.08;
//   }
//   if( windowWidth < 380 ){
//     scrollWidth = 1;
//   }
//   if( windowWidth < 361 ){
//     scrollWidth = 0.95;
//   }
//   if( windowWidth < 321 ){
//     scrollWidth = 0.9;
//   }

// }

// resizeContainer(windowWidth);

// $( window ).resize(function() {
//   resizeContainer(windowWidth);
// });


//     gsap.to(allSections, {
//     xPercent: -100 * (allSections.length - scrollWidth),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".horizontal-container",
//       pin: ".pin",
//       start: "45% center",
//       scrub: 1,
//       snap: 1 / (allSections.length - 1),
//       invalidateOnRefresh: true,
//       anticipatePin: 1,
//       // base vertical scrolling on how wide the container is so it feels more natural.
//       end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth
//       //innerWidth * 2.5 
//       //"+=" + document.querySelector(".horizontal-container").offsetWidth
//       //`+=${container.offsetWidth}`
//     }
//   });











  gsap.from(".layer-1 img", {
    scrollTrigger: {trigger: ".about-me", start:"top center", end:"bottom top", scrub:1, toggleActions: "play complete complete complete"},
    y: 120
  });

  gsap.from(".layer-2 img", {
    scrollTrigger: {trigger: ".about-me", start:"top 70%", end:"bottom top", scrub:1, toggleActions: "play complete complete complete"},
    y: 250
  });


//about-me
//******************

gsap.from(".introducing h1.display-1", {
  scrollTrigger: {trigger: ".introducing h1.display-1", start:"top bottom", end:"+=200", scrub:1, toggleActions: "play complete complete complete"},
  y: 50
});

    let aboutTL = gsap.timeline({
      scrollTrigger:{
        trigger: ".about-me", 
        start:"top 90%"      
      }
    });

    aboutTL
    .from(".about-me .text-container h5", {
      y: 120    
    }, "-=0.4")
    .from(".about-me .text-container p", {
      y: 120,
      stagger:0.2   
    }, "-=0.4");


let skillsTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".skills", 
    start:"top 90%"      
  }
});

skillsTL
.from(".skills .description li", 0.2 ,{
  x: 50,
  opacity:0,
  stagger:0.08    
}, "-=0.4");




//experience section 
//*****************
gsap.from(".experience .text-container h1.display-1", {
  scrollTrigger: {trigger: ".experience .text-container h1.display-1", start:"top bottom", end:"+=100", scrub:1, toggleActions: "play complete complete complete"},
  y: 100
});

let expTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".experience", 
    start:"top center"      
  }
});

expTL
  .from(".experience .vertical-line", {height:0}, 0)
  .from(".exp", {opacity: 0, stagger:0.3},0)
  .from(".experience .exp-desc", {x: 100, opacity: 0},"-=0.8");
  

  $( ".exp" ).click(function() {

    if($(this).hasClass("active")){

    }else{
        $(".exp").removeClass("active");
        $(".exp-desc-inner").removeClass("active");
        $( this ).addClass("active");

        if ($(".exp-1").hasClass("active")) {
            $( ".exp-desc-inner-1" ).addClass("active");
        } 
        if ($(".exp-2").hasClass("active")) {
            $( ".exp-desc-inner-2" ).addClass("active");
        } 
        if ($(".exp-3").hasClass("active")) {
            $( ".exp-desc-inner-3" ).addClass("active");
        } 
        if ($(".exp-4").hasClass("active")) {
            $( ".exp-desc-inner-4" ).addClass("active");
        } 
        
    }

  });


//more section 
//*****************
gsap.from(".more .text-container h1", {
  scrollTrigger: {trigger: ".more .text-container h1", start:"top bottom", end:"+=200", scrub:1, toggleActions: "play complete complete complete"},
  y: 100
});

let moreTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".more", 
    start:"top bottom"      
  }
});

moreTL
  .from(".more-single", {y:30, opacity: 0, stagger:0.2});


$('.more-single').hover(
  function() {
    $( this ).addClass( "active" );
  }, function() {
    $( this ).removeClass( "active" );
  }
);


//contact
//***************/
gsap.from(".contact .text-container h1", {
  scrollTrigger: {trigger: ".contact .text-container h1", start:"top bottom", end:"+=200", scrub:1, toggleActions: "play complete complete complete"},
  y: 100
});

gsap.from(".contact p.description", {
  scrollTrigger: {trigger: ".contact p.description", start:"top bottom", end:"+=200", scrub:1, toggleActions: "play complete complete complete"},
  y: 80
});

gsap.from(".contact .social-media-icon a", 0.1,{
  scrollTrigger: {trigger: ".contact .social-media-icon", start:"top bottom", end:"+=100", scrub:0.1, toggleActions: "play complete complete complete"},
  y: 20,
  opacity:0,
  stagger:0.1
});

  //cat-ani
  let catTL = gsap.timeline({
    scrollTrigger:{
      trigger: ".cat-ani", 
      start:"top bottom",      
    },
    repeat: -1, yoyo: true
  });
  
  catTL
    .from("#tail", 1, {rotate:10, transformOrigin: "bottom center" ,ease: Power1.easeInOut})
    .from("#cat-nose", 1, {y:-3, x:-1})
    .from("#body", 1, {scale:1.05, transformOrigin:"start bottom"}, "-=1")
    .from(".cat-eyes", 1, {y:-2}, "-=1")
    .from("#cat-head", 1, {rotate:1}, "-=1")
    .from(".bulu-right",1 , {x:3}, "-=1")
    .from(".bulu-left",1 ,{x:-3}, "-=1")

    gsap.from(".cat-sleeping-2", {
      scrollTrigger: {trigger: ".cat-ani", start:"top bottom", end:"+=600", scrub:2, toggleActions: "play complete complete complete"},
      scale: 0.7,
      transformOrigin: "45 center"
    });







  //svg-ani  
  gsap.from("#background", {
      scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
      scale: 1.16,
      transformOrigin:"bottom center"
    });  
  gsap.from("#hair", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -645,
    rotation: 8,
    transformOrigin:"center center"
    });
  gsap.from("#basketball", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -170,
    rotation: -80,
    transformOrigin:"center center"
  });
  gsap.from("#camera", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -80,
    rotation: 20,
    transformOrigin:"center center"
  });
  gsap.from("#music", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -100,
    x: 70,
    rotation: 30,
    transformOrigin:"center center"
  });
  gsap.from("#_1001", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -150,
    x: 75,
    rotation: -10,
    transformOrigin:"center center"
  });
  gsap.from("#eth", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -100,
    x: -65,
    rotation: -30,
    transformOrigin:"center center"
  });
  gsap.from("#ae", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -160,
    x: -70,
    rotation: -40,
    transformOrigin:"center center"
  });
  gsap.from("#left-eye", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -9
  });
  gsap.from("#right-eye", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -9
  });
  gsap.from("#left-eye-brow", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -453
  });
  gsap.from("#right-eye-brow", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -453
  });
  gsap.from("#nose", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -446
  });
  gsap.from("#left-ear", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -430
  });
  gsap.from("#left-ear-inner", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -430
  });
  gsap.from("#right-ear", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -430
  });
  gsap.from("#right-ear-inner", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -430
  });
  gsap.from("#mouth", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    scale: 1.4,
    y: -5,
    transformOrigin:"center center"
  });
  gsap.from("#glass", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -6
  });
  gsap.from("#neck", {
    scrollTrigger: {trigger: ".ani-container", start:"top 25%", end:"+=300", scrub:1, toggleActions: "play complete complete complete"},
    y: -8
  });



  // let isDown = false;
  // let startX;
  // let scrollLeft;
  // const slider = document.querySelector('.horizontal-container');
  
  // const end = () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // }
  
  // const start = (e) => {
  //   isDown = true;
  //   slider.classList.add('active');
  //   startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;	
  // }
  
  // const move = (e) => {
  //   if(!isDown) return;
  
  //   e.preventDefault();
  //   const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  //   const dist = (x - startX);
  //   slider.scrollLeft = scrollLeft - dist;

  // }
  
  // (() => {
  //   slider.addEventListener('mousedown', start);
  //   slider.addEventListener('touchstart', start);
  
  //   slider.addEventListener('mousemove', move);
  //   slider.addEventListener('touchmove', move);
  
  //   slider.addEventListener('mouseleave', end);
  //   slider.addEventListener('mouseup', end);
  //   slider.addEventListener('touchend', end);
  // })();
  var temp = document.querySelector(".horizontal-container");
  var lineWidth = $(".highlight .seperate-line").width();


  (function() { 
  
    Draggable.create(".horizontal-container", {
      type:"x",
      bounds:".slider-container",
      // throwProps:true, 
      onDragStart:function() {
        $(".horizontal-container").addClass('active');
        
      },
      onDragEnd:function() {
        $(".horizontal-container").removeClass('active');
      },
      onDrag:function() {
        
        // function getMatrix(element) {
        //   const values = element.style.transform.split(/\w+\(|\);?/);
        //   const transform = values[1].split(/,\s?/g).map(parseInt);
        //   return Math.abs(transform[0]);
        // }
        // var fullwidth = getMatrix(temp); //1167
        // var fullwidthPer = 0.085;
        // $(".highlight .seperate-line").width(fullwidth*fullwidthPer + '%');

        // console.log(fullwidth*fullwidthPer);
       
      },
      // cursor: `url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"), ew-resize`,
       snap:{
          x: function(value) {
              //snap to the closest increment of 50.
              return Math.round(value / 305) * 305; 
          }
       }
  });
    
  }());


  
  



});





