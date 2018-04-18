$(document).ready(function(){

    $('.widget_card__bottom').slick({
        prevArrow:'<i class="arrow_left fa fa-chevron-left"></i>',
        nextArrow:'<i class="arrow_right fa fa-chevron-right"></i>',
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 350,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});