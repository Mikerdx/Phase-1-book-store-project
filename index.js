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

        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.subtitle}</p>
            <p>Price: <strong>${book.price}</strong></p>
            <a href="${book.url}" target="_blank">More Info</a>
            <button class="buy-button">Buy</button>
            <button class="delete-button">Delete</button>
        `;
        
        // Add event listener to delete button
        bookDiv.querySelector(".delete-button").addEventListener("click", () => {
            bookDiv.remove();//removes bookDiv from the container
        });
        
        // Add event listener to buy button (placeholder functionality)
        bookDiv.querySelector(".buy-button").addEventListener("click", () => {
            alert(`You have selected '${book.title}' to buy.`);//alerts the user when they select buy
        });
        
        booksContainer.appendChild(bookDiv);// Adds book element to the container
    });
};

// Search functionality
document.querySelector("#search-button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevents default form submission
    const query = document.querySelector("#search-input").value.trim(); // Get search input value and remove leading/trailing spaces
    if (query) fetchBooks(query); // Only fetch books if query is not empty
});

// Load books on page load
fetchBooks();//loads book searched

// Theme toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.querySelector("[data-theme-toggle]");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);
    updateButtonText(savedTheme);

    // Toggle theme on button click
    themeToggleButton.addEventListener("click", function () {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateButtonText(newTheme);
    });

    // Function to update button text based on theme
    function updateButtonText(theme) {
        themeToggleButton.textContent = theme === "light" ? "Change to dark theme" : "Change to light theme";
        themeToggleButton.setAttribute("aria-label", `Change to ${theme === "light" ? "dark" : "light"} theme`);
    }
});
