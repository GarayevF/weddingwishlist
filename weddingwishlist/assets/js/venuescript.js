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



let left_search_input = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-left input');
let right_search_input = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-right input');

let left_search_dropdown = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-left .search-left-dropdown');
let right_search_dropdown = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-right .search-right-dropdown');

left_search_dropdown.style.height = (left_search_dropdown.scrollHeight + 1) + 'px';
if (left_search_dropdown.scrollHeight > 430) {
    if (left_search_dropdown.classList.contains('noscrollbar')) {
        left_search_dropdown.classList.remove('noscrollbar')
    }
}else{
    if (!left_search_dropdown.classList.contains('noscrollbar')) {
        left_search_dropdown.classList.add('noscrollbar')
    }
}

if (!left_search_dropdown.classList.contains('active')){
    left_search_dropdown.style.height = 0 + 'px';
}


right_search_dropdown.style.height = (right_search_dropdown.scrollHeight + 1) + 'px';
if (right_search_dropdown.scrollHeight > 430) {
    if (right_search_dropdown.classList.contains('noscrollbar')) {
        right_search_dropdown.classList.remove('noscrollbar')
    }
}else{
    if (!right_search_dropdown.classList.contains('noscrollbar')) {
        right_search_dropdown.classList.add('noscrollbar')
    }
}

if (!right_search_dropdown.classList.contains('active')){
    right_search_dropdown.style.height = 0 + 'px';
}

left_search_input.addEventListener('focus', function(){
    let subloc = left_search_dropdown
    subloc.style.visibility = 'visible'
    let hght = subloc.scrollHeight;
    if (!subloc.classList.contains('active')){
        subloc.classList.add('active');
    }
    subloc.style.height = (hght + 1) + 'px';
})

left_search_input.addEventListener('blur', function(){
    let subloc = left_search_dropdown
    if (subloc.classList.contains('active')){
        subloc.classList.remove('active');
    }
    subloc.style.height = 0 + 'px';
    subloc.style.visibility = 'hidden'
})

right_search_input.addEventListener('focus', function(){
    let subloc = right_search_dropdown
    subloc.style.visibility = 'visible'
    let hght = subloc.scrollHeight;
    if (!subloc.classList.contains('active')){
        subloc.classList.add('active');
    }

    let ul = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-right .search-right-dropdown ul');
    let alllis = ul.querySelectorAll('li:not(:last-of-type');
    if(right_search_input.value == ""){
        if(window.innerWidth < 1024){
            ul.style.columnCount = '1'
            subloc.style.width = "200px";
        }else{
            ul.style.columnCount = '3'
            subloc.style.width = "450px";
        }
        
        alllis.forEach(e => {
            e.style.borderBottom = '0px';
        });
    }else{
        alllis.forEach(e => {
            e.style.borderBottom = '1px solid #d9d9d9';
        });
    }
    subloc.style.height = (hght + 1) + 'px';
})

right_search_input.addEventListener('blur', function(){
    let subloc = right_search_dropdown
    if (subloc.classList.contains('active')){
        subloc.classList.remove('active');
    }
    subloc.style.height = 0 + 'px';
    subloc.style.visibility = 'hidden'
})


left_search_input.addEventListener('keyup', function(){
    
    let filter = left_search_input.value.toUpperCase();
    let ul = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-left .search-left-dropdown ul');
    let li = ul.getElementsByTagName('li');
    ul.style.columnCount = '1'
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
    }
    
    let subloc = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-left .search-left-dropdown');
    subloc.style.height = (ul.scrollHeight+1) + 'px';
    
})

right_search_input.addEventListener('keyup', function(){
    
    let filter = right_search_input.value.toUpperCase();
    let ul = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-right .search-right-dropdown ul');
    let li = ul.getElementsByTagName('li');
    ul.style.columnCount = '1'

    
    let alllis = ul.querySelectorAll('li:not(:last-child');
    alllis.forEach(e => {
        e.style.borderBottom = '1px solid #d9d9d9';
    });
    
    document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-right .search-right-dropdown').style.width = "200px";
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
    }
    
    let subloc = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div .search-right .search-right-dropdown');
    subloc.style.height = (ul.scrollHeight+1) + 'px';
    
})



