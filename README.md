This repository contains a simple web application that demonstrates dynamic content addition to a webpage using HTML, CSS, and JavaScript. Users can input text in a textbox, and upon clicking the "Add" button, the entered text is appended as paragraphs one below another.

### Step-by-Step Explanation

#### HTML 

The HTML code creates a simple webpage with a text input, a button, and a div to hold the paragraphs.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Textbox</title>
</head>
<body>
    <div class="container">
        <input type="text" id="textInput" placeholder="Enter your text">
        <button id="addButton">Add</button>
        <div id="output"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### JavaScript

The JavaScript code adds a new paragraph to the webpage when the "Add" button is clicked.

```javascript
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


