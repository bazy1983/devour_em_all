$(document).ready(function () {
    var burgerInfo;
    // display burger details on .right div
    $(".burgerItem").on("click", function () {
        $(".right").empty();
        var id = { id: $(this).attr("value") };
        $.get("/burger", id, function (data) {
            if (!$(".right").hasClass("extendRight")) {
                $(".right").addClass("extendRight");
            }
            var nameCal = $("<div class = 'nameCal'>");
            var clearFix = $("<div class = 'clearfix'>");
            nameCal.append($("<p class = 'burgerName'>").text(data[0].name));
            nameCal.append($("<p class = 'burgerCal'>").text(data[0].cal + " Caloies"));
            var image = $("<div class = 'image'>")
            image.append($("<img>").attr({ src: data[0].image, alt: data[0].name }));
            var description = $("<div class = 'desc'>")
            description.append("<p>").text(data[0].description);
            $(".right")
            .append(nameCal)
            .append($("<div class = 'clearFix'>"))
            .append("<br>")
            .append(image)
            .append(description)
            .append($("<i class = 'fas fa-plus-circle'>").attr("value", data[0].id));
            burgerInfo = data;
        })
    })

    $(".right").on("click", "i", function(){ //clicking on plus button
        let orderBurger = {
            id = burgerInfo[0].id,
            img = burgerInfo[0].image,
            name = burgerInfo[0].name,
            cal = burgerInfo[0].cal
        }
        $.post("/order", orderBurger, function(data){
            $(".notification").addClass("slideInOut")
            setTimeout(function(){
                $(".notification").removeClass("slideInOut")
            },2500)
            console.log(data)
        })
        
        

    })
})