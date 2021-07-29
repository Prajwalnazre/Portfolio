$(document).ready(function(){

    $("#submitBtn").on("click",function(){
        console.log("Click");
        var name = $("#visName").val();
        var email = $("#visMail").val();
        var message = $("#visMessage").val();
        var settings = {
            "url": "/main/visitor/",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(
                {
                    "name":name,
                    "email":email,
                    "message":message
                }),
        };

        console.log(settings);
          
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        // $.ajax({
        //     async: false,
        //     type: "POST",
        //     url: "/main/visitor/",
        //     data: JSON.stringify(
        //         {
        //             "name": "Prajwal",
        //             "email": "prajwal.nazre777@gmail.com",
        //             "message": "Hello"
        //         }
        //     ),
        //     success: function (response) {
        //         console.log(response);
        //     },
        //     error: function(response) {
        //         console.log(response);
        //     }
        // });
    });
    
});