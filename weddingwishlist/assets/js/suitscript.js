let gallery = document.querySelector('#Tab-divs .left .gallery');

gallery.addEventListener('click', function(){
    let subgallery = document.querySelector('#gallery-sub');
    subgallery.classList.toggle('active');

    let hght = subgallery.scrollHeight;

    if (subgallery.classList.contains('active')) {
        subgallery.style.height = hght + 'px';
        if (hght <= 230) {
            subgallery.classList.add('noscrollbar');
        }     
    }else{
        subgallery.style.height = 0 + 'px';
    }
})


let color = document.querySelector('#Tab-divs .left .color .name-div');
let color_search = document.querySelector('#Tab-divs .left .color .input-div input');
let color_close = document.querySelector('#Tab-divs .left .color .input-div i');
let colorIsClicked = false

document.querySelector('#color-sub').style.height = (document.querySelector('#color-sub').scrollHeight + 1) + 'px';
if (document.querySelector('#color-sub').scrollHeight > 230) {
    if (document.querySelector('#color-sub').classList.contains('noscrollbar')) {
        document.querySelector('#color-sub').classList.remove('noscrollbar')
    }
}else{
    if (!document.querySelector('#color-sub').classList.contains('noscrollbar')) {
        document.querySelector('#color-sub').classList.add('noscrollbar')
    }
}

color_close.addEventListener('mousedown', function(e){
    color_search.value = '';
    colorIsClicked = true;
    let ul = document.querySelector('#color-sub ul');
    let li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }

    let subcolor = document.querySelector('#color-sub');
    let hght = subcolor.scrollHeight;
    subcolor.style.height = (hght + 1) + 'px';
    
    color_search.focus();
})

color.addEventListener('mousedown', function(e){
    e.preventDefault();
    let subcolor = document.querySelector('#color-sub');
    subcolor.classList.toggle('active');
    let hght = subcolor.scrollHeight;
    if (subcolor.classList.contains('active')){
        subcolor.style.height = (hght + 1) + 'px';
        
        color_search.focus()
    }else{
        subcolor.style.height = 0 + 'px';
        
        color_search.blur()
    }
    
})

color_search.addEventListener('focus', function(){
    let subcolor = document.querySelector('#color-sub');
    let hght = subcolor.scrollHeight;
    if (!subcolor.classList.contains('active')){
        subcolor.classList.add('active');
    }
    subcolor.style.height = (hght + 1) + 'px';
    

})


color_search.addEventListener('keyup', function(){
    let filter = color_search.value.toUpperCase();
    let ul = document.querySelector('#color-sub ul');
    let li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
    }
    
    let subcolor = document.querySelector('#color-sub');
    subcolor.style.height = (ul.scrollHeight+1) + 'px';
    
})




let fabric = document.querySelector('#Tab-divs .left .fabric .name-div');
let fabric_search = document.querySelector('#Tab-divs .left .fabric .input-div input');
let fabric_close = document.querySelector('#Tab-divs .left .fabric .input-div i');
let fabricIsClicked = false

document.querySelector('#fabric-sub').style.height = (document.querySelector('#fabric-sub').scrollHeight + 1) + 'px';
if (document.querySelector('#fabric-sub').scrollHeight > 230) {
    if (document.querySelector('#fabric-sub').classList.contains('noscrollbar')) {
        document.querySelector('#fabric-sub').classList.remove('noscrollbar')
    }
}else{
    if (!document.querySelector('#fabric-sub').classList.contains('noscrollbar')) {
        document.querySelector('#fabric-sub').classList.add('noscrollbar')
    }
}

fabric_close.addEventListener('mousedown', function(e){
    fabric_search.value = '';
    fabricIsClicked = true;
    let ul = document.querySelector('#fabric-sub ul');
    let li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }

    let subfabric = document.querySelector('#fabric-sub');
    let hght = subfabric.scrollHeight;
    subfabric.style.height = (hght + 1) + 'px';
    
    fabric_search.focus();
})

