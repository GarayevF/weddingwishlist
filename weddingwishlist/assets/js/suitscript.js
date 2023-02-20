let gallery = document.querySelector('#Tab-divs .left .gallery');

gallery.addEventListener('click', function(){
    let subgallery = document.querySelector('#gallery-sub');
    subgallery.classList.toggle('active');

    let hght = subgallery.scrollHeight;

    if (subgallery.classList.contains('active')) {
        subgallery.style.height = hght + 'px';        
    }else{
        subgallery.style.height = 0 + 'px';
    }
})


let gender = document.querySelector('#Tab-divs .left .gender');

gender.addEventListener('click', function(){
    let subgender = document.querySelector('#gender-sub');
    subgender.classList.toggle('active');

    let hght = subgender.scrollHeight;

    if (subgender.classList.contains('active')) {
        subgender.style.height = hght + 'px';        
    }else{
        subgender.style.height = 1 + 'px';
    }
})

let color = document.querySelector('#Tab-divs .left .color');

color.addEventListener('click', function(){
    let subcolor = document.querySelector('#color-sub');
    subcolor.classList.toggle('active');

    let hght = subcolor.scrollHeight;

    if (subcolor.classList.contains('active')) {
        subcolor.style.height = hght + 'px';        
    }else{
        subcolor.style.height = 1 + 'px';
    }
})

let fabric = document.querySelector('#Tab-divs .left .fabric .name-div');
let fabric_search = document.querySelector('#Tab-divs .left .fabric .input-div input');
let fabric_close = document.querySelector('#Tab-divs .left .fabric .input-div i');

fabric_close.addEventListener('click', function(){
    fabric_search.value = '';
})

fabric.addEventListener('mousedown', function(e){
    e.preventDefault();
    let subfabric = document.querySelector('#fabric-sub');
    subfabric.classList.toggle('active');

    if (subfabric.classList.contains('active')){
        fabric_search.focus()
    }else{
       fabric_search.blur()
    }
    
})

fabric_search.addEventListener('focus', function(){

    let subfabric = document.querySelector('#fabric-sub');
    let hght = subfabric.scrollHeight;
    if (!subfabric.classList.contains('active')){
        subfabric.classList.add('active');
    }
    subfabric.style.height = hght + 'px';

})

fabric_search.addEventListener('blur', function(e){

    let subfabric = document.querySelector('#fabric-sub');

    if (subfabric.classList.contains('active')){
        subfabric.classList.remove('active');
    }
    
    subfabric.style.height = 1 + 'px';
})

let filter = fabric_search.value.toUpperCase();
let ul = document.querySelector('#fabric-sub ul');
let li = ul.getElementsByTagName('li');

fabric_search.addEventListener('keyup', function(){
    let filter = fabric_search.value.toUpperCase();
    let ul = document.querySelector('#fabric-sub ul');
    let li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})
