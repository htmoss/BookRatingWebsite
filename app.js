let ratingNum = document.querySelector('#rating-num');
let rangeBar = document.querySelector('#input-rating');
const submitBtn = document.getElementById('new-book-submit');
const mainTable = document.getElementById('main-table');
const bookTable = document.createElement('ul');
const addInfo = document.querySelector('#add-info');

// Showing the value of the range bar below the range bar
rangeBar.addEventListener('change', function () {
	ratingNum.textContent = `${rangeBar.value} out of 7`;
});

// original bookList to start off with
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

// creates a book table from the book list
const createBookTable = (bookList, tableLocation) => {
	bookList.sort(function (a, b) {
		return b.rating - a.rating;
	});
	clearBox(bookTable);
	createLabelBoxes(bookTable);
	for (book of bookList) {
		createBook(book, bookTable);
	}
	tableLocation.append(bookTable);
};

// creates book item for each book in bookTable
const createBook = ({ title, author, rating }, bookTable) => {
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

// Function for submit button, shows a warning if the entire rating has not been filled out
submitBtn.addEventListener('click', function () {
	const newBook = getBook();
	console.log('newBook:', newBook);
	if (newBook) {
		// takes away warning if it is already there
		if (document.querySelector('#warning').classList.contains('show')) {
			document.querySelector('#warning').classList.remove('show');
		}
		console.log('adding book');
		createBookTable(bookList, mainTable);
	}
});

// gets input from user rating and pushes it to bookList
const getBook = () => {
	let title = document.getElementById('input-title').value;
	let author = document.getElementById('input-author').value;
	let rating = Number(document.getElementById('input-rating').value);
	if (title && author && rating) {
		const newBook = {
			title,
			author,
			rating,
		};
		bookList.push(newBook);
		return newBook;
	} else {
		document.querySelector('#warning').classList.add('show');
	}
};

function clearBox(element) {
	console.log('Clearing!');
	element.innerHTML = '';
}

function createLabelBoxes(bookTable) {
	const bookLi = document.createElement('li');
	bookTable.append(bookLi);

	const titleDiv = document.createElement('div');
	const titleIcon = document.createElement('i');
	const titleP = document.createElement('p');
	titleDiv.classList.add('topBox');
	titleIcon.classList.add('fas', 'fa-book');
	titleP.innerText = 'Title';
	bookLi.append(titleDiv);
	titleDiv.append(titleIcon);
	titleDiv.append(titleP);

	const authorDiv = document.createElement('div');
	const authorIcon = document.createElement('i');
	const authorP = document.createElement('p');
	authorDiv.classList.add('topBox');
	authorIcon.classList.add('fas', 'fa-user-alt');
	authorP.innerText = 'Author';
	bookLi.append(authorDiv);
	authorDiv.append(authorIcon);
	authorDiv.append(authorP);

	const ratingDiv = document.createElement('div');
	const ratingIcon = document.createElement('i');
	const ratingP = document.createElement('p');
	ratingDiv.classList.add('topBox');
	ratingIcon.classList.add('fas', 'fa-star-half-alt');
	ratingP.innerText = 'Rating';
	bookLi.append(ratingDiv);
	ratingDiv.append(ratingIcon);
	ratingDiv.append(ratingP);
}

createBookTable(bookList, mainTable);
