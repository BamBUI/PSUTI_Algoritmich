$(document).ready(function($){

    $('.burger').click(function(event){
        $('.burger,.header_navigation').toggleClass('active_burger');
        $('body').toggleClass('lock');  

    });
    
    
});