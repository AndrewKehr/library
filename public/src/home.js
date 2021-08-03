function getTotalBooksCount(books) {
  return _lenghts(books);
}

function getTotalAccountsCount(accounts) {
  return _lenghts(accounts);
}

//helper function
function _lenghts(value) {
  return value.length;
}

//reduce then return
function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (!book.borrows[0].returned) {
      acc++
    }
    return acc
  }, 0)
}


//map and sort
function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const book = [];
  bookGenres.map((genre) => {
    const genres = book.findIndex((bookIndex) => bookIndex.name === genre);
    (genres >= 0) ? book[genres].count = book[genres].count + 1 : book.push({ name: genre, count: 1 });
  });
  book.sort((bookA, bookB) => bookB.count - bookA.count);
  if (book.length > 5) {
    return book.slice(0, 5);
  }
  return book;
}

function getMostPopularBooks(books) {
  return Object.entries(
      books.reduce((acc, book) => {
        acc[book.title] = book.borrows.length
        return acc
      }, {})
    )
    .map(([name, count]) => ({
      name,
      count
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
}

  function getMostPopularAuthors(books, authors) {
    const popularAuthors = []
    for (author of authors) {
      const writtenWorks = books.filter((book) => book.authorId === author.id)
      popularAuthors.push({
        'name': (`${author.name.first} ${author.name.last}`),
        'count': writtenWorks.reduce((acc, book) => acc + book.borrows.length, 0)
      })
    }
    return popularAuthors.sort((a, b) => b['count'] - a['count']).slice(0, 5)
  }


//     loop over authors
//      in loop, filter
//      push to array
//    sort and slice that




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
