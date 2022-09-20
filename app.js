const unreadNotifications = document.querySelectorAll('.active');
const unreadIcon = document.querySelectorAll('.unread-icon');
const markAsRead = document.querySelector('.header-mark-as');
const unreadNotificationNumber = document.querySelector('.header-number');

function markAllAsRead() {
	unreadNotifications.forEach(notification => {
		unreadIcon.forEach(icon => {
			notification.classList.remove('active');
			icon.classList.add('invisible');
		});
	});
	unreadNotificationNumber.classList.add('invisible');
}

markAsRead.addEventListener('click', markAllAsRead);
