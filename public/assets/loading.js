// Load the menu from the assets folder
fetch("/assets/menu.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("menu").innerHTML = html;
    });

//Load the footer from the assets folder
fetch("/assets/footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
        //Add current year to footer
        document.getElementById("year").textContent = new Date().getFullYear();
    });

