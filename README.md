# Phase-1-book-store-project

## Description
The **Book Store** is a Single Page Application (SPA) that allows users to browse books,check their prices, search for specific titles and subtitles, and toggle between light and dark themes. The app fetches book data from an external API and dynamically updates the page without requiring any reloads.

## 🎯 Features
- 📖 **View a list of books** with details such as title, author, and description.
- 🔍 **Search functionality** to filter books by title.
-  **Toggle between light and dark mode**.


## 🚀 Technologies Used
- **HTML5** - Structure of the app
- **CSS3** - Styling and responsive design
- **JavaScript (ES6)** - DOM manipulation and event handling
- **Fetch API** - To interact with the external API
- **JSON Server** - Mock backend for persisting data (stretch goal)

## 🔧 Setup & Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/book-store-spa.git
   cd book-store-spa
   ```
2. Open `index.html` in a browser.
3. (Optional) Start JSON Server:
   ```sh
   json-server --watch db.json
   ```

## 🔄 API Usage
This app fetches book data from an external API or a local `db.json` file. Example JSON structure:
```json
{
  "books": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "description": "A novel set in the Jazz Age..."
    }
  ]
}
```

## 📌 Event Listeners Implemented
- **Click event**: To view book details.
- **Input event**: For real-time search functionality.
- **Toggle event**: To switch between light and dark modes.

## 📜 Project Requirements Checklist
✅ Uses HTML, CSS, and JavaScript for frontend development.  
✅ Retrieves data asynchronously from an API or `db.json`.  
✅ Uses at least **3 distinct event listeners**.  
✅ Implements array iteration methods (`map`, `filter`, `forEach`).  
✅ Runs as a **Single Page Application** (SPA) without reloading.  

## 📌 Future Enhancements
- ✅ Implement a **favorites section** for saved books.
- ✅ Add user **ratings and reviews**.
- ✅ Implement full **CRUD operations** using JSON Server.

## 💡 Author
👨‍💻 Developed by **Mike Bett**  
📧 Contact: [mike.bett@student.moringa.school.com](mailto:mike.bett@student.moringa.school.com)  

---
🌟 **If you like this project, consider giving it a star!** ⭐

