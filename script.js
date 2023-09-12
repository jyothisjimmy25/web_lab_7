document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookListDiv = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "books.json", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const books = JSON.parse(xhr.responseText);
                displayBooks(books);
            } else {
                console.error("Failed to fetch books.");
            }
        };

        xhr.send();
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
