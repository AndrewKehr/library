function findAuthorById(authors, id) {
  return _findItemsById(authors, id);
}

function findBookById(books, id) {
return _findItemsById(books, id)
}

//helper function
function _findItemsById (items, id) {
  return items.find((item) => item.id === id)
}

function partitionBooksByBorrowedStatus(books) {
//return an array with 2 arrays, borrowed books and returned books
let borrowedBooks = [];
let returnedBooks = [];
const partition = [];
books.forEach((book) => {
  const returned = book.borrows[0].returned;
(returned) ? borrowedBooks.push(book) : returnedBooks.push(book)
});
partition.push(returnedBooks);
partition.push(borrowedBooks);
return partition;
}

function getBorrowersForBook(book, accounts) {
//declare array for book, push all borrowers of the book and their return status
//limit array to 10 values

let result = [];
let array = book.borrows;
array.forEach(borrow => {
  let account = accounts.find(acc => acc.id === borrow.id);
  let obs = account;
  obs['returned'] = borrow.returned;
  result.push(obs);
})
return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
