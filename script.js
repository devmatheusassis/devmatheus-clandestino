const botaoMenu = document.querySelector('.icone_hamburguer')
const menu1 = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => {
    menu1.classList.toggle('menu_lateral-ativo')
});

const botaoNotificacao = document.querySelector('.icone_notificacao')
const menu2 = document.querySelector('.menu_notificacao')

botaoNotificacao.addEventListener('click', () => {
    menu2.classList.toggle('menu_notificacao-ativo')
});