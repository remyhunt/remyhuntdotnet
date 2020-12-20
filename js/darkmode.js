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
	}


// Listener for a change in checkbox
toggle.addEventListener('change', (e) => {
	e.target.checked ? setDarkMode(true, true): setDarkMode(false); 
});


// // Listener for a change in Media Query (from system UI)
window.matchMedia('(prefers-color-scheme: dark)').addListener( (e) => {
	e.matches ? setDarkMode(true) : setDarkMode(false);
});





function setDarkMode(isDark, transition){
	if(isDark == true) {
		html.classList.add('darkmode'); 
		if(transition) {
			html.classList.add('darkmode-transition'); 
		}
		sessionStorage.setItem('isDarkMode', 'true');
		
		toggle.checked = true;
		// darkModeLabel.innerHTML = '💡 turn the lights back on?';
	} 
	else {
		sessionStorage.setItem('isDarkMode', 'false');
		html.classList.remove('darkmode');
		toggle.checked = false;
		// darkModeLabel.innerHTML = '🌙 psst? dark mode? '
	}
	
}