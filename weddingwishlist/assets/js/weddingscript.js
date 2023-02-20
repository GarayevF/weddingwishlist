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


let color = document.querySelector('#Tab-divs .left .color');
document.querySelector('#color-sub').style.height = (document.querySelector('#color-sub').scrollHeight + 1) + 'px';

color.addEventListener('click', function(){
    let subcolor = document.querySelector('#color-sub');
    subcolor.classList.toggle('active');

    let hght = subcolor.scrollHeight;

    if (subcolor.classList.contains('active')) {
        subcolor.style.height = (hght+1) + 'px';        
    }else{
        subcolor.style.height = 1 + 'px';
    }
})

let fabric = document.querySelector('#Tab-divs .left .fabric .name-div');
let fabric_search = document.querySelector('#Tab-divs .left .fabric .input-div input');
let fabric_close = document.querySelector('#Tab-divs .left .fabric .input-div i');

document.querySelector('#fabric-sub').style.height = (document.querySelector('#fabric-sub').scrollHeight + 1) + 'px';

fabric_close.addEventListener('click', function(){
    fabric_search.value = '';
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
        subfabric.style.height = 1 + 'px';
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




let neckline = document.querySelector('#Tab-divs .left .neckline');
document.querySelector('#neckline-sub').style.height = (document.querySelector('#neckline-sub').scrollHeight + 1) + 'px';

neckline.addEventListener('click', function(){
    let subneckline = document.querySelector('#neckline-sub');
    subneckline.classList.toggle('active');

    let hght = subneckline.scrollHeight;

    if (subneckline.classList.contains('active')) {
        if (subneckline.scrollHeight > 230) {
            subneckline.style.height = 230 + 'px';
        }else{
            subneckline.style.height = (hght + 1) + 'px';
        }
        
    }else{
        subneckline.style.height = 1 + 'px';
    }
})

let silhouette = document.querySelector('#Tab-divs .left .silhouette');
document.querySelector('#silhouette-sub').style.height = (document.querySelector('#silhouette-sub').scrollHeight + 1) + 'px';

silhouette.addEventListener('click', function(){
    let subsilhouette = document.querySelector('#silhouette-sub');
    subsilhouette.classList.toggle('active');

    let hght = subsilhouette.scrollHeight;

    if (subsilhouette.classList.contains('active')) {
        if (subsilhouette.scrollHeight > 230) {
            subsilhouette.style.height = 230 + 'px';
        }else{
            subsilhouette.style.height = (hght + 1) + 'px';
        }
        
        
    }else{
        subsilhouette.style.height = 1 + 'px';
    }
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
        subprice.style.height = 1 + 'px';
    }
})