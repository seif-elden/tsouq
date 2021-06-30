    if (screen.width <= 800) {

        $(".chart-goes-here").prepend('<canvas id="myChart" width="400" height="300"></canvas>')

        
    }else{

            $(".chart-goes-here").prepend('<canvas id="myChart" width="400" height="200"></canvas>')

    }

    $('.delete').click(function () {
        var removelist = []
        var x = $(".hasbeenselected").parents('tr')
        x.each(function () {
            removelist.push( $(this).attr('id')  )         
        })
        alert(removelist)
        x.remove()
    })

    $(".edit").click(function() {
        $(this).find('span').find('i').toggle().toggleClass('hasbeenselected')
    })

// pop up
new WOW().init();
