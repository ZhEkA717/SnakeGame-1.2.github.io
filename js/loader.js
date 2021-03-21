
document.body.onload=function(){
    setTimeout(function(){
        var boxPreload=document.getElementById('boxPreload');
        var cntue = document.getElementById('cntue');
        if(!boxPreload.classList.contains('done')){
            boxPreload.classList.add('done');
            cntue.classList.add('close');
        }
    },3000);
};

var preload = document.getElementById('preload');
var boxPreload = document.getElementById('boxPreload');

var cntue = document.getElementById('cntue');

cntue.addEventListener('click', contFun, false);
function contFun(EO){
    EO = EO || window.event;
    var loader=document.getElementById('loader');
    loader.classList.add('done');
    cntue.classList.add('done');
}





