$(document).ready(function(){
    // memoriesContainer
    // quantumContainer
    
    // cfdContainer
    // doctorContainer 
    
    $("#rightIcon").on("click", function(){
        $(this).css("color", "lightgrey");
        $("#leftIcon").css("color", "white");

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

        $(this).css("color", "lightgrey");
        $("#rightIcon").css("color", "white");

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

    $(".closeBtn").on("click", function(){
        $("#memoriesModal").addClass("animate__bounceOutUp");
        $("#memoriesModal").removeClass("animate__bounceInDown");

        $("#quantumModal").addClass("animate__bounceOutUp");
        $("#quantumModal").removeClass("animate__bounceInDown");
        
        $("#cfdModal").addClass("animate__bounceOutUp");
        $("#cfdModal").removeClass("animate__bounceInDown");
        
        $("#doctorModal").addClass("animate__bounceOutUp");
        $("#doctorModal").removeClass("animate__bounceInDown");

        $("#memoriesContainer").css("opacity","1");
        $("#quantumContainer").css("opacity","1");
        $("#cfdContainer").css("opacity","1");
        $("#doctorContainer").css("opacity","1");
            
        
        setTimeout(function(){
            $("#memoriesModal").css("display", "none");
            $("#quantumModal").css("display", "none");
            $("#cfdModal").css("display", "none");
            $("#doctorModal").css("display", "none");
            
            $(".overlay").css("display", "none");
            
            $("#memoriesModal").removeClass("animate__bounceOutUp");
            $("#quantumModal").removeClass("animate__bounceOutUp");
            $("#cfdModal").removeClass("animate__bounceOutUp");
            $("#doctorModal").removeClass("animate__bounceOutUp");

        }, 1000)
        
    });

    $("#memoriesMoreBtn").on("click",function(){
        $("#memoriesModal").css("display", "block");
        $("#memoriesModal").addClass("animate__bounceInDown");
        
        $("#quantumModal").css("display", "none");
        $("#cfdModal").css("display", "none");
        $("#doctorModal").css("display", "none");

        $(".overlay").css("display", "block");
        $("#memoriesContainer").css("opacity","0.7");
        $("#quantumContainer").css("opacity","0.7");
        $("#cfdContainer").css("opacity","0.7");
        $("#doctorContainer").css("opacity","0.7");

    })

    $("#quantumMoreBtn").on("click",function(){
        $("#memoriesModal").css("display", "none");
        $("#quantumModal").css("display", "block");
        $("#quantumModal").addClass("animate__bounceInDown");

        $("#cfdModal").css("display", "none");
        $("#doctorModal").css("display", "none");

        $(".overlay").css("display", "block");
        $("#memoriesContainer").css("opacity","0.7");
        $("#quantumContainer").css("opacity","0.7");
        $("#cfdContainer").css("opacity","0.7");
        $("#doctorContainer").css("opacity","0.7");
        
    })

    $("#cfdMoreBtn").on("click",function(){
        $("#memoriesModal").css("display", "none");
        $("#quantumModal").css("display", "none");
        $("#cfdModal").css("display", "block");
        $("#cfdModal").addClass("animate__bounceInDown");

        $("#doctorModal").css("display", "none");

        $(".overlay").css("display", "block");
        $("#memoriesContainer").css("opacity","0.7");
        $("#quantumContainer").css("opacity","0.7");
        $("#cfdContainer").css("opacity","0.7");
        $("#doctorContainer").css("opacity","0.7");
        
    })

    $("#doctorMoreBtn").on("click",function(){
        $("#memoriesModal").css("display", "none");
        $("#quantumModal").css("display", "none");
        $("#cfdModal").css("display", "none");
        $("#doctorModal").css("display", "block");
        $("#doctorModal").addClass("animate__bounceInDown");

        $(".overlay").css("display", "block");
        $("#memoriesContainer").css("opacity","0.7");
        $("#quantumContainer").css("opacity","0.7");
        $("#cfdContainer").css("opacity","0.7");
        $("#doctorContainer").css("opacity","0.7");
        
    })

    // $("#memoriesContainer").mouseenter(function(){
    //     $(this).removeAttr('style');
    //     $(this).css("transform", "scale(1.05)");
    //     console.log("enter the dragon");
    // }).mouseleave(function(){
    //     $(this).removeAttr('style');
    //     $(this).css("transform", "scale(1)");
    // });

});