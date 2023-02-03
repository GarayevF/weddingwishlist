let browse_button = document.querySelector('#Notfound .notfound-div .notfound');
let notfound = document.querySelector('#Notfound')

let all_tab_buttons = document.querySelectorAll('#All-tab .all-tab-div button');

all_tab_buttons.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        let active_tab = document.querySelector('#All-tab .all-tab-div .active');
        active_tab.classList.remove('active');
        item.classList.add('active');

        let active_content = document.querySelector('#Tab-divs .element.active');
        active_content.classList.remove('active');
        document.querySelector(`#Tab-divs [data-id="${item.getAttribute('data-id')}"]`).classList.add('active');

        if (item.getAttribute('data-id') === 'all') {
            browse_button.style.display = 'none'
        }else{
            notfound.classList.add('notfound-active')
            browse_button.style.display = 'inline-block';
            browse_button.innerHTML = item.innerHTML + ' ' + 'axtar';
        }
    })
})

let all_geyim_buttons = document.querySelectorAll('#Tab-divs .dress.element .geyim-tab-div button');

all_geyim_buttons.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        let active_tab = document.querySelector('#Tab-divs .dress.element .geyim-tab-div .active');
        active_tab.classList.remove('active');
        item.classList.add('active');


    })
})