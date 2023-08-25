document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const textInput = document.getElementById("textInput");
    const outputDiv = document.getElementById("output");

    addButton.addEventListener("click", function () {
        const text = textInput.value;
        if (text.trim() !== "") {
            const pTag = document.createElement("p");
            pTag.textContent = text;
            outputDiv.appendChild(pTag);
            textInput.value = "";
        }
    });
});
