const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

function toggleHamburgerMenu() {
	nav.classList.toggle('invisible');
	hamburger.classList.toggle('hamburger-fade');
}

function displayDesktopNav(e) {
	if (e.matches) {
		nav.classList.remove('invisible');
		// hamburger.classList.add('invisible');
	} else {
		nav.classList.add('invisible');
		// hamburger.classList.remove('invisible');
	}
}

hamburger.addEventListener('click', toggleHamburgerMenu);

const mediaQuery = window.matchMedia('(min-width: 62em)');
mediaQuery.addEventListener('change', displayDesktopNav);
