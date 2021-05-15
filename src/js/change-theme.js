const bodyElement = document.querySelector('body');
const checkboxElement = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightThemeFunc = () => {
    bodyElement.classList.add(Theme.LIGHT);
    bodyElement.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
};

const darkThemeFunc = () => {
    bodyElement.classList.add(Theme.DARK);
    bodyElement.classList.remove(Theme.LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.DARK);
};

const changeThemeFunc = () => {
    if (!checkboxElement.checked) {
        lightThemeFunc();
    } else {
        darkThemeFunc();
    }
};

checkboxElement.addEventListener('change', changeThemeFunc);

if (localStorage.getItem('theme') === Theme.DARK) {
    checkboxElement.checked = 'true';
  darkThemeFunc();
}