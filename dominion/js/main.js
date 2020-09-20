$(document).ready(function(){ 

    var carousel = $("#carousel");
    
    carousel.owlCarousel({
      smartSpeed: 1000,
      dots: false,
      loop: true,
      // mouseDrag: false,
      // touchDrag: false,
      // pullDrag: false,
      responsive:{
          // 0:{
          //   center: true,
          //   items: 1,
          //   margin: -140
          // },
          // 768:{
          //   center: true,
          //   items: 5,
          //   margin: 0
          // },
          1200:{
            items: 4,
            margin: 0
          }
      }
      });
      // $('#right').click(function() {
      //   carousel.trigger('next.owl.carousel');
      // });
      // $('#left').click(function() {
      //   carousel.trigger('prev.owl.carousel', [1000]);
      // });
  });

// $(document).ready(function(){ 
//   $('.tab-button').on('click',function(e) {
//     e.preventDefault();
//       $('.tab-button').removeClass('active');
//       $('.tab-content').removeClass('active');
//       $(this).addClass('active');
//       $($(this).children('a').attr('href')).addClass('active');
//   });
//   $('.tab-button:first').click();
// });






// $(document).ready(function(){ 
//   $('.burger').on('click',function() {
//     if ($(this).parent().children('ul').css('visibility') == 'hidden') {
//       $(this).addClass('active');
//       $(this).parent().children('ul').css({'visibility' : 'visible', 'opacity' : '1', 'z-index' : '10000'});
//     } else {
//       $(this).removeClass('active');
//       $(this).parent().children('ul').css({'visibility' : '', 'opacity' : '', 'z-index' : ''});
//     }
//   });
// });

function openService(evt, serviceName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("services__list-item");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";
}