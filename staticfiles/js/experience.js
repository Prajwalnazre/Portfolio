$(document).ready(function(){
    $("#expNext").on("click", function(){
        $(this).css("color","lightgrey");
        $("#expPrev").css("color","white");
        $("#expObj").css("display","none");
        $("#expApp").css("display", "none");
        $("#expObj").removeClass("animate__animated animate__fadeIn");
        $("#expApp").removeClass("animate__animated animate__fadeIn");

        $("#expTake").css("display", "block");
        $("#expRes").css("display", "block");
        $("#expTake").addClass("animate__animated animate__fadeIn");
        $("#expRes").addClass("animate__animated animate__fadeIn");

    });

    $("#expPrev").on("click", function(){
        $(this).css("color","lightgrey");
        $("#expNext").css("color","white");
        $("#expObj").css("display","block");
        $("#expApp").css("display", "block");
        $("#expObj").addClass("animate__animated animate__fadeIn");
        $("#expApp").addClass("animate__animated animate__fadeIn");
        
        $("#expTake").css("display", "none");
        $("#expRes").css("display", "none");
        $("#expTake").removeClass("animate__animated animate__fadeIn");
        $("#expRes").removeClass("animate__animated animate__fadeIn");

    });
});