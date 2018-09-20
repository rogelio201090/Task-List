//Refactoring Book List App
// ES6 Classes
console.log("ES6 JS file");

class Book{
constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    }

}

//Class User Interface to
//manage all UI actions
class UI{
    addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.getElementById("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

    list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.innerText = message;

        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector(".alert").remove();
        }, 3000);
    };
    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    };
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    };


};


const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(e) {
   const title = document.getElementById("title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;
   const book = new Book(title, author, isbn);
   const ui = new UI();
   if (title === "" || author === "" || isbn === "") {
       console.log("Error!");
       ui.showAlert("Fields should not be Empty", "error")
   } else {
       ui.addBookToList(book);
       ui.clearFields();
   };
 e.preventDefault();
};

document.getElementById("book-list").addEventListener("click", function(e) {
    console.log("click");

    ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert("Book Removed", "success");

    e.preventDefault();
});