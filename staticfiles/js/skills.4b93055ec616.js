$(document).ready(function(){
    $("#skillsRight").on("click", function(){
        $("#introContainer").css("display", "none");
        $(this).css("display", "none");

        $("#mySkills").css("display", "block");
        $("#skillsLeft").css("display", "block");
    });

    $("#skillsLeft").on("click", function(){
        $("#introContainer").css("display", "block");
        $(this).css("display", "none");

        $("#mySkills").css("display", "none");
        $("#skillsRight").css("display", "block");

    });
});