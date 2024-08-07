document.getElementById('processBtn').addEventListener('click', handleFile, false);
function handleFile(){
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            displayContent(text);
        };
        reader.readAsText(file);
    }else {
        alert("Please select a file");
    }
}

function displayContent(text) {
    const originalContentElement = docuemnt.getElementById('originalContent');
    const manipulatedContentElement = document.getElementById('manipulatedContent');

    // Display the orginal content
    originalContentElement.textContent = text;
    // manipulatr the string
    const manipulatedString = manipulatedString(text);
    // Display manipulated content
    manipulatedContentElement.textContent = manipulatedString;
}

function manipulatedString(text) {
    // convert to uppercase
    let result = text.toUpperCase();

    // slice the string (for example, first 50 characters)
    result = result.slice(0, 50);

    // you can add more manipulations here(e.g. toLowerCase(), repplace(), etc)
    return result;
}
