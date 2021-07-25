// index

$(document).ready(function() {
    $("#aboutMe").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
        $(this).css("border-top", "4px solid white");
        $(this).css("border-bottom", "4px solid white");
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).css("border-top", "none");
        $(this).css("border-bottom", "none"); 
    })

    $("#projects").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
        $(this).css("border-top", "4px solid white");
        $(this).css("border-bottom", "4px solid white");
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).css("border-top", "none");
        $(this).css("border-bottom", "none");  
    })

    $("#technicalSkills").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)");
        $(this).css("border-top", "4px solid white");
        $(this).css("border-bottom", "4px solid white");
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).css("border-top", "none");
        $(this).css("border-bottom", "none");  
    })

    $("#education").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)");
        $(this).css("border-top", "4px solid white");
        $(this).css("border-bottom", "4px solid white");
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).css("border-top", "none");
        $(this).css("border-bottom", "none");  
    })

    $("#contactMe").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)");
        $(this).css("border-top", "4px solid white");
        $(this).css("border-bottom", "4px solid white");
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).css("border-top", "none");
        $(this).css("border-bottom", "none");  
    })

});