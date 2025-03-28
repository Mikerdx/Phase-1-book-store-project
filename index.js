// Fetch books from IT Bookstore API
const fetchBooks = (query = "javascript") => {//makes request to the IT store --displays necessary books as per the js 
    fetch(`https://api.itbook.store/1.0/search/${query}`)//sends request to the http
          .then(response => response.json())//changes the response JSON