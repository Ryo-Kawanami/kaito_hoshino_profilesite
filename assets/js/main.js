'use strict';

{
    $(function(){
        $('.nav__btn--menu').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn--close, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

}