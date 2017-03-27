$(document).ready(function(){
    var menu1 = $('#menu1');
    var menu2 = $('#menu2');
    var menu3 = $('#menu3');
    var titol = $('#titol');
    var i = $('#img1').hide();//D'inici el div de les imatges estigui buida
    var j = 0;//Comptador d'imatges
    var gal;//Seleccionador de galeries
    //Font de les imatges
    var galerias = [
        ['img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg'],
        ['img/img21.jpg', 'img/img22.jpg', 'img/img23.jpg', 'img/img24.jpg'],
        ['img/img31.jpg', 'img/img32.jpg', 'img/img33.jpg', 'img/img34.jpg']
    ];
    var titols = [
        ['homer', 'pollito', 'girafa', 'gatito'],
        ['banqueta', 'snoopy', 'margarita', 'patito'],
        ['osito', 'conejito', 'garfield', 'ositoSol']
    ];
    //Menus
    menu1.on('tap', {msg: 0}, cambioTap);
    menu2.on('tap', {msg: 1}, cambioTap);
    menu3.on('tap', {msg: 2}, cambioTap);
    //Capa imatge, per fer pinch in/pinch out: shift+scroll
    i.on({
        swipeUp: cambioUp, swipeDown: cambioDown, 
        swipeRight: cambioRight, swipeLeft: cambioLeft,
        singleTap: cambioTitol, doubleTap: cambioAlbum, 
        pinchOpen: zoomOut, pinchClose: zoomIn
    });
    function cambioTap(event){
        gal = event.data.msg;//Carrega la galeria especificada
        j = 0;//Inicialitza les imatges desde la primera
//        i.attr('src', galerias[gal][j]);
        i.attr('src', galerias[gal][j]);
        i.show();
        mostraTitol();
    }
    function cambioUp(){
        if(j>=galerias[gal].length-1){ 
            j = 0;//Si arriba al final, torna al principi
        }else{
            j++;
        }
        i.attr('src', galerias[gal][j]);
        mostraTitol();
    }
    function cambioDown(){ 
        if(j<=0){ 
            j = galerias[gal].length-1;//Si arriba al principi, torna al fianl
        }else{
            j--;
        }
        i.attr('src', galerias[gal][j]);
        mostraTitol();
    }
    function cambioLeft(){
        if(gal<=0){
            gal = galerias.length-1;
        }else{
            gal--;
        }
        i.attr('src', galerias[gal][j]);
        mostraTitol();
    }
    function cambioRight(){
        if(gal>=galerias.length-1){
            gal = 0;
        }else{
            gal++;
        }
        i.attr('src', galerias[gal][j]);
        mostraTitol();
    }
    function cambioTitol(){
        titol.show();
        titols[gal][j] = prompt('Escriu el títol');
        mostraTitol();
    }
    function mostraTitol(){
        titol.html(titols[gal][j]);
    }
    function cambioAlbum(){
        var alb = prompt('Escriu l\'àlbum');
        switch (gal){
            case 0:
            menu1.html(alb);
            break;
        case 1:
            menu2.html(alb);
            break;
        case 2:
            menu3.html(alb);
            break;
        default:
            break;
        }
    }
    function zoomIn(){
        i.css('zoom', '+10%');
    }
    function zoomOut(){
        i.css('zoom', '-10%');
    }
});

