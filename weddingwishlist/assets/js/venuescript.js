const settings = {
    loop: true,
  
    speed: 700,
  
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
};
  
const swiper = new Swiper(".mySwiper", settings);
  

let loc = document.querySelector('#Tab-divs .left-side .loc .name-div');
let loc_search = document.querySelector('#Tab-divs .left-side .loc .input-div input');
let loc_close = document.querySelector('#Tab-divs .left-side .loc .input-div i');
let locIsClicked = false

document.querySelector('#loc-sub').style.height = (document.querySelector('#loc-sub').scrollHeight + 1) + 'px';
if (document.querySelector('#loc-sub').scrollHeight > 230) {
    if (document.querySelector('#loc-sub').classList.contains('noscrollbar')) {
        document.querySelector('#loc-sub').classList.remove('noscrollbar')
    }
}else{
    if (!document.querySelector('#loc-sub').classList.contains('noscrollbar')) {
        document.querySelector('#loc-sub').classList.add('noscrollbar')
    }
}

loc_close.addEventListener('mousedown', function(e){
    loc_search.value = '';
    locIsClicked = true;
    let ul = document.querySelector('#loc-sub ul');
    let li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }

    let subloc = document.querySelector('#loc-sub');
    let hght = subloc.scrollHeight;
    subloc.style.height = (hght + 1) + 'px';
    
    loc_search.focus();
})

loc.addEventListener('mousedown', function(e){
    e.preventDefault();
    let subloc = document.querySelector('#loc-sub');
    subloc.classList.toggle('active');
    let hght = subloc.scrollHeight;
    if (subloc.classList.contains('active')){
        subloc.style.height = (hght + 1) + 'px';
        
        loc_search.focus()
    }else{
        subloc.style.height = 0 + 'px';
        
        loc_search.blur()
    }
    
})

loc_search.addEventListener('focus', function(){
    let subloc = document.querySelector('#loc-sub');
    let hght = subloc.scrollHeight;
    if (!subloc.classList.contains('active')){
        subloc.classList.add('active');
    }
    subloc.style.height = (hght + 1) + 'px';
    

})

loc_search.addEventListener('keyup', function(){
    let filter = loc_search.value.toUpperCase();
    let ul = document.querySelector('#loc-sub ul');
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
    
    let subloc = document.querySelector('#loc-sub');
    subloc.style.height = (ul.scrollHeight+1) + 'px';
    
})


let category = document.querySelector('#Tab-divs .left-side .category');
document.querySelector('#category-sub').style.height = (document.querySelector('#category-sub').scrollHeight + 1) + 'px';
if (document.querySelector('#category-sub').scrollHeight > 230) {
    if (document.querySelector('#category-sub').classList.contains('noscrollbar')) {
        document.querySelector('#category-sub').classList.remove('noscrollbar')
    }
}else{
    if (!document.querySelector('#category-sub').classList.contains('noscrollbar')) {
        document.querySelector('#category-sub').classList.add('noscrollbar')
    }
}

category.addEventListener('click', function(){
    let subcategory = document.querySelector('#category-sub');
    subcategory.classList.toggle('active');

    let hght = subcategory.scrollHeight;
    
    if (subcategory.classList.contains('active')) {
        if (subcategory.scrollHeight > 230) {
            subcategory.style.height = 230 + 'px';
        }else{
            subcategory.style.height = (hght + 1) + 'px';
        }
    }else{
        subcategory.style.height = 0 + 'px';
    }
})



let price = document.querySelector('#Tab-divs .left-side .price');
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


let guest = document.querySelector('#Tab-divs .left-side .guest');
document.querySelector('#guest-sub').style.height = (document.querySelector('#guest-sub').scrollHeight + 1) + 'px';
if (document.querySelector('#guest-sub').scrollHeight > 230) {
    if (document.querySelector('#guest-sub').classList.contains('noscrollbar')) {
        document.querySelector('#guest-sub').classList.remove('noscrollbar')
    }
}else{
    if (!document.querySelector('#guest-sub').classList.contains('noscrollbar')) {
        document.querySelector('#guest-sub').classList.add('noscrollbar')
    }
}

guest.addEventListener('click', function(){
    let subguest = document.querySelector('#guest-sub');
    subguest.classList.toggle('active');

    let hght = subguest.scrollHeight;
    
    if (subguest.classList.contains('active')) {
        if (subguest.scrollHeight > 230) {
            subguest.style.height = 230 + 'px';
        }else{
            subguest.style.height = (hght + 1) + 'px';
        }
    }else{
        subguest.style.height = 0 + 'px';
    }
})

let dropbtn = document.querySelector('.dropbtn');
let dropbtnicon = document.querySelector('#Tab-divs .right-side .upper-cards-div .dropdown .dropbtn i');
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
let leftside = document.querySelector('#Tab-divs .left-side')
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