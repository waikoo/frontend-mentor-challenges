const themeToggle = document.querySelector('.theme-con');
const lightIcon = document.querySelector('.theme-light');
const darkIcon = document.querySelector('.theme-dark');
const body = document.body;
const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
let currentTheme = null;

const tabs = document.querySelectorAll('.tabs');
const form = document.querySelector('form');
const todoText = document.querySelector('input');
const todosContainer = document.querySelector('.todos-con');

function $(selector) {
	return document.querySelector(selector);
}

function setPreferredColorScheme() {
	darkTheme.matches ? changeThemeTo('dark') : changeThemeTo('light');
}

function handleThemeToggler() {
	currentTheme === 'light' ? changeThemeTo('dark') : changeThemeTo('light');
}

function setBgOfElementTo(element, color) {
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

function setColorOfElementTo(element, color, multiple = false) {
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

	multiple
		? document.querySelectorAll(`${element}`).forEach(el => {
				el.style.color = localColor;
		  })
		: ($(element).style.color = localColor);
}

function setBorderBottomOfElementsTo(element, color) {
	let innerColor;

	if (color === 'mischka') innerColor = 'hsl(233, 11%, 84%)';
	if (color === 'brightgray') innerColor = 'hsl(237, 14%, 26%)';

	document.querySelectorAll(`${element}`).forEach(el => {
		el.style.borderBottom = `1px solid ${innerColor}`;
	});
}

function setBorderOfElementTo(element, color) {
	let innerColor;

	if (color === 'mischka') innerColor = 'hsl(233, 11%, 84%)';
	if (color === 'brightgray') innerColor = 'hsl(237, 14%, 26%)';

	document.querySelectorAll(`${element}`).forEach(el => {
		el.style.border = `1px solid ${innerColor}`;
	});
}

function makeElementsLight() {
	currentTheme = 'light';

	setBgOfElementTo('main', 'alabaster');
	setBgOfElementTo('.new-todo', 'alabaster');
	setBgOfElementTo('.new-con', 'alabaster');
	setBgOfElementTo('.show', 'alabaster');
	setBgOfElementTo('body', 'snuff');
	setColorOfElementTo('main', 'mulledwine');
	setColorOfElementTo('.new-todo', 'mulledwine');

	$('.new-todo').style.setProperty('--c', 'hsl(236, 9%, 61%)');

	setColorOfElementTo('.summary', 'manatee');
	setColorOfElementTo('.show span', 'manatee');
	setColorOfElementTo('.drag-n-drop-con', 'manatee');
	setColorOfElementTo('.logo', 'white');
	setColorOfElementTo('.done-todo-text', 'mischka');
	setColorOfElementTo('.tabs', 'waterloo', true);

	setBorderBottomOfElementsTo('li', 'mischka');
	setBorderOfElementTo('.empty-circle', 'mischka');
}

function makeElementsDark() {
	currentTheme = 'dark';

	setBgOfElementTo('main', 'ebonyclay');
	setBgOfElementTo('.new-todo', 'ebonyclay');
	setBgOfElementTo('.new-con', 'ebonyclay');
	setBgOfElementTo('.show', 'ebonyclay');
	setBgOfElementTo('body', 'cinder');
	setColorOfElementTo('main', 'periwinkle');
	setColorOfElementTo('.new-todo', 'periwinkle');

	$('.new-todo').style.setProperty('--c', 'hsl(237, 14%, 26%)');

	setColorOfElementTo('.summary', 'trout');
	setColorOfElementTo('.done-todo-text', 'trout');
	setColorOfElementTo('.drag-n-drop-con', 'trout');
	setColorOfElementTo('.show span', 'waterloo');
	setColorOfElementTo('.logo', 'white');
	setColorOfElementTo('body', 'cinder');

	setBorderOfElementTo('.empty-circle', 'brightgray');
	setBorderBottomOfElementsTo('li', 'brightgray');
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

function handleTabSelection(e) {
	tabs.forEach(tab => {
		if (tab === e.target) {
			// tab.classList.add('selected');
			tab.style.color = 'hsl(220, 98%, 61%)';
		} else {
			tab.style.color = 'rgb(119, 122, 146)';
			// tab.classList.remove('selected');
		}
	});
}

function createNewTodo(e) {
	e.preventDefault();
	// new li gets created with $('input').value as text content
	const todoText = $('input').value;
	todosContainer.insertBefore(newLi(todoText), todosContainer.firstChild);
}

function newLi(text) {
	const li = document.createElement('li');
	li.className = 'undone-todo-text';

	let color;
	currentTheme === 'light' ? (color = 'rgb(210, 211, 219)') : (color = 'rgb(57, 58, 76)');
	const circle = `
  width: 1.3rem;
	height: 1.3rem;
	border-radius: 50%;
  border: 1px solid ${color};
  `;
	li.style.borderBottom = `1px solid ${color}`;
	li.innerHTML = `
          <div class="icon-text">
            <div class="empty-circle" style="${circle}"></div>
            <span class="undone-todo-text">${text}</span>
          </div>
          <div class="delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            ><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
          </div>
  `;
	return li;
}

setPreferredColorScheme();

themeToggle.addEventListener('click', handleThemeToggler, false);
window.addEventListener('change', setPreferredColorScheme);

tabs.forEach(tab => tab.addEventListener('click', handleTabSelection));
form.addEventListener('submit', createNewTodo);
