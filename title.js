function getTitle() {
    var titleText = document.getElementById("titleText").textContent;
    var dateText = document.getElementById("dateText").textContent;
    document.title = titleText + " - " + dateText
}

