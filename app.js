const shareBtn = document.querySelector('.share-con');
const shareBtnDark = document.querySelector('.share-con-dark');
const sharingOptions = document.querySelector('.sharing-options');
const sharingCon = document.querySelector('.sharing-con');
const articleWriter = document.querySelector('.article-writer');

const shareBtnHandle = event => {
	const mq = window.matchMedia('(min-width: 1440px)');
	if (mq.matches) {
		// ! above 1440px
		sharingOptions.classList.add('desktop-share');
		sharingCon.classList.add('desktop-share-grid');
		console.log(sharingOptions);
	} else {
		// ! below 1440px
		shareBtn.style.background = 'hsl(214, 17%, 51%)';
		shareBtn.style.display = 'flex';
		shareBtn.style.position = 'absolute';
		shareBtn.style.bottom = 0;
		shareBtnDark.style.display = 'grid';
		sharingCon.style.display = 'grid';
		sharingOptions.style.display = 'flex';
		articleWriter.style.display = 'none';
	}
};

shareBtn.addEventListener('click', shareBtnHandle);
