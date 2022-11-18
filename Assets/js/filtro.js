// Filtro do Portifólio

$('.filter-btn').on('click', function() {
let type = $(this).attr('id');
let boxes = $('.livro');

$('.main-btn').removeClass('active');
$(this).addClass('active');

if(type == 'fic-btn') {
    eachBoxes('fic', boxes);
}
else if(type == 'rom-btn') {
    eachBoxes('rom', boxes);
}
else if(type == 'fan-btn') {
    eachBoxes('fan', boxes);
}
else if(type == 'com-btn') {
    eachBoxes('com', boxes);
}
else if(type == 'aca-btn') {
    eachBoxes('aca', boxes);
}
else if(type == 'ter-btn') {
    eachBoxes('ter', boxes);
}
else {
    eachBoxes("all", boxes);
}
});

function eachBoxes(type, boxes) {
    if(type == 'all') {
        $(boxes).fadeIn();
    }
    else {
        $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            }
            else{
                $(this).fadeIn();
            }
        });
    }
}