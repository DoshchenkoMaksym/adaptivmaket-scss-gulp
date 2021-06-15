$(function() {
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--open');
    });

    $('.products__nav-button').on('click', function () {
        $('.products__nav-list').toggleClass('products__nav-list--open');
    });
})
