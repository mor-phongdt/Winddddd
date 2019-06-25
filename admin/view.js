const view = {};

//drop-down menu

var Accordion = function (el, multiple) {
	this.el = el || {};
	this.multiple = multiple || false;


	var links = this.el.find('.link');

	links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
}

Accordion.prototype.dropdown = function (e) {
	var $el = e.data.el;
	$this = $(this),
		$next = $this.next();

	$next.slideToggle();
	$this.parent().toggleClass('open');

	if (!e.data.multiple) {
		$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
	};
}




view.setActiveScreen = (screenName) => {
	const app = document.getElementById('app');

	switch (screenName) {
		case 'adminPage':
			if (app) {
				app.innerHTML = components.adminPage;
			}
			//affect menu
			$(function () {
				var accordion = new Accordion($('#accordion'), false);
			});
			//load book
			model.loadBook();
			//add book
			const addBook = document.getElementById('add-book');
			addBook.addEventListener('click', (event) => {
				view.setActiveScreen('addBook');
			});

			//search book
			$(document).ready(function () {
				$("#search").on("keyup", function () {
					var value = $(this).val().toLowerCase();
					$("#table-book tr").filter(function () {
						$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
					});
				});
			});
			break;
		case 'addBook':
			if (app) {
				app.innerHTML = components.addBook;
			}
			//affect menu
			$(function () {
				var accordion = new Accordion($('#accordion'), false);
			});

			//List book
			const listBook = document.getElementById('list-book');
			listBook.addEventListener('click', (event) => {
				model.clearBook();
				view.setActiveScreen('adminPage');
			});
			let imageUrlStorage = undefined;
			//submit
			const form = document.getElementById('form-add-book');
			if (form) {
				form.addEventListener('submit', (event) => {
					event.preventDefault();
					const bookInfo = {
						name: form.nameBook.value,
						author: form.nameAuthor.value,
						category: form.category.value,
						decription: form.textArea.value,
						imageUrl: imageUrlStorage,
						createdAt: new Date(),
						comment: [],
						rating: 0
					};
					controller.validateAddBook(bookInfo);
				})
			}

			const fileButton = document.getElementById('file-button');
			if (fileButton) {
				fileButton.addEventListener('change', (e) => {
					//get file
					const file = e.target.files[0];
					//create a storage ref
					const storageRef = firebase.storage().ref('image/' + file.name);
					//upload file
					const task = storageRef.put(file)
						.then((snapshot) => {
							storageRef.getDownloadURL().then(function (url) {
								// get Url
								imageUrlStorage = url;
							}).catch()
						});
				});

			}
			break;
	}

}

view.clearAddBookForm = () => {
	const form = document.getElementById('form-add-book');
	if (form) {
		form.nameBook.value = '';
		form.nameAuthor.value = ''
		form.category.value = '';
		form.textArea.value = '';
		form.image.value = '';
	}
};

view.renderErrorMessage = (elementId, errorMessage) => {
	const element = document.getElementById(elementId);
	if (element) {
		element.innerText = errorMessage;
	}

	//tao data-id của thằng error = id của input rồi getAtribute về rồi lấy cái đấy query ra thằng input rồi thêm class để đổi border thằng đỏ
	//nếu !errorMessage thì k thêm class để đổi viền đỏ nữa 
};

view.renderBook = (book) => {
	const tableBook = document.getElementById('table-book');
	const item = `
<tr>
	<th>${book.id}</th>
	<th>${book.name}</th>
	<th>${book.author}</th>
	<th>${book.category}</th>
	<th><p>${book.decription}</p></th>
	<th>${book.imageUrl}</th>
	<th><i class="fas fa-trash"></i></th>
	<th><i class="fas fa-edit"></i></th>
</tr>`
	const position ="beforeend";
	tableBook.insertAdjacentHTML(position,item);
};