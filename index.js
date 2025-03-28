// Fetch books from IT Bookstore API
const fetchBooks = (query = "javascript") => {//makes request to the IT store --displays necessary books as per the js 
    fetch(`https://api.itbook.store/1.0/search/${query}`)//sends request to the http
          .then(response => response.json())//changes the response JSON
          .then(data => displayBooks(data.books))//data.books is assumed to be an array of book objects.
  
  
          .catch(error => console.error("Error fetching books:", error));//logs the error to the console
  };
  