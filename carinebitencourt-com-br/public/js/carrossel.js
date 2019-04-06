$(document).ready(function(){
    /* cliente */
    $('.main-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        autoPlay: 8000,
        prevNextButtons: false,
        pageDots: false
    });
    /* O que eu faço */
    $('.client-slide').flickity({
        cellAlign: 'center',
        contain: true,
        setGallerySize: true,
        resize: true,
        wrapAround: true,
        autoPlay: 8000,
        prevNextButtons: false,
        pageDots: false
    });

    $('.feedback-carousel').flickity({
        cellAlign: 'center',
        initialIndex: 2,
        wrapAround: true,
        autoPlay: 8000,
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });

    $('.header-carousel').flickity({
        cellAlign: 'center',
        initialIndex: 2,
        wrapAround: true,
        autoPlay: 8000,
        contain: true,
        prevNextButtons: false,
        pageDots: true
    });

});