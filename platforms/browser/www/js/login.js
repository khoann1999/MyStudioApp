var url = "https://localhost:44368/api/Accounts"
$(document).ready(function () {
    $("#login").click(function (e) { 
        e.preventDefault();
        var username = $("#txtUsername").val().trim();
        var password = $("#txtPassword").val().trim();
        var data = {"username":username, "password":password, "role": "aass"};
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: url,
            data: JSON.stringify(data),
            success: function (response) {
                // if( response == 200){
                //     window.location.replace("home.html");
                // }else{
                //     msg = "Invalid username and password";
                // }
                $("#message").html(JSON.stringify(response.username));
                //window.location.replace("home.html");
            },
            error: function (response){
                $("#message").html(JSON.stringify(response));
            }
        });
    });
    // $("#login").click(function (e) { 
    //     $.ajax({
    //         type: "GET",
    //         url: url,
    //         success: function (response) {
                
    //         }
    //     });
        
    // });
});
