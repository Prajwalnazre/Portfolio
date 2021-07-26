// index
    
$(document).ready(function() {
    console.log("document ready")
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

    $("#experience").mouseenter(function(){
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

    var counter = 0
    $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            counter = counter - 1;
            // console.log(counter);
        }
        else{
            counter = counter + 1;
            // console.log(counter);
        }
        if(counter > 100)
        {
            counter = 0;
        }
        if(counter < 0)
        {
            counter = 100;
        }
        var index = parseInt(counter/20)
        // console.log(index);

        var navIds = ["#aboutMe", "#projects", "#experience", "#education", "#contactMe"];

        $(navIds[index]).css("transition", "all 1s");
        $(navIds[index]).css("transform", "scale(1.1)");
        $(navIds[index]).css("border-top", "4px solid white");
        $(navIds[index]).css("border-bottom", "4px solid white");

        setTimeout(function(){
            $(navIds[index]).css("transform", "scale(1)");
            $(navIds[index]).css("border-top", "none");
            $(navIds[index]).css("border-bottom", "none");
        },1000);

        if(index == 0)
        {
            // Section above - contactContainer
            // Section below - projectsContainer
            // Current Section - aboutMeContainer

            $("#contactContainer").addClass("animate__backOutUp");
            $("#contactContainer").removeClass("animate__fadeInDown");
            $("#projectsContainer").addClass("animate__backOutUp");
            $("#projectsContainer").removeClass("animate__fadeInDown");
            
            setTimeout(function(){
                $("#contactContainer").css("display", "none");
                $("#projectsContainer").css("display", "none");
                $("#aboutMeContainer").css("display", "block");
                $("#aboutMeContainer").addClass("animate__fadeInDown");
            },400);
        }
        
        if(index == 1)
        {

            // Section above - aboutMeContainer
            // Section below - experienceContainer
            // Current Section - projectsContainer

            $("#aboutMeContainer").addClass("animate__backOutUp");
            $("#aboutMeContainer").removeClass("animate__fadeInDown");
            $("#experienceContainer").addClass("animate__backOutUp");
            $("#experienceContainer").removeClass("animate__fadeInDown");
            
            setTimeout(function(){
                $("#aboutMeContainer").css("display", "none");
                $("#experienceContainer").css("display", "none");
                $("#projectsContainer").css("display", "block");
                $("#projectsContainer").addClass("animate__fadeInDown");
            },400);
        }

        if(index == 2)
        {
            // Section above - projectsContainer
            // Section below - educationContainer
            // Current Section - experienceContainer

            $("#projectsContainer").addClass("animate__backOutUp");
            $("#projectsContainer").removeClass("animate__fadeInDown");
            $("#educationContainer").addClass("animate__backOutUp");
            $("#educationContainer").removeClass("animate__fadeInDown");
            
            setTimeout(function(){
                $("#projectsContainer").css("display", "none");
                $("#educationContainer").css("display", "none");
                $("#experienceContainer").css("display", "block");
                $("#experienceContainer").addClass("animate__fadeInDown");
            },400);
        }

        if(index == 3)
        {
            // Section above - experienceContainer
            // Section below - contactContainer
            // Current Section - educationContainer

            $("#experienceContainer").addClass("animate__backOutUp");
            $("#experienceContainer").removeClass("animate__fadeInDown");
            $("#contactContainer").addClass("animate__backOutUp");
            $("#contactContainer").removeClass("animate__fadeInDown");
            
            setTimeout(function(){
                $("#experienceContainer").css("display", "none");
                $("#contactContainer").css("display", "none");
                $("#educationContainer").css("display", "block");
                $("#educationContainer").addClass("animate__fadeInDown");
            },400);
        }

        if(index == 4)
        {
            // Section above - educationContainer
            // Section below - aboutMeContainer
            // Current Section - contactContainer

            $("#educationContainer").addClass("animate__backOutUp");
            $("#educationContainer").removeClass("animate__fadeInDown");
            $("#aboutMeContainer").addClass("animate__backOutUp");
            $("#aboutMeContainer").removeClass("animate__fadeInDown");
            
            setTimeout(function(){
                $("#educationContainer").css("display", "none");
                $("#aboutMeContainer").css("display", "none");
                $("#contactContainer").css("display", "block");
                $("#contactContainer").addClass("animate__fadeInDown");
            },400);
        }        

    });

});
