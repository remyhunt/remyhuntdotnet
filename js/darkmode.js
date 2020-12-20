var toggle = document.getElementById('toggle');
var html = document.getElementsByTagName('html')[0];
// var darkModeLabel = document.getElementsByClassName('dark-mode-label')[0];
// darkModeLabel.innerHTML = '🌙 psst? dark mode? ';

var today = new Date();
var hours = today.getHours();



if(sessionStorage.getItem('isDarkMode') != null) {
	if(sessionStorage.getItem('isDarkMode') == 'true') {
			setDarkMode(true);
		}else {
			setDarkMode(false);
		}
	} else {
		setTimeout(function() {
			if(window.matchMedia) {

				if(window.matchMedia('(prefers-color-scheme: dark)').matches){
					setDarkMode(true, true);
				} else {
					setDarkMode(false, true);
				}
			} 
			else {
				if(hours > 20 || hours < 8){ 
					setDarkMode(true, true) 
				} 
				else { 
					setDarkMode(false, true);
				};
			}
		}, 800);
	}


// Listener for a change in checkbox
toggle.addEventListener('change', (e) => {
	e.target.checked ? setDarkMode(true, true): setDarkMode(false, true); 
});


// // Listener for a change in Media Query (from system UI)
window.matchMedia('(prefers-color-scheme: dark)').addListener( (e) => {
	e.matches ? setDarkMode(true, true) : setDarkMode(false, true);
});





function setDarkMode(isDark, transition){
	if(isDark == true) {
		toggle.checked = true;
		html.classList.add('darkmode'); 
		if(transition) {
			html.classList.add('darkmode-transition'); 
			html.classList.remove('lightmode-transition'); 
		}
		
		sessionStorage.setItem('isDarkMode', 'true');
		
		// darkModeLabel.innerHTML = '💡 turn the lights back on?';
	} 
	else {
		toggle.checked = false;
		sessionStorage.setItem('isDarkMode', 'false');
		if(transition){
			html.classList.add('lightmode-transition'); 
			html.classList.remove('darkmode-transition'); 
		}
		html.classList.remove('darkmode');
		// darkModeLabel.innerHTML = '🌙 psst? dark mode? '
	}
	
}