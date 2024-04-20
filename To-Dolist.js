document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input");
    const addButton = document.getElementById("addbut");
    const list = document.querySelector(".add-content");

    // Function to create a new list item
    function createNewListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    }

    // Event listener for the add button
    addButton.addEventListener("click", () => {
        const inputValue = inputBox.value.trim();
        if (inputValue !== "") {
            createNewListItem(inputValue);
            inputBox.value = ""; // Clear the input field after adding
        } else {
            alert("Please enter some text.");
        }
    });

    // Event listener for pressing Enter key in the input field
    inputBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
