const bookList = [
	{
		title: 'Early Riser',
		author: 'Jasper Fforde',
		rating: 7,
	},
	{
		title: 'Recursion',
		author: 'Blake Crouch',
		rating: 6,
	},
];
const bookTable = document.createElement('ul');

const createBookTable = (bookList) => {
	for (book of bookList) {
		addBook(book, bookTable);
	}
	document.getElementById('main-table').append(bookTable);
};

const addBook = ({ title, author, rating }, bookTable) => {
	const bookLi = document.createElement('li');
	bookTable.append(bookLi);

	const titleDiv = document.createElement('div');
	titleDiv.classList.add('title');
	titleDiv.innerText = title;
	bookLi.append(titleDiv);

	const authorDiv = document.createElement('div');
	authorDiv.classList.add('author');
	authorDiv.innerText = author;
	bookLi.append(authorDiv);

	const ratingDiv = document.createElement('div');
	ratingDiv.classList.add('rating');
	ratingDiv.innerText = rating;
	bookLi.append(ratingDiv);
};

createBookTable(bookList);

const submitBtn = document.getElementById('new-book-submit');
submitBtn.addEventListener('click', function () {
	console.log('I have been clicked');
	const newBook = getBook();
	console.log('newBook:', newBook);
	if (newBook) {
		if (document.querySelector('#warning').classList.contains('show')) {
			document.querySelector('#warning').classList.remove('show');
		}
		console.log('adding book');
		addBook(newBook, bookTable);
		document.getElementById('main-table').append(bookTable);
	}
});

const getBook = () => {
	let title = document.getElementById('input-title').value;
	let author = document.getElementById('input-author').value;
	let rating = document.getElementById('input-rating').value;
	if (title && author && rating) {
		const newBook = {
			title,
			author,
			rating,
		};
		return newBook;
	} else {
		document.querySelector('#warning').classList.add('show');
	}
};
