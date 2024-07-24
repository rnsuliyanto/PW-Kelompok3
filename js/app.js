$(document).ready(function () {
    $('#content').load('pages/homePage.html');

    $('.menu').click(function (e) { 
    e.preventDefault();
            
    var menu = $(this).attr('id');

    if(menu == "home"){
        $('#content').load('pages/homePage.html');
    }else if(menu == "member" ) {
        $('#content').load('pages/member.html');
    }else if (menu == "reactJS") {
        $('#content').load('pages/reactJS.html');
    }else if (menu == "jqueryJS") {
        $('#content').load('pages/jquery.html');
    }else if (menu == "chartsJS") {
        $('#content').load('pages/charts.html');
    }
    });
});