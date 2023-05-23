function $(selector) {
	return document.querySelector(selector);
}

function featureDropdown(e) {
	if (e.target === $('.features-con') || $('.features')) {
		$('.features-ul-con').classList.toggle('invisible');
		if (!$('.features-ul-con').classList.contains('invisible')) {
			this.lastElementChild.setAttribute(
				'src',
				'assets/images/icon-arrow-up.svg'
			);
		} else {
			this.lastElementChild.setAttribute(
				'src',
				'assets/images/icon-arrow-down.svg'
			);
		}
		if (!$('.company-ul-con').classList.contains('invisible')) {
			$('.company-ul-con').classList.add('invisible');
		}
	}
}

function companyDropdown(e) {
	if (e.target === $('.company-con') || $('.company')) {
		$('.company-ul-con').classList.toggle('invisible');
		if (!$('.company-ul-con').classList.contains('invisible')) {
			this.lastElementChild.setAttribute(
				'src',
				'assets/images/icon-arrow-up.svg'
			);
		} else {
			this.lastElementChild.setAttribute(
				'src',
				'assets/images/icon-arrow-down.svg'
			);
		}
		if (!$('.features-ul-con').classList.contains('invisible')) {
			$('.features-ul-con').classList.add('invisible');
		}
	}
}

function hamburgerToggle() {
	if (this === $('.hamburger')) {
		$('.main-nav').classList.toggle('invisible'); // makes main-nav visible on first run
		if (!$('.main-nav').classList.contains('invisible')) {
			// runs on first run
			$('.main-nav').classList.toggle('darken');
			this.setAttribute('src', 'assets/images/icon-close-menu.svg');
			$('.hamburger').classList.toggle('x-style');
		} else {
			this.setAttribute('src', 'assets/images/icon-menu.svg');
			$('.main-nav').classList.toggle('darken');
			$('.hamburger').classList.toggle('x-style');
		}
	}
}

$('.features-con').addEventListener('click', featureDropdown);
$('.company-con').addEventListener('click', companyDropdown);
$('.hamburger').addEventListener('click', hamburgerToggle);

function handleMediaQuery(e) {
	if (e.matches) {
		$('.main-nav').classList.remove('invisible');
		$('.main-nav').classList.remove('darken');
		$('.nav-con').insertBefore($('.main-nav'), $('.hamburger'));
		$('.nav-con').appendChild($('.nav-access'));
	} else {
		$('.main-nav').appendChild($('.nav-access'));
		$('header').appendChild($('.main-nav'));
	}
}

const mediaQuery = window.matchMedia('(min-width: 550px)');
mediaQuery.addEventListener('change', handleMediaQuery);
