// switch theme
function switchTheme() {
    const url = document.getElementById('switchThemeLink');
    document.querySelectorAll('#switchBtn > span').forEach((el) => {
        el.addEventListener('click', () => {
            if (el.id === 'btn1') {
                url.setAttribute("href", `./assets/css/themes/default_theme.css`);
            } else if (el.id === 'btn2') {
                url.setAttribute("href", `./assets/css/themes/gray_theme.css`);
            } else if (el.id === 'btn3') {
                url.setAttribute("href", `./assets/css/themes/red_theme.css`);
            } else {
                url.setAttribute("href", `./assets/css/themes/yellow_theme.css`);
            }
        })
    });
}
switchTheme();
