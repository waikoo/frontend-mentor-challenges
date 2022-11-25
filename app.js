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

	$('.new-todo').style.setProperty('--c', 'hsl(233, 11%, 84%)');

	setColorOfElementTo('.summary', 'manatee');
	setColorOfElementTo('.show span', 'manatee');
	setColorOfElementTo('.drag-n-drop-con', 'manatee');
	setColorOfElementTo('.logo', 'white');
	// setColorOfElementTo('.done-todo-text', 'mischka');
	// setColorOfElementTo('.undone-todo-text', 'mulledwine');
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
	if (!todoText) return;
	todosContainer.insertBefore(createNewLi(todoText), todosContainer.firstChild);
	$('input').value = '';

	addTodoEventListeners();
	updateUICounter();

	const todosCount = $('.todos-con').children.length;

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
	$('.empty-circle').addEventListener('click', addCheckToTodo);
	$('.checked-circle').addEventListener('click', removeCheckFromTodo);
}

function createNewLi(text) {
	todoTotal++;
	todoId++;
	const li = document.createElement('li');
	li.className = `undone-todo-text ${todoId}`;
	li.draggable = true;
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

function setIsCompleted(trueOrFalse, element) {
	let todoNr = element.className.split(' ')[1];
	let id = Number(todoNr[todoNr.length - 1]);

	allTodos.forEach(todo => {
		if (todo.id === id) todo.isCompleted = trueOrFalse;
	});

	saveTodosToLocalStorage(allTodos);
}

function addCheckToTodo(e) {
	const todo = e.target.closest('li');

	$$('.check-status').forEach(el => {
		if (el.closest('li') === e.target.closest('li')) {
			setIsCompleted(true, todo);
			addCheckmark(e);
			setCheckedClassName(e);
			setCheckedColor(e);
		}
	});
}

function setCheckedClassName(e) {
	const uncle = e.currentTarget.parentElement.nextElementSibling;
	if (uncle.className === 'undone-todo-text') uncle.className = 'done-todo-text';
}

function setCheckedColor(e) {
	let localColor;
	if (currentTheme === 'light') localColor = 'rgb(210, 211, 219)';
	if (currentTheme === 'dark') localColor = 'rgb(77, 80, 102)';
	uncle.style.color = localColor;
}

function addCheckmark(e) {
	const parent = e.target.parentElement;
	const emptyCircle = e.target;
	const checkedCircle = parent.querySelector('.checked-circle');
	emptyCircle.style.display = 'none';
	checkedCircle.style.display = 'grid';
}

function removeCheckFromTodo(e) {
	// TODO:
	const todo = e.target.closest('li');

	$$('.check-status').forEach(el => {
		if (el.closest('li') === e.target.closest('li')) {
			setIsCompleted(false, todo);

			/*
      TODO;
			addCheckmark(e);
      setCheckedClassName(e)
      setCheckedColor(e);
      */

			// TODO: segment:

			// ---
			const todoText = e.currentTarget.parentElement.querySelector('.empty-circle');
			e.currentTarget.style.display = 'none';
			todoText.style.display = 'block';
			// ---

			// ---
			const crossedTodo = e.currentTarget.parentElement.nextElementSibling;
			crossedTodo.className = 'undone-todo-text';
			// ---

			// ---
			// const crossedTodo = e.currentTarget.parentElement.nextElementSibling;
			let localColor;
			if (currentTheme === 'light') localColor = 'rgb(72, 75, 106)';
			if (currentTheme === 'dark') localColor = 'rgb(202, 205, 232)';
			crossedTodo.style.color = localColor;
			// ---
		}
	});
}

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

function updateUICounter() {
	todoTotal = $('.todos-con').children.length;
	$('.number').textContent = todoTotal;
}

function saveTodosToLocalStorage(object) {
	localStorage.setItem('savedTodos', JSON.stringify(object));
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
        <li class="${done ? 'done' : 'undone'}-todo-text todo${id}" draggable="true" style="border-bottom: 1px solid rgb(210, 211, 219);">
          <div class="todo-icon-text">
            <div class="check-status">
              <div class="empty-circle" style="border-radius: 50%; display: ${done ? 'none' : 'flex'}; ${done ? '' : 'border: 1px solid rgb(210, 211, 219)'}"></div>
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
	$$('.empty-circle').forEach(deleteButton => deleteButton.addEventListener('click', addCheckToTodo));
	$$('.checked-circle').forEach(deleteButton => deleteButton.addEventListener('click', removeCheckFromTodo));

	updateUICounter();
	updateLocalTodos();
	console.log(allTodos);
}

// dropzone -> $('.todos-con)
// $('.todos-con).addEventListener('drop', onDrop)

themeToggle.addEventListener('click', handleThemeToggler, false);
window.addEventListener('change', setPreferredColorScheme);

tabs.forEach(tab => tab.addEventListener('click', handleTabSelection));
form.addEventListener('submit', createNewTodo);
clearAllTodosButton.addEventListener('click', deleteCompletedTodos);

// todosContainer.addEventListener('drop', onDrop);

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
// displayTodosFromLocalStorage();

function updateLocalTodos() {
	[...$$('li')].forEach((todo, i) => {
		allTodos[i].id = i + 1;
		allTodos[i].text = todo.children[0].children[1].textContent;
		allTodos[i].isCompleted = todo.children[0].children[1].classList.contains('done');
	});
}

// TODO: a check id alapjan mukodjon ne textContent alapjan
/*
  ? addCheckToTodo
  ? removeCheckFromTodo
*/
