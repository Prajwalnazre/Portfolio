$(document).ready(function(){
    $("#expNext").on("click", function(){
        $(this).css("color","lightgrey");
        $("#expPrev").css("color","white");
        $("#expObj").css("display","none");
        $("#expApp").css("display", "none");
        $("#expTake").css("display", "block");
        $("#expRes").css("display", "block");
    });

    $("#expPrev").on("click", function(){
        $(this).css("color","lightgrey");
        $("#expNext").css("color","white");
        $("#expObj").css("display","block");
        $("#expApp").css("display", "block");
        $("#expTake").css("display", "none");
        $("#expRes").css("display", "none");
    });
});