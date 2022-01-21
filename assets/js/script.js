function theme () {
    let darkMode = document.querySelector('#dark-mode');
    // adiciona a classe 'dark-mode' ao html
    document.documentElement.classList.toggle('dark-mode');
    
    
    if(darkMode.value == 'Modo Escuro') {
        darkMode.innerHTML = 'Modo Light';
        document.getElementById('dark-mode').value = 'Modo Light';
    } else {
        darkMode.innerHTML = 'Modo Escuro';
        document.getElementById('dark-mode').value = 'Modo Escuro';
    }
       
}

function exibirMenu (element) {
    let menu = document.getElementById('menu');

    if (menu.style.display == "none") {
        menu.style.display ='block';
    } else {
        menu.style.display = 'none';
    }
}