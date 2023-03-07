const library = [
  {
    title: 'Book One',
    author: 'Chris Mendez',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'Book Two',
    author: 'Chris Mendez',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'Book Three',
    author: 'Chris Mendez',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title: firstBook} = library[0];
console.log(firstBook);