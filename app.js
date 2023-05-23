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

let todoTotal = 0;
let todoId = 0;
// let allDeleteButtons = document.querySelectorAll('.delete');

const clearAllTodosButton = $('.clear');

let allTodos = [];

const SELECTED_BLUE = 'hsl(220, 98%, 61%)';
const UNSELECTED_GREY = 'rgb(119, 122, 146)';

let sourceTodo;

function $(selector) {
	return document.querySelector(selector);
}
function $$(selector) {
	return document.querySelectorAll(selector);
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

	$('.new-todo').style.setProperty('--c', 'hsl(233, 11%, 84%)');

	setColorOfElementTo('.summary', 'manatee');
	setColorOfElementTo('.show span', 'manatee');
	setColorOfElementTo('.drag-n-drop-con', 'manatee');
	setColorOfElementTo('.logo', 'white');
	// ! ! ! ---> DIES ZWEI
	// ! :
	// ! :
	// ! :
	// setColorOfElementTo('.done-todo-text', 'mischka');
	// setColorOfElementTo('.undone-todo-text', 'mulledwine');
	// ! ^
	// ! ^
	// ! ^
	// ! ! ! ---> DIES ZWEI
	setColorOfElementTo('.tabs', 'waterloo', true);

	setBorderBottomOfElementsTo('li', 'mischka');
	setBorderOfElementTo('.empty-circle', 'mischka');
	setBorderOfElementTo('.circle', 'mischka');
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
	// setColorOfElementTo('.done-todo-text', 'trout');
	// setColorOfElementTo('.undone-todo-text', 'trout');
	setColorOfElementTo('.drag-n-drop-con', 'trout');
	setColorOfElementTo('.show span', 'waterloo');
	setColorOfElementTo('.logo', 'white');
	setColorOfElementTo('body', 'cinder');

	setBorderOfElementTo('.empty-circle', 'brightgray');
	setBorderOfElementTo('.circle', 'brightgray');
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
	$('.all').click();
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
			tab.style.color = SELECTED_BLUE;
			showTodosController(e.target.textContent);
		} else {
			tab.style.color = UNSELECTED_GREY;
		}
	});
}

function showTodosController(tabName) {
	switch (tabName) {
		case 'Active':
			showActive();
			break;
		case 'Completed':
			displayTodosFromLocalStorage();
			showCompleted();
			break;

		default:
			// showAll()
			displayTodosFromLocalStorage();
			break;
	}
}

function createNewTodo(e) {
	e.preventDefault();
	const todoText = $('input').value;
	$('input').value = '';
	if (!todoText) return;
	todosContainer.insertBefore(createNewLi(todoText), todosContainer.firstChild);

	const todosCount = $('.todos-con').children.length;

	addTodoEventListeners();
	updateUICounter(todosCount);

	if (todosCount === 0) setNewTodoLocally(todosCount + 1, todoText);
	if (todosCount > 0) setNewTodoLocally(todosCount, todoText);

	saveTodosToLocalStorage(allTodos);
}

function addTodoEventListeners() {
	$('li').addEventListener('dragstart', onDragStart);
	$('li').addEventListener('dragenter', onDragEnter);
	$('li').addEventListener('dragover', onDragOver);
	$('li').addEventListener('drop', onDrop);
	$('li').addEventListener('dragend', onDragEnd);
	$('li').addEventListener('mouseenter', onMouseEnter);
	$('.delete').addEventListener('click', deleteTodo);
	// $('.empty-circle').addEventListener('click', toggleTodoState);
	// $('.checked-circle').addEventListener('click', toggleTodoState);
	$('.check-status').addEventListener('click', toggleTodoState);
}

