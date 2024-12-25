
const wishForm = document.getElementById("wish-form");
const awishForm = document.getElementById("awish-form");
const wishList = document.getElementById("wish-lst");
const awishList = document.getElementById("awish-lst");

function createDeleteWishButton() {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
        console.log("Удаляем желание: ", deleteButton.parentElement.textContent);
        deleteButton.parentElement.remove();
    });
    return deleteButton;
}

function createLink(wishText, wishUrl) {
    const wishElemUrl = document.createElement("a");
    wishElemUrl.setAttribute("href", wishUrl);
    wishElemUrl.textContent = wishText;
    return wishElemUrl;
}

function addWish(wishList, wishText, wishUrl) {
    if (wishText != "") {
        const wishElem = document.createElement("li");
        if (wishUrl != "") {
            const wishElemUrl = createLink(wishText, wishUrl)
            console.log(wishElemUrl)
            wishElem.appendChild(wishElemUrl);
        } else {
            wishElem.textContent = wishText;
        }
        wishElem.appendChild(createDeleteWishButton());
        wishList.appendChild(wishElem);
    }    
}

function processWishForm(event, wishInput, wishUrl, wishAddBtn, wishLst) {
    const wishTextInput = document.getElementById(wishInput);
    const wishUrlInput = document.getElementById(wishUrl);
    const wishAddButton = document.getElementById(wishAddBtn);
    const wishList = document.getElementById(wishLst);

    const wishText = wishTextInput.value.trim();
    const wishTextUrl = wishUrlInput.value.trim();

    if (event.submitter === wishAddButton) {
        if (wishText !== "") {
            addWish(wishList, wishText, wishTextUrl);
            console.log("Добавляем желание: ", wishText);
            wishTextInput.value = "";
            wishUrlInput.value = "";
        }
    }
}

wishForm.addEventListener("submit", function (event) {
    event.preventDefault();
    processWishForm(event, "wish-input", "wish-url", "wish-add-btn", "wish-lst")
});

awishForm.addEventListener("submit", function (event) {
    event.preventDefault();
    processWishForm(event, "awish-input", "awish-url", "awish-add-btn", "awish-lst")
});

document.getElementById("awish-btn").addEventListener("click", function (event) {
    wishForm.style.display = "none";
    wishList.style.display = "none";
    awishForm.style.display = "block";
    awishList.style.display = "block";
});

document.getElementById("wish-btn").addEventListener("click", function (event) {
    wishForm.style.display = "block";
    wishList.style.display = "block";
    awishForm.style.display = "none";
    awishList.style.display = "none";
});