
function menuEstado() {
    document.querySelectorAll('.modal').forEach(menuEstado => {
        if (menuEstado.classList.contains('open-menu')){
            closeMenu(menuEstado);
        } else {
            openMenu(menuEstado);
        }
    });
}
    
function openMenu(menuEstado) {
    menuEstado.classList.add('open-menu');
};
    
function closeMenu(menuEstado) {
    menuEstado.classList.remove('open-menu');
};

