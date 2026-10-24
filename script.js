const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.innerHTML = open ? 'CLOSE <b>×</b>' : 'MENU <b>＋</b>';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = 'MENU <b>＋</b>';
}));
