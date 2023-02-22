// $(window).scroll(function() {
//     if ($(this).scrollTop()>10)
//      {
//         $('.top_part').hide(400);
//         document.getElementById("navbar_part").style.marginTop = "0px";
//      }
//     else
//      {
//       $('.top_part').show(400);
//         document.getElementById("navbar_part").style.marginTop = "40px";

//      }
//  });


$('.owl-carousel').owlCarousel({
          animateOut: 'slideOutDown',
          animateIn: 'flipInX',
          items:1,
          margin:50,
          stagePadding:30,
          smartSpeed:450,
          loop:true,
          // margin:10,
          // nav:true,
          navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
          responsive:{
              0:{
                  items:1,
              },
              // 600:{
              //     items:1,
              //     // nav:true,
              // },
              // 1000:{
              //     items:5
              // }
          }
      });