let left_search_modal_input = document.querySelector('#search-modal-left-main .left-search-modal .input-div input');
let left_search_modal_sub = document.querySelector('#search-modal-left-main .left-search-modal .sub-div');

let left_modal_close = document.querySelector('#search-modal-left-main .left-search-modal .top i');
let left_modal_open = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div-m .search-left-m button');

let right_search_modal_input = document.querySelector('#search-modal-right-main .right-search-modal .input-div input');
let right_search_modal_sub = document.querySelector('#search-modal-right-main .right-search-modal .sub-div');

let right_modal_close = document.querySelector('#search-modal-right-main .right-search-modal .top i');
let right_modal_open = document.querySelector('#Heading .container-custom-heading .all-div .left .hh-search-div-m .search-right-m button');


left_search_modal_input.addEventListener('keyup', function(){
    
    let filter = left_search_modal_input.value.toUpperCase();
    let ul = document.querySelector('#search-modal-left-main .left-search-modal .sub-div ul');
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
})

left_modal_close.addEventListener('click', function(){

    let modal = document.querySelector('#search-modal-left-main');
    modal.classList.toggle('active');

    if(modal.classList.contains('active')){
        modal.style.height = '100%'
        modal.style.visibility = 'visible'
        document.body.style.overflow = 'hidden';   
    }
    else{
        modal.style.height = '0px';
        modal.style.visibility = 'hidden'
        document.body.style.overflow = '';
    }
})

left_modal_open.addEventListener('click', function(){

    let modal = document.querySelector('#search-modal-left-main');
    modal.classList.toggle('active');

    if(modal.classList.contains('active')){
        modal.style.height = '100%'
        modal.style.visibility = 'visible'
        document.body.style.overflow = 'hidden';   
    }
    else{
        modal.style.height = '0px';
        modal.style.visibility = 'hidden'
        document.body.style.overflow = '';
    }
})


right_search_modal_input.addEventListener('keyup', function(){
    
    let filter = right_search_modal_input.value.toUpperCase();
    let ul = document.querySelector('#search-modal-right-main .right-search-modal .sub-div ul');
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
})

right_modal_close.addEventListener('click', function(){

    let modal = document.querySelector('#search-modal-right-main');
    modal.classList.toggle('active');

    if(modal.classList.contains('active')){
        modal.style.height = '100%'
        modal.style.visibility = 'visible'
        document.body.style.overflow = 'hidden';   
    }
    else{
        modal.style.height = '0px';
        modal.style.visibility = 'hidden'
        document.body.style.overflow = '';
    }
})

right_modal_open.addEventListener('click', function(){

    let modal = document.querySelector('#search-modal-right-main');
    modal.classList.toggle('active');

    if(modal.classList.contains('active')){
        modal.style.height = '100%'
        modal.style.visibility = 'visible'
        document.body.style.overflow = 'hidden';   
    }
    else{
        modal.style.height = '0px';
        modal.style.visibility = 'hidden'
        document.body.style.overflow = '';
    }
})




let left_modal = document.querySelector('#search-modal-left-main');
let right_modal = document.querySelector('#search-modal-right-main');

window.addEventListener('resize', function(e){
    let left_modal = document.querySelector('#search-modal-left-main');
    let right_modal = document.querySelector('#search-modal-right-main');
    if(window.innerWidth > 1024){
        left_modal.classList.remove('active')
        left_modal.style.height = '0'
        left_modal.style.visibility = 'hidden'   
        right_modal.classList.remove('active')
        right_modal.style.height = '0'
        right_modal.style.visibility = 'hidden'
        document.body.style.overflow = '';   
    }else{
        left_search_dropdown.classList.remove('active')
        left_search_dropdown.style.height = 0 + 'px';
        right_search_dropdown.classList.remove('active')
        right_search_dropdown.style.height = 0 + 'px';
        document.body.style.overflow = '';
    }
  });


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropbtnicon.style.transform = "rotate(0deg)"
        dropdown.style.height = '0px';
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}