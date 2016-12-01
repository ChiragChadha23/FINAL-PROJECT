let books = [
  {author: 'Thomas Pynchon', lesson: 'Bleeding Edge'},
  {author: 'Haruki Murakami', lesson: '1Q84'},
  {author: 'John D MacDonald', lesson: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', lesson: 'Understanding Ecmascript 6'}
]
let userid =[
{name:'chirag'}
]
function less() {
  let aName = document.getElementById('lesson').value
  let name = books.filter((x) => x.lesson === aName)
  try {
    document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function addBook (book) {
  books.push({author:document.getElementById('addBook').value ,title:document.getElementById('title').value})
  document.getElementById('addBook').value=""
document.getElementById('title').value=""
}


function student () {
  userid.push({author:document.getElementById('studentname').value ,title:document.getElementById('studentemail').value})
  document.getElementById('studentname').value=""
document.getElementById('studentemail').value=""
}


function showAllBooks () {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode('a book')
  listItem.appendChild(textnode)
  document.getElementById('allTheBooks').appendChild(listItem)
}