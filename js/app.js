$(document).ready(function () {
    $('#content').load('pages/homePage.html');

    $('.menu').click(function (e) { 
    e.preventDefault();
            
    var menu = $(this).attr('id');

    if(menu == "home"){
        $('#content').load('pages/homePage.html');
    }else if(menu == "member" ) {
        $('#content').load('pages/member.html');
    }else if (menu == "RJS") {
        $('#content').load('pages/RJS.html');
    }else if (menu == "RJS2") {
        $('#content').load('jajal/RJS2.html');
    }
    });
});