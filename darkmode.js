var darkModePref = localStorage['darkModePreference'] || 'light'
var root = document.querySelector(':root')
var css = getComputedStyle(root)
function toggleDarkMode() {
    if (darkModePref == 'light') {
        //set darkmode
        localStorage['darkModePreference'] = 'dark'
            root.style.setProperty('--bg-color', 'black')
            root.style.setProperty('--font-color', 'white')
    } else if (darkModePref == 'dark') {
        //set light mode
        localStorage['darkModePreference'] = 'light'
            var element = document.body;
            element.classList.toggle("darkmode");
            root.style.setProperty('--bg-color', 'white')
            root.style.setProperty('--font-color', 'black')
    }
}

function getPref() {
    if (darkModePref == 'dark') {
        var element = document.body;
            
        root.style.setProperty('--bg-color', 'black')
        root.style.setProperty('--font-color', 'white')
    }
}