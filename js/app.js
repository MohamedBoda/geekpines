$(document).ready(function() {
    'use strict';
    new WOW({
        boxClass:'geekpines',
        offset:0,
    }).init();     
});
$('.services').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  dots:true,
  autoplay: true, 
  autoplaySpeed: 2000,
  focusOnSelect: false,
  responsive: [
{ 
    breakpoint: 1100,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
    }
},{
    breakpoint: 800,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows:true,
    }
},{
    breakpoint: 460,
        settings: {
        slidesToShow: 1,
        dots:true,
     Speed: 2000, 
     arrows:true,
   
    }
  }]
});

$('.slider_4').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  dots:false, 
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: false,
  responsive: [
{
    breakpoint: 1100,
    settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    }
},{
    breakpoint: 800,
        settings: {
        slidesToShow: 1,
        dots:true,
     Speed: 2000, 
    }
  }]
});
$('.plans').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:true,
            }
        },{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows:true,
            }
        },{
            breakpoint: 660,
                settings: {
                slidesToShow: 1,
                arrows:true,
                dots:true,
             Speed: 2000, 
            }
        }]
  });
  $('.persones').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 9,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows:false, 
    dots:false,
    
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                   
           
            }
          }]
  });