fabric.addEventListener('mousedown', function(e){
    e.preventDefault();
    let subfabric = document.querySelector('#fabric-sub');
    subfabric.classList.toggle('active');
    let hght = subfabric.scrollHeight;
    if (subfabric.classList.contains('active')){
        subfabric.style.height = (hght + 1) + 'px';
        
        fabric_search.focus()
    }else{
        subfabric.style.height = 0 + 'px';
        
        fabric_search.blur()
    }
    
})

fabric_search.addEventListener('focus', function(){
    let subfabric = document.querySelector('#fabric-sub');
    let hght = subfabric.scrollHeight;
    if (!subfabric.classList.contains('active')){
        subfabric.classList.add('active');
    }
    subfabric.style.height = (hght + 1) + 'px';
    

})

fabric_search.addEventListener('keyup', function(){
    let filter = fabric_search.value.toUpperCase();
    let ul = document.querySelector('#fabric-sub ul');
    let li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
    }
    
    let subfabric = document.querySelector('#fabric-sub');
    subfabric.style.height = (ul.scrollHeight+1) + 'px';
    
})




const rangeInput = document.querySelectorAll("#price-sub .range-input input"),
priceInput = document.querySelectorAll("#price-sub .price-input input"),
range = document.querySelector("#price-sub .slider .progress");
let priceGap = 500;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
                priceInput[0].value = maxVal - priceGap;
                range.style.left = (((maxVal - priceGap) / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = minVal + priceGap;
                priceInput[1].value = minVal + priceGap;
                range.style.right = 100 - ((minVal + priceGap) / rangeInput[1].max) * 100 + "%";
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

let price = document.querySelector('#Tab-divs .left .price');
document.querySelector('#price-sub').style.height = (document.querySelector('#price-sub').scrollHeight + 1) + 'px';
if (document.querySelector('#price-sub').scrollHeight > 230) {
    if (document.querySelector('#price-sub').classList.contains('noscrollbar')) {
        document.querySelector('#price-sub').classList.remove('noscrollbar')
    }
}else{
    if (!document.querySelector('#price-sub').classList.contains('noscrollbar')) {
        document.querySelector('#price-sub').classList.add('noscrollbar')
    }
}

price.addEventListener('click', function(){
    let subprice = document.querySelector('#price-sub');
    subprice.classList.toggle('active');

    let hght = subprice.scrollHeight;
    
    if (subprice.classList.contains('active')) {
        if (subprice.scrollHeight > 230) {
            subprice.style.height = 230 + 'px';
        }else{
            subprice.style.height = (hght + 1) + 'px';
        }
    }else{
        subprice.style.height = 0 + 'px';
    }
})

let dropbtn = document.querySelector('.dropbtn');
let dropbtnicon = document.querySelector('#Tab-divs .right .upper-cards-div .dropdown .dropbtn i');
let dropdown = document.querySelector("#myDropdown")

dropbtn.addEventListener('click', function(){
    dropdown.classList.toggle("show");
    if (dropdown.classList.contains('show')) {
        dropbtnicon.style.transform = "rotate(-90deg)"
        dropdown.style.height = dropdown.scrollHeight + 'px';
    }else{
        dropbtnicon.style.transform = "rotate(0deg)"
        dropdown.style.height = '0px';
    }
})
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropbtnicon.style.transform = "rotate(0deg)"
        dropdown.style.height = '0px';
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}


let opensidebar = document.querySelector('#opensidebar');
let leftside = document.querySelector('#Tab-divs .left')
let closesidebar = document.querySelector('#close-sidebar')

opensidebar.addEventListener('click', function(){
    leftside.classList.toggle('active-sidebar');
    if (leftside.classList.contains('active-sidebar')) {
        leftside.style.left = '0px'
    }else{
        leftside.style.left = '-330px'
    }
})

closesidebar.addEventListener('click', function() {
    if (leftside.classList.contains('active-sidebar')) {
        leftside.classList.remove('active-sidebar');
    }
    leftside.style.left = '-330px'
})