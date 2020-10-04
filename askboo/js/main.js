// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 32.0,
//         'max': 353.6
//     },
//     format: {
//       to: function (value) {
//           return value.toFixed(1);
//       },
//       from: function (value) {
//           return Number(value.replace(',-', ''));
//       }
//   }
// });

// slider.noUiSlider.on('update', function(values, handle) {
//   console.log(values);
//   document.querySelector('.start span').innerHTML = values[0];
//   document.querySelector('.finish span').innerHTML = values[1];
// });

$(document).ready(function(){ 

    var preview = $("#billboard-carousel");
    
    preview.owlCarousel({
      smartSpeed: 2000,
      
      loop: true,
      responsive:{
          0:{
            dots: true,
            items: 1,
            margin: 0
          }
      }
      });
  });


  $(document).ready(function(){ 

    var preview = $("#reviews-carousel");
    
    preview.owlCarousel({
      smartSpeed: 2000,
      loop: true,
      responsive:{
          0:{
            dots: true,
            items: 2,
            margin: 34
          },
          1440:{
            dots: true,
            items: 3,
            margin: 34
          }
      }
      });
      $('#right').click(function() {
        preview.trigger('next.owl.carousel');
      });
      $('#left').click(function() {
        preview.trigger('prev.owl.carousel', [2000]);
      });
  });


// $(document).ready(function(){ 
//   $('.popup-link').on('click', function () {
//     $('body').css('overflow-y', 'hidden')
//   });
// });

// $(document).ready(function(){ 
//   $('.close-popup').on('click', function () {
//     $('body').css('overflow-y', '')
//   });
// });


// $(document).ready(function(){ 
//   $('.burger-box').on('click', function () {
//     if ($(this).hasClass('active')) {
//       $(this).removeClass('active');
//       $('header ul').css('transform', '');
//       $('body').css('overflow-y', '');
//       $('.substrate').removeClass('active');
//     } else {
//       $(this).addClass('active');
//       $('header ul').css('transform', 'translate(0, 0)');
//       $('body').css('overflow-y', 'hidden');
//       $('.substrate').addClass('active');
//     }
//   });
// });

// var a = $(".billboard").offset().top+150;

// $(document).scroll(function(){
//        if($(this).scrollTop() > a)
//        {   
//           $('header').css({"background":"#1F1F24"});
//        } else {
//           $('header').css({"background":"transparent"});
//        }
// });

//   $(document).ready(function(){ 
//     $('.years-tab a').on('click',function(e) {
//       e.preventDefault();
//         $('.years-tab a').removeClass('active');
//         $('.year-tab').removeClass('active');
//         $(this).addClass('active');
//         $($(this).attr('href')).addClass('active');
//         // $('.year-tab ').addClass('fa');
//     });
//     $('.years-tab a:first').click();
    

//   });

//   $(document).ready(function(e){ 
//     $('.mounth-tab a').on('click',function(e) {
//       e.preventDefault();
//         $('.mounth-tab a').removeClass('active');
//         $('.carousel-wrapper').removeClass('active');
//         $(this).addClass('active');
//         $($(this).attr('href')).addClass('active');
//     });
//     $('.mounth-tab a:first').click();
//   });

// $(document).ready(function(){ 
//   $('.years-tab a').on('click',function(e) {
//     if ($('.year2020').css('display') == 'block') {
//       $('.year2020 a:first').click();
//     }
//   });
// });

// $(document).ready(function(){ 
// $('.years-tab a').on('click',function(e) {
//   if ($('.year2019').css('display') == 'block') {
//       $('.year2019 a:first').click();
//     }
//   });
// });

// $(document).ready(function(){ 
//   $('.all').on('click', function (e) {
//     e.preventDefault();
//     if ($('.news-wrapper').hasClass('active')) {
//       $('.news-wrapper').removeClass('active');
//       $(this).html('Отобразить все');
//     } else {
//       $('.news-wrapper').addClass('active');
//       $(this).html('Скрыть все');
//     }
//   });
// });

// $(function(){
//   $('label input').on('change', function(){
//     if($(this).prop('checked')){
//       $(this).parent('label').addClass('active');
//     }else{
//       $(this).parent('label').removeClass('active');
//     }
//   });
// });


// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 800;

// if(popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener("click", function(e){
//       const popupName = popupLink.getAttribute('href').replace('#','');
//       const curentPopup = document.getElementById(popupName);
//       popupOpen(curentPopup);
//       e.preventDefault();
//     });
//   }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener('click', function (e){
//       popupClose(el.closest('.popup'));
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(curentPopup) {
//   if (curentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     curentPopup.classList.add('open');
//     curentPopup.addEventListener("click", function(e){
//       if (!e.target.closest('.popup__body')) {
//         popupClose(e.target.closest('.popup'));
//       }
//     });
//   }
// }

// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('open');
//     if (doUnlock) {
//       bodyUnlock();
//     }
//   }
// }

// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

//   if (lockPadding.length > 0) {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       // el.style.paddingRight = lockPaddingValue;
//     }
//   }
//   // body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// function bodyUnlock() {
//   setTimeout(function () {
//     for(let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = '0px';
//     }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock'); 
//   }, timeout);

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }