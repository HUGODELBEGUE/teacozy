// switch theme
function switchTheme() {
    const url = document.getElementById('switchThemeLink');
    const switchBtn = document.querySelectorAll('#switchBtn > span').forEach((el) => {
        el.addEventListener('click', () => {
            if (el.id === 'btn1') {
                url.setAttribute("href", `./assets/css/default_theme.css`);
            } else if (el.id === 'btn2') {
                url.setAttribute("href", `./assets/css/gray_theme.css`);
            } else {
                url.setAttribute("href", `./assets/css/red_theme.css`);
            }
        })
    });
}
switchTheme();
