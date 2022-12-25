
let pegar = document.querySelector('.area-mobile')
let fend = document.querySelector('#barra');
let img =  document.querySelector('img');

function menuOpen() {

        if(pegar.style.display === 'none') {

         pegar.style.display = 'block'
        fend.src  = '/news-homepage-main/news-homepage-main/assets/images/icon-menu-close.svg';
    
    }else {

        pegar.style.display = 'none'
        fend.src  = '/news-homepage-main/news-homepage-main/assets/images/icon-menu.svg';
   
    }
   
}



