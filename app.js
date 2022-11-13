const themeToggle = document.querySelector('.theme-con');
const lightIcon = document.querySelector('.theme-light');
const darkIcon = document.querySelector('.theme-dark');
const body = document.body;
const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
let currentTheme = null;

function $(selector) {
	return document.querySelector(selector);
}

function setPreferredColorScheme() {
	darkTheme.matches ? changeThemeTo('dark') : changeThemeTo('light');
}

setPreferredColorScheme();

function handleThemeToggler() {
	currentTheme === 'light' ? changeThemeTo('dark') : changeThemeTo('light');
}

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

function changeBorderBottomOfElementsTo(element, color) {
	let innerColor;

	if (color === 'mischka') innerColor = 'hsl(233, 11%, 84%)';
	if (color === 'brightgray') innerColor = 'hsl(237, 14%, 26%)';

	document.querySelectorAll(`${element}`).forEach(el => {
		el.style.borderBottom = `1px solid ${innerColor}`;
	});
}

function changeBorderOfElementTo(element, color) {
	let innerColor;

	if (color === 'mischka') innerColor = 'hsl(233, 11%, 84%)';
	if (color === 'brightgray') innerColor = 'hsl(237, 14%, 26%)';

	document.querySelectorAll(`${element}`).forEach(el => {
		el.style.border = `1px solid ${innerColor}`;
	});
}

function makeElementsLight() {
	currentTheme = 'light';

	changeBgOfElementTo('main', 'alabaster');
	changeBgOfElementTo('.new-todo', 'alabaster');
	changeBgOfElementTo('.new-con', 'alabaster');
	changeBgOfElementTo('.show', 'alabaster');
	changeBgOfElementTo('body', 'snuff');
	changeColorOfElementTo('main', 'mulledwine');
	changeColorOfElementTo('.new-todo', 'mulledwine');

	$('.new-todo').style.setProperty('--c', 'hsl(236, 9%, 61%)');

	changeColorOfElementTo('.summary', 'manatee');
	changeColorOfElementTo('.show span', 'manatee');
	changeColorOfElementTo('.drag-n-drop-con', 'manatee');
	changeColorOfElementTo('.logo', 'white');
	changeColorOfElementTo('.done-todo-text', 'mischka');

	changeBorderBottomOfElementsTo('li', 'mischka');
	changeBorderOfElementTo('.empty-circle', 'mischka');
}

function makeElementsDark() {
	currentTheme = 'dark';

	changeBgOfElementTo('main', 'ebonyclay');
	changeBgOfElementTo('.new-todo', 'ebonyclay');
	changeBgOfElementTo('.new-con', 'ebonyclay');
	changeBgOfElementTo('.show', 'ebonyclay');
	changeBgOfElementTo('body', 'cinder');
	changeColorOfElementTo('main', 'periwinkle');
	changeColorOfElementTo('.new-todo', 'periwinkle');

	$('.new-todo').style.setProperty('--c', 'hsl(237, 14%, 26%)');

	changeColorOfElementTo('.summary', 'trout');
	changeColorOfElementTo('.done-todo-text', 'trout');
	changeColorOfElementTo('.drag-n-drop-con', 'trout');
	changeColorOfElementTo('.show span', 'waterloo');
	changeColorOfElementTo('.logo', 'white');
	changeColorOfElementTo('body', 'cinder');

	changeBorderOfElementTo('.empty-circle', 'brightgray');
	changeBorderBottomOfElementsTo('li', 'brightgray');
}

function showSun() {
	lightIcon.style.display = 'block';
	darkIcon.style.display = 'none';
}

function showMoon() {
	lightIcon.style.display = 'none';
	darkIcon.style.display = 'block';
}

function changeThemeTo(lightOrDark) {
	if (lightOrDark === 'light') {
		showMoon();
		makeElementsLight();
		changeBackgroundImage();
	}
	if (lightOrDark === 'dark') {
		showSun();
		makeElementsDark();
		changeBackgroundImage();
	}
}

function changeBackgroundImage() {
	// if (isDesktopViewport() && isThemeDark()) {
	// 	setBackgroundPhoto('desktop', 'dark');
	// 	console.log('1');
	// }
	// if (isDesktopViewport() && !isThemeDark()) {
	// 	setBackgroundPhoto('desktop', 'light');
	// 	console.log('2');
	// }
	//

	// works in mobile view
	if (!isDesktopViewport() && isThemeDark()) {
		setBackgroundPhoto('mobile', 'dark');
	}
	if (!isDesktopViewport() && !isThemeDark()) {
		setBackgroundPhoto('mobile', 'light');
	}
}

function isDesktopViewport() {
	const mediaQuery = window.matchMedia('(min-width: 62em)');

	return mediaQuery.matches;
}

function isThemeDark() {
	return currentTheme === 'dark';
}

function setBackgroundPhoto(desktopOrMobile, lightOrDark) {
	$('header img').src = `assets/images/bg-${desktopOrMobile}-${lightOrDark}.jpg`;
}

themeToggle.addEventListener('click', handleThemeToggler, false);
window.addEventListener('change', setPreferredColorScheme);