function createNewLi(text) {
	todoTotal++;
	todoId++;
	const li = document.createElement('li');
	li.className = `undone-todo ${todoId}`;
	li.draggable = true;
	let color = currentTheme === 'light' ? 'rgb(210, 211, 219)' : 'rgb(57, 58, 76)';
	const circle = `
  width: 1.3rem;
	height: 1.3rem;
	border-radius: 50%;
  border: 1px solid ${color};
  `;
	li.style.borderBottom = `1px solid ${color}`;
	li.innerHTML = `
          <div class="todo-icon-text">
            <div class="check-status">
              <div class="empty-circle" style="${circle}"></div>
              <div class="checked-circle" style="display: none">
                <img src="assets/images/icon-check.svg" alt>
              </div>
            </div>
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
	li.dataset.isCompleted = 'false';

	return li;
}

function deleteFromUI(todo) {
	todosContainer.removeChild(todo);
	todoTotal--;
	todoId--;
}

function deleteFromLocalStorage(todo) {
	const todoText = todo.firstElementChild.lastElementChild.textContent;
	allTodos = allTodos.filter(todo => todo.text !== todoText);
	saveTodosToLocalStorage(allTodos);
}

function deleteTodo(e) {
	$$('.delete').forEach(deleteButton => {
		if (deleteButton === e.currentTarget) {
			const todo = deleteButton.closest('li');
			deleteFromUI(todo);
			deleteFromLocalStorage(todo);
			updateUICounter();
		}
	});
	updateLocalTodos();
	saveTodosToLocalStorage(allTodos);
}

function updateLocalTodoCompletion(e) {
	const li = e.currentTarget.closest('li');
	const isTodoCompleted = Boolean(li.dataset.isCompleted);

	let idd = li.className.split(' ')[1];
	let id = Number(idd[idd.length - 1]);

	allTodos.forEach(todo => {
		// console.log('bingo');
		// console.log(todo.id);
		// console.log(id);
		if (todo.id === id) todo.isCompleted = isTodoCompleted;
		// console.log(todo);
	});
	saveTodosToLocalStorage(allTodos);
}

function toggleTodoState(e) {
	// console.warn(e.currentTarget); // check-status
	// console.warn(e.target); // empty-circle
	const todoText = e.currentTarget.parentElement.nextElementSibling;

	$$('.check-status').forEach(el => {
		if (el.closest('li') === e.target.closest('li')) {
			// ? doesn't do its job:
			// updateLocalTodoCompletion(e); // 1
			toggleTodoDataStatus(e); // 2 - ok

			// toggleUICheckmark(e); // 3 -
			addRemoveCheckmark(e);

			// ^--------------------->
			toggleTodoClass(todoText);
			toggleTodoColor(todoText);
		}
	});
	updateLocalTodos();
	saveTodosToLocalStorage(allTodos);
}

function addRemoveCheckmark(e) {
	const checkStatus = e.currentTarget;
	if (checkStatus.className === 'check-status') {
		e.currentTarget.children[0].style === 'none' ? addCheckmark(e) : removeCheckmark(e);
		console.log(checkStatus.children[0].style.display);
		// 1. empty
		// 2. checked
		console.log(checkStatus.children[1].style.display);
		console.log(checkStatus);
	}
}

function toggleTodoDataStatus(e) {
	// console.log('RAN');
	const li = e.target.closest('li');
	const completionStatus = e.currentTarget.parentElement.nextElementSibling.className.split('-')[0];
	// const id = li.className.split(' ')[1];

	li.dataset.isCompleted = completionStatus === 'done';

	// allTodos.forEach(todo => {
	// 	if (todo.id === Number(id[id.length - 1])) {
	// 		// console.error(completionStatus === 'done');
	// 		todo.isCompleted = li.dataset.isCompleted;
	// 	}
	// });
}

function toggleTodoClass(el) {
	el.className = el.className === 'undone-todo-text' ? 'done-todo-text' : 'undone-todo-text';
}

function toggleTodoColor(el) {
	// if (currentTheme === 'light') {
	// 	if ($('.done-todo-text')) setColorOfElementTo('done-todo-text', 'mischka');
	// 	if ($('.undone-todo-text')) setColorOfElementTo('undone-todo-text', 'mulledwine');
	// }
	if (el.className === 'done-todo-text') {
		el.style.color = currentTheme === 'light' ? 'rgb(210, 211, 219)' : 'rgb(77, 80, 102)';
	}

	if (el.className === 'undone-todo-text') {
		el.style.color = currentTheme === 'light' ? 'rgb(72, 75, 106)' : (localColor = 'rgb(202, 205, 232)');
	}
}

function addCheckmark(e) {
	const checkStatus = e.currentTarget;
	const emptyCircle = checkStatus.children[0];
	const checkedCircle = checkStatus.children[1];

	emptyCircle.style.display = 'none';
	checkedCircle.style.display = 'grid';
}

function removeCheckmark(e) {
	const checkStatus = e.currentTarget;
	const emptyCircle = checkStatus.children[0];
	const checkedCircle = checkStatus.children[1];

	emptyCircle.style.display = 'block';
	checkedCircle.style.display = 'none';
}

// function toggleUICheckmark(e) {
// 	const isCompleted = e.target.closest('li').dataset.isCompleted;
// 	const checkStatus = e.currentTarget;

// 	const emptyCircle = checkStatus.children[0];
// 	const checkedCircle = checkStatus.children[1];

// 	if (!isCompleted) {
// 		console.warn(emptyCircle.className);
// 		console.warn(checkedCircle.className);

// 		emptyCircle.style.display = 'none';
// 		checkedCircle.style.display = 'grid';
// 	}
// 	if (isCompleted) {
// 		checkedCircle.style.display = 'none';
// 		emptyCircle.style.display = '';
// 	}

// 	// if (e.currentTarget.children[0].className === 'empty-circle') {
// 	// 	emptyCircle.style.display = 'none';
// 	// 	checkedCircle.style.display = 'grid';
// 	// }
// 	// if (e.currentTarget.children[0].className === 'checked-circle') {
// 	// 	checkedCircle.style.display = 'none';
// 	// 	emptyCircle.style.display = 'block';
// 	// }
// }

function deleteCompletedTodos() {
	$$('li').forEach(todo => {
		if (todo.contains($('.done-todo-text'))) {
			todosContainer.removeChild(todo);
		}
	});

	allTodos = allTodos.filter(todo => todo.isCompleted === false);
	saveTodosToLocalStorage(allTodos);
	updateUICounter();
}

function updateUICounter(todosCount) {
	$('.number').textContent = todosCount;
}

function saveTodosToLocalStorage(array) {
	array.forEach(todo => {
		if (typeof todo.isCompleted !== 'boolean') throw new Error('NOT A BOOLEAN');
	});
	localStorage.setItem('savedTodos', JSON.stringify(array));
}

function setNewTodoLocally(id, text) {
	allTodos.push({
		id,
		text,
		isCompleted: false
	});
}

function getTodosFromLocalStorage() {
	const savedTodosObject = localStorage.getItem('savedTodos');
	if (!savedTodosObject) return;
	return JSON.parse(savedTodosObject);
}

function displayTodosFromLocalStorage() {
	const savedTodos = getTodosFromLocalStorage();
	if (!savedTodos) return;

	allTodos = savedTodos;

	todosContainer.innerHTML = allTodos
		.map(todo => {
			const done = todo.isCompleted;
			const text = todo.text;
			const id = todo.id;
			// createNewLi(todo.text)
			return `
        <li class="${done ? 'done' : 'undone'}-todo todo${id}" draggable="true" style="border-bottom: 1px solid rgb(210, 211, 219);" data-is-completed="${done}">
          <div class="todo-icon-text">
            <div class="check-status">
              <div class="empty-circle" style="border-radius: 50%;  display: ${done ? 'none' : 'block'}; ${done ? '' : 'border: 1px solid rgb(210, 211, 219)'}"></div>
              <div class="checked-circle" style="display: ${done ? 'grid' : 'none'}">
                <img src="assets/images/icon-check.svg" alt="">
              </div>
            </div>
            <span class="${done ? 'done' : 'undone'}-todo-text">${text}</span>
          </div>
          <div class="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path></svg>
          </div>
  </li>
  `;
		})
		.join('');

	document.querySelectorAll('li').forEach(li => {
		li.addEventListener('dragstart', onDragStart);
		li.addEventListener('dragenter', onDragEnter);
		li.addEventListener('dragover', onDragOver);
		li.addEventListener('drop', onDrop);
		li.addEventListener('dragend', onDragEnd);
		li.addEventListener('mouseenter', onMouseEnter);
	});

	$$('.delete').forEach(deleteButton => deleteButton.addEventListener('click', deleteTodo));

	$$('.check-status').forEach(status => status.addEventListener('click', toggleTodoState));
	// $$('.checked-circle').forEach(checkedCircle => checkedCircle.addEventListener('click', toggleTodoState));

	updateUICounter();
	updateLocalTodos();
	// ! :>>>>>>>>>>>>
}

themeToggle.addEventListener('click', handleThemeToggler, false);
window.addEventListener('change', setPreferredColorScheme);

tabs.forEach(tab => tab.addEventListener('click', handleTabSelection));
form.addEventListener('submit', createNewTodo);
clearAllTodosButton.addEventListener('click', deleteCompletedTodos);

setPreferredColorScheme();

function onDragStart(e) {
	this.style.opacity = 0.4;

	sourceTodo = this;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function onDragEnter(e) {
	$$('li').forEach(draggedOverTodo => {
		e.target === draggedOverTodo ? draggedOverTodo.classList.add('hint') : draggedOverTodo.classList.remove('hint');
	});
}

function onDragOver(e) {
	e.preventDefault();
}

function onDragEnd(e) {
	e.target.style.opacity = 1;

	updateLocalTodos();
	saveTodosToLocalStorage(allTodos);
}

function onDrop(e) {
	e.stopPropagation();

	this.classList.remove('hint');
	if (sourceTodo !== e.target) {
		$$('li').forEach(sourceTodoElement => {
			if (sourceTodoElement === sourceTodo) {
				sourceTodoElement.innerHTML = e.target.innerHTML;
				e.target.innerHTML = e.dataTransfer.getData('text/html');
			}
		});
	}

	e.preventDefault();
}

function onMouseEnter(e) {
	$$('li').forEach(li => {
		if (e.target === li) {
			e.target.style.cursor = 'pointer';
		}
	});
}

function updateLocalTodos() {
	[...$$('li')].forEach((todo, i) => {
		allTodos[i].id = i + 1;
		allTodos[i].text = todo.children[0].children[1].textContent;
		// allTodos[i].isCompleted = todo.children[0].children[1].classList.contains('done');
		allTodos[i].isCompleted = Boolean(todo.dataset.isCompleted);
	});
}
