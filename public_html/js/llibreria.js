$(document).ready(function(){
    var menu1 = $('#menu1');
    var menu2 = $('#menu2');
    var menu3 = $('#menu3');
    var album = $('#album');
    var titol = $('#titol');
    var i = $('#img1').hide();//D'inici el div de les imatges estigui buida
    var j = 0;//Comptador d'imatges
    var gal;//Seleccionador de galeries
    
    //Font de les imatges
    var galerias = [
        [//-------------Galeria de fotos número 0
            {"nomAlbum": "galerias01"},//Nom de l'àlbum
            [//Les fotos de l'àlbum
                [
                    {"titol": "foto11"},
                    {"src": "img/img11.jpg"}
                ],
                [
                    {"titol": "foto12"},
                    {"src": "img/img12.jpg"}
                ],
                [
                    {"titol": "foto13"},
                    {"src": "img/img13.jpg"}
                ],
                [
                    {"titol": "foto14"},
                    {"src": "img/img14.jpg"}
                ]
            ]
        ],[]
    ];
//        ],//------------Fi de la galeria número 0
//        [//-------------Galeria de fotos número 1
//            {album: 'galerias02'}//Nom de l'àlbum
//            [//Les fotos de l'àlbum
//                [
//                    {titol: 'foto21'},
//                    {src: 'img/img21.jpg'}
//                ]
//                [
//                    {titol: 'foto22'},
//                    {src: 'img/img22.jpg'}
//                ]
//                [
//                    {titol: 'foto23'},
//                    {src: 'img/img23.jpg'}
//                ]
//                [
//                    {titol: 'foto24'},
//                    {src: 'img/img24.jpg'}
//                ]
//            ]
//        ],//------------Fi de la galeria número 1
//        [//-------------Galeria de fotos número 2
//            {album: 'galerias03'}//Nom de l'àlbum
//            [//Les fotos de l'àlbum
//                [
//                    {titol: 'foto31'},
//                    {src: 'img/img31.jpg'}
//                ]
//                [
//                    {titol: 'foto32'},
//                    {src: 'img/img32.jpg'}
//                ]
//                [
//                    {titol: 'foto33'},
//                    {src: 'img/img33.jpg'}
//                ]
//                [
//                    {titol: 'foto34'},
//                    {src: 'img/img34.jpg'}
//                ]
//            ]
//        ]//------------Fi de la galeria número 2
//    ];
    
    //Menus
    menu1.on('tap', {msg: 0}, cambioTap);
//    menu2.on('tap', {msg: 1}, cambioTap);
//    menu3.on('tap', {msg: 2}, cambioTap);
//    //Capa imatge
////    i.on({
////        swipeUp: cambioUp, swipeDown: cambioDown, 
////        swipeRight: cambioRight, swipeLeft: cambioLeft
////    });
//    
    function cambioTap(event){
        gal = event.data.msg;//Carrega la galeria especificada
        j = 0;//Inicialitza les imatges desde la primera
        //i.attr('src', galerias[gal][j]);
        album.html(galerias[gal]["nomAlbum"]);
        i.show();
    }
//    function cambioUp(){
//        if(j>=galerias[gal].length-1){ 
//            j = 0;//Si arriba al final, torna al principi
//        }else{
//            j++;
//        }
//        i.attr('src', galerias[gal][j]);
//    }
//    function cambioDown(){ 
//        if(j<=0){ 
//            j = galerias[gal].length-1;//Si arriba al principi, torna al fianl
//        }else{
//            j--;
//        }
//        i.attr('src', galerias[gal][j]);
//    }
//    function cambioLeft(){
//        if(gal<=0){
//            gal = galerias.length-1;
//        }else{
//            gal--;
//        }
//        i.attr('src', galerias[gal][j]);
//    }
//    function cambioRight(){
//        if(gal>=galerias.length-1){
//            gal = 0;
//        }else{
//            gal++;
//        }
//        i.attr('src', galerias[gal][j]);
//    }
});

