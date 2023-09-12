document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookListDiv = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "books.json", true);

        xhttp.onload = function () {
            if (xhttp.status === 200) {
                const books = JSON.parse(xhttp.responseText);
                displayBooks(books);
            } else {
                console.error("Failed to fetch books.");
            }
        };

        xhttp.send();
    });

    function displayBooks(books) {
        bookListDiv.innerHTML = "";

        const ul = document.createElement("ul");

        books.forEach(function (book) {
            const li = document.createElement("li");
            li.textContent = book.title + " by " + book.author;
            ul.appendChild(li);
        });

        bookListDiv.appendChild(ul);
    }
});
