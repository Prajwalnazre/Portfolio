$(document).ready(function(){
    // memoriesContainer
    // quantumContainer
    
    // cfdContainer
    // doctorContainer 
    
    $("#rightIcon").on("click", function(){


        $("#memoriesContainer").removeClass("animate__backInLeft");
        $("#quantumContainer").removeClass("animate__backInLeft");

        $("#memoriesContainer").addClass("animate__backOutLeft");
        $("#quantumContainer").addClass("animate__backOutLeft");

        setTimeout(function(){
            console.log("RIGHT");
            $("#memoriesContainer").css("display", "none");
            $("#quantumContainer").css("display", "none");

            $("#memoriesContainer").removeClass("animate__backOutLeft");
            $("#quantumContainer").removeClass("animate__backOutLeft");


            $("#cfdContainer").css("display", "block");
            $("#doctorContainer").css("display", "block");

            $("#cfdContainer").addClass("animate__backInRight");
            $("#doctorContainer").addClass("animate__backInRight");

        },700);
    });

    $("#leftIcon").on("click", function(){

        $("#cfdContainer").removeClass("animate__backInRight");
        $("#doctorContainer").removeClass("animate__backInRight");

        $("#cfdContainer").addClass("animate__backOutRight");
        $("#doctorContainer").addClass("animate__backOutRight");

        setTimeout(function(){
            console.log("LEFT");

            $("#cfdContainer").css("display", "none");
            $("#doctorContainer").css("display", "none");

            $("#cfdContainer").removeClass("animate__backOutRight");
            $("#doctorContainer").removeClass("animate__backOutRight");    

            $("#memoriesContainer").css("display", "block");
            $("#quantumContainer").css("display", "block");

            $("#memoriesContainer").addClass("animate__backInLeft");
            $("#quantumContainer").addClass("animate__backInLeft");

        },700);
    });

    

});