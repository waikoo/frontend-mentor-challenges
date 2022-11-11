const themeToggle = document.querySelector('.theme-con');
const lightIcon = document.querySelector('.theme-light');
const darkIcon = document.querySelector('.theme-dark');
const body = document.body;

function $(selector) {
	return document.querySelector(selector);
}

function handleThemeToggler() {
	if (body.classList.contains('dark-theme')) changeThemeTo('light');
	if (body.classList.contains('light-theme')) changeThemeTo('dark');
}

// handleThemeToggler();

function changeBgOfElementTo(element, color) {
	// light theme
	let localColor;
	if (color === 'alabaster') localColor = 'hsl(0, 0%, 98%)';
	if (color === 'mischka') localColor = 'hsl(233, 11%, 84%)';
	if (color === 'manatee') localColor = 'hsl(236, 9%, 61%)';
	if (color === 'mulledwine') localColor = 'hsl(235, 19%, 35%)';

	// both
	if (color === 'snuff') localColor = 'hsl(236, 33%, 92%)';

	//dark theme
	if (color === 'periwinkle') localColor = 'hsl(234, 39%, 85%)';
	if (color === 'waterloo') localColor = 'hsl(234, 11%, 52%)';
	if (color === 'trout') localColor = 'hsl(233, 14%, 35%)';
	if (color === 'brightgray') localColor = 'hsl(237, 14%, 26%)';
	if (color === 'ebonyclay') localColor = 'hsl(235, 24%, 19%)';
	if (color === 'cinder') localColor = 'hsl(235, 21%, 11%)';
	$(element).style.backgroundColor = localColor;
}
function changeColorOfElementTo(element, color) {
	// light theme
	let localColor;
	if (color === 'white') localColor = 'hsl(0, 0%, 100%)';
	if (color === 'alabaster') localColor = 'hsl(0, 0%, 98%)';
	if (color === 'mischka') localColor = 'hsl(233, 11%, 84%)';
	if (color === 'manatee') localColor = 'hsl(236, 9%, 61%)';
	if (color === 'mulledwine') localColor = 'hsl(235, 19%, 35%)';

	// both
	if (color === 'snuff') localColor = 'hsl(236, 33%, 92%)';

	//dark theme
	if (color === 'periwinkle') localColor = 'hsl(234, 39%, 85%)';
	if (color === 'waterloo') localColor = 'hsl(234, 11%, 52%)';
	if (color === 'trout') localColor = 'hsl(233, 14%, 35%)';
	if (color === 'brightgray') localColor = 'hsl(237, 14%, 26%)';
	if (color === 'ebonyclay') localColor = 'hsl(235, 24%, 19%)';
	if (color === 'cinder') localColor = 'hsl(235, 21%, 11%)';
	// console.log($(element));

	$(element).style.color = localColor;
}

function makeElementsLight() {
	changeBgOfElementTo('main', 'alabaster');
	changeBgOfElementTo('.new-todo', 'alabaster');
	changeBgOfElementTo('.new-con', 'alabaster');
	changeBgOfElementTo('.show', 'alabaster');
	changeBgOfElementTo('body', 'snuff');
	changeColorOfElementTo('main', 'mulledwine');
	changeColorOfElementTo('.new-todo', 'mulledwine');

	$('.new-todo').classList.add('mulledwine');
	$('.new-todo').classList.remove('periwinkle');

	changeColorOfElementTo('.summary', 'manatee');
	changeColorOfElementTo('.show span', 'manatee');
	changeColorOfElementTo('.drag-n-drop-con', 'manatee');
	changeColorOfElementTo('.done-todo-text', 'mischka');
	changeColorOfElementTo('.logo', 'white');
}

function makeElementsDark() {
	changeBgOfElementTo('main', 'ebonyclay');
	changeBgOfElementTo('.new-todo', 'ebonyclay');
	changeBgOfElementTo('.new-con', 'ebonyclay');
	changeBgOfElementTo('.show', 'ebonyclay');
	changeBgOfElementTo('body', 'cinder');
	changeColorOfElementTo('main', 'periwinkle');
	changeColorOfElementTo('.new-todo', 'periwinkle');

	$('.new-todo').classList.remove('mulledwine');
	$('.new-todo').classList.add('periwinkle');

	changeColorOfElementTo('.summary', 'trout');
	changeColorOfElementTo('.done-todo-text', 'trout');
	changeColorOfElementTo('.drag-n-drop-con', 'trout');
	changeColorOfElementTo('.show span', 'waterloo');
	changeColorOfElementTo('.logo', 'white');
	changeColorOfElementTo('body', 'cinder');
}

function showLightIcon() {
	lightIcon.style.display = 'block';
	darkIcon.style.display = 'none';
}

function showDarkIcon() {
	lightIcon.style.display = 'none';
	darkIcon.style.display = 'block';
}

function changeThemeTo(lightOrDark) {
	if (lightOrDark === 'light') {
		showDarkIcon();
		changeBackgroundImage();
		console.log('light is chosen');

		body.className = 'light-theme';
		makeElementsLight();
	}
	if (lightOrDark === 'dark') {
		showLightIcon();
		changeBackgroundImage();
		console.log('dark is chosen');
		body.className = 'dark-theme';
		makeElementsDark();
	}
}

function changeBackgroundImage() {
	if (isDesktopViewport() && isDarkMode()) setBackgroundPhoto('desktop', 'dark');
	if (isDesktopViewport() && !isDarkMode()) setBackgroundPhoto('desktop', 'light');
	if (!isDesktopViewport() && isDarkMode()) setBackgroundPhoto('mobile', 'dark');
	if (!isDesktopViewport() && !isDarkMode()) setBackgroundPhoto('mobile', 'light');
}

function isDesktopViewport() {
	const mediaQuery = window.matchMedia('(min-width: 62em)');
	return mediaQuery.matches;
}

function isDarkMode() {
	return body.classList.contains('dark-theme');
}

function setBackgroundPhoto(desktopOrMobile, lightOrDark) {
	$('header img').src = `assets/images/bg-${desktopOrMobile}-${lightOrDark}.jpg`;
}

themeToggle.addEventListener('click', handleThemeToggler);
