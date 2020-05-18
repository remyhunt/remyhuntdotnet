var toggle = document.getElementById('toggle');
var html = document.getElementsByTagName('html')[0];
var darkModeLabel = document.getElementsByClassName('dark-mode-label')[0];

darkModeLabel.innerHTML = '🌙 psst? dark mode? '

var today = new Date();
var hours = today.getHours();


// How dark mode is initiailly determined 
setTimeout(function() {
	if(window.matchMedia) {
		if(window.matchMedia('(prefers-color-scheme: dark)').matches){
			darkModeLabel.innerHTML = '(dark mode detected) 💡 lights on?';
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	} 
	else {
		if(hours > 20 || hours < 8){ 
			setDarkMode(true) 
		} 
		else { 
			setDarkMode(false);
		};
	}
}, 800);

// Listener for a change in checkbox
toggle.addEventListener('change', (e) => {
	e.target.checked ? setDarkMode(true): setDarkMode(false); 
});


// Listener for a change in Media Query (from system UI)
window.matchMedia('(prefers-color-scheme: dark)').addListener( (e) => {
	e.matches ? setDarkMode(true) : setDarkMode(false);
});


function setDarkMode(isDark){
	if(isDark == true) {
		html.classList.add('darkmode');
		toggle.checked = true;
		darkModeLabel.innerHTML = '💡 turn the lights back on?';
	} 
	else {
		html.classList.remove('darkmode');
		toggle.checked = false;
		darkModeLabel.innerHTML = '🌙 psst? dark mode? '
	}
}