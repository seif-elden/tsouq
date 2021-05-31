    if (screen.width <= 800) {

        $(".chart-goes-here").prepend('<canvas id="myChart" width="400" height="300"></canvas>')

        
    }else{

            $(".chart-goes-here").prepend('<canvas id="myChart" width="400" height="200"></canvas>')

    }

$(".edit").click(function() {
    $(this).find('span').find('i').toggle()
})

// pop up
new WOW().init();
