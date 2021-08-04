function findAccountById(accounts, id) {
  return accounts.find((identity) => identity.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows({ id }, books) {
  let total = 0;
  for (book of books) {
    for (user of book.borrows) {
      if (user.id === id) {
        total++;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  //create array
  let booksTaken = [];
  //forEach book push into array
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      booksTaken.push(book);
    }
  });
  booksTaken.forEach((book) => {
    let anAuthor = authors.find((person) => person.id === book.authorId);
    book["author"] = anAuthor;
  });
  console.log(booksTaken);
  return booksTaken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
