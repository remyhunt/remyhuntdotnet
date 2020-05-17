var toggle = document.getElementById('toggle');
var html = document.getElementsByTagName('html')[0];
var darkModeLabel = document.getElementsByClassName('dark-mode-label')[0];
darkModeLabel.innerHTML = '🌙 psst? dark mode? '
var isDark = false;

var today = new Date();
var hours = today.getHours();

console.log(hours);

// window.setTimeOut = (alert('hi'), 5000);
setTimeout(function() {
    hours > 11 && hours < 13 ? setDarkMode(true) : setDarkMode(false);
}, 1000);



toggle.addEventListener('change', e => {
	e.target.checked ? setDarkMode(true): setDarkMode(false); 
});


function setDarkMode(isDark){
	if(isDark) {
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