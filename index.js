// Fetch books from IT Bookstore API
const fetchBooks = (query = "javascript") => {//makes request to the IT store --displays necessary books as per the js 
    fetch(`https://api.itbook.store/1.0/search/${query}`)//sends request to the http
          .then(response => response.json())//changes the response JSON
          .then(data => displayBooks(data.books))//data.books is assumed to be an array of book objects.
  
  
          .catch(error => console.error("Error fetching books:", error));//logs the error to the console
  };
// Display books dynamically
const displayBooks = (books) => {
    const booksContainer = document.querySelector(".books");//selects .books container
    booksContainer.innerHTML = ""; // Clear previous content before adding new books  
     
    books.forEach(book => {// selects each book displayed
        const bookDiv = document.createElement("div");//creates a div to add book image,title, subtitle,price and the link to view more information from original store 
        bookDiv.classList.add("book");
        ookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">