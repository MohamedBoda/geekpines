

    $('.popup-gallery')
    .slick({
            slidesToShow: 3, 
            swipeToSlide: true,
            autoplay: false, 
            autoplaySpeed: 2000,
            focusOnSelect: false,
            focusOnChange: false,
            variableWidth: true,
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
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000, 
                arrows:true,
            }
        },]
    })
    .magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });
    
    $('.services').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        dots:true,
        autoplay: true, 
        autoplaySpeed: 2000,
        focusOnSelect: false,
        focusOnChange: false,
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
        focusOnChange: false,
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
        focusOnChange: false,
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
        slidesToShow: 7,
        slidesToScroll: 1,
        easing: 'linear',
        autoplay: true,
        cssEase:'ease',
        autoplaySpeed: 4000,      
        arrows:false, 
        dots:false,
        focusOnSelect: false,
        focusOnChange: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }]
        }); 
        $(document).ready(function() {
            $('.slick-slide').click(function() {
                var slideno = $(this).attr("data-slick-index")
                $('.persones').slick('slickGoTo', slideno)
            })
        $('.slider-pop-up').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:true,
            dots:false, 
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        focusOnChange: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows:true,
                dots:false,
                }
            },{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows:true,
                    dots:false,
                }
            },{
                breakpoint: 660,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true,
                    dots:false,
                Speed: 2000, 
                }
            }]
    });
 
    var modal_1 = document.getElementById("pop-up-1");
    var modal_2 = document.getElementById("pop-up-2");
    var modal_3 = document.getElementById("pop-up-3");
    var modal_4 = document.getElementById("pop-up-4");
    var modal_5 = document.getElementById("pop-up-5");
    var modal_6 = document.getElementById("pop-up-6");
    var modal_7 = document.getElementById("pop-up-7");
    var modal_8 = document.getElementById("pop-up-8");
    var modal_9 = document.getElementById("pop-up-9");
    var modal_10 = document.getElementById("pop-up-10");

    var trigger_1 = document.querySelectorAll(".trigger-1");
    var trigger_2= document.querySelectorAll(".trigger-2");
    var trigger_3= document.querySelectorAll(".trigger-3");
    var trigger_4= document.querySelectorAll(".trigger-4");
    var trigger_5= document.querySelectorAll(".trigger-5");
    var trigger_6= document.querySelectorAll(".trigger-6");
    var trigger_7= document.querySelectorAll(".trigger-7");
    var trigger_8= document.querySelectorAll(".trigger-8");
    var trigger_9= document.querySelectorAll(".trigger-9");
    var trigger_10= document.querySelectorAll(".trigger-10");

    
    var header = document.getElementById("header");
    function toggleModal1() {
        close();
        modal_1.classList.toggle("show-pop-up");
    }
    function toggleModal2() {
        close();
        modal_2.classList.toggle("show-pop-up");    
    }
    function toggleModal3() {
        close();
        modal_3.classList.toggle("show-pop-up");
    }
    function toggleModal4() {
        close();
        modal_4.classList.toggle("show-pop-up");
    }
    function toggleModal5() {
        close();
        modal_5.classList.toggle("show-pop-up");
    }
    function toggleModal6() {
        close();
        modal_6.classList.toggle("show-pop-up");
    }
    function toggleModal7() {
        close();
        modal_7.classList.toggle("show-pop-up");
    }
    function toggleModal8() {
        close();
        modal_8.classList.toggle("show-pop-up");
    }
    function toggleModal9() {
        close();
        modal_9.classList.toggle("show-pop-up");
    }
    function toggleModal10() {
        close();
        modal_10.classList.toggle("show-pop-up");
    }
    function close() {
        modal_1.classList.remove("show-pop-up");
        modal_2.classList.remove("show-pop-up");
        modal_3.classList.remove("show-pop-up");
        modal_4.classList.remove("show-pop-up");
        modal_5.classList.remove("show-pop-up");
        modal_6.classList.remove("show-pop-up");
        modal_7.classList.remove("show-pop-up");
        modal_8.classList.remove("show-pop-up");
        modal_9.classList.remove("show-pop-up");
        modal_10.classList.remove("show-pop-up");
    }
    function windowOnClick(event) {
        if (event.target === modal) { 
            toggleModal();
        }
    }
    trigger_1.forEach(function(x) {
        x.addEventListener("click", toggleModal1);
    })
    trigger_2.forEach(function(x) {
        x.addEventListener("click", toggleModal2);
    })
    trigger_3.forEach(function(x) {
        x.addEventListener("click", toggleModal3);
    })
    trigger_4.forEach(function(x) {
        x.addEventListener("click", toggleModal4);
    })
    trigger_5.forEach(function(x) {
        x.addEventListener("click", toggleModal5);
    })
    trigger_6.forEach(function(x) {
        x.addEventListener("click", toggleModal6);
    })
    trigger_7.forEach(function(x) {
        x.addEventListener("click", toggleModal7);
    })
    trigger_8.forEach(function(x) {
        x.addEventListener("click", toggleModal8);
    })
    trigger_9.forEach(function(x) {
        x.addEventListener("click", toggleModal9);
    })
    trigger_10.forEach(function(x) {
        x.addEventListener("click", toggleModal10);
    })

    var closeButtons = document.querySelectorAll(".go-back");
    closeButtons.forEach(function(x){
        x.addEventListener("click", close); 
    })
    header.addEventListener("click", close);
});
function openNav() {
    document.getElementById("myNav").classList.add('overlay-expand')
}
function closeNav() {
    document.getElementById("myNav").classList.remove('overlay-expand')
}