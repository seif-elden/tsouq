$("#day-date-end").click(function(){
    this.max  = new Date().toISOString().split("T")[0];

    var date = new Date($('#day-date-start').val()).toISOString().split("T")[0];
    this.min  =  date ;

})

if (screen.width <= 800) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    $(".chart-goes-here").prepend('<canvas id="myChart" width="400" height="400"></canvas>')

    
    }else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
        $(".chart-goes-here").prepend('<canvas id="myChart" width="400" height="200"></canvas>')

    }


    // Home number counterup
    if($('.count-item').length){
        $('.count-item h3').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // pop up
    new WOW().init();
