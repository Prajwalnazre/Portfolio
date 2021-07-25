// index

$(document).ready(function() {
    $("#aboutMe").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)") 
    })

    $("#projects").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)") 
    })

    $("#technicalSkills").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)") 
    })

    $("#education").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)") 
    })

    $("#contactMe").mouseenter(function(){
        $(this).css("transition", "all 1s");
        $(this).css("transform", "scale(1.1)")
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)") 
    })


});