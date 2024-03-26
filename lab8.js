// Function for submit form data
function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    var proficiencies = [];
    for (var i = 1; i <= 3; i++) {
        if (document.getElementById("proficiency" + i).checked) {
            proficiencies.push(document.getElementById("proficiency" + i).value);
        }
    }
    var country = document.getElementById("country").value;
    var bio = document.getElementById("bio").value;

    // Store data in storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("gender", gender);
    localStorage.setItem("proficiencies", JSON.stringify(proficiencies));
    localStorage.setItem("country", country);
    localStorage.setItem("bio", bio);

    // Display data saved
    document.getElementById("feedback").innerHTML = "Data saved.";
}

// Resize text
function resizeText(multiplier) {
    var currentFontSize = document.body.style.fontSize;
    if (currentFontSize === "") {
        currentFontSize = "1.0em";
        document.body.style.fontSize = currentFontSize;
    }
    document.body.style.fontSize = parseFloat(currentFontSize) + (multiplier * 0.1) + "em";
}

// Toggle high contrast mode
function toggleContrast() {
    var elements = document.querySelectorAll('body, input, select, textarea, input[type="button"], input[type="reset"]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('high-contrast');
    }
}

// Zoom in
function zoomIn() {
    zoomLevel += 0.1;
    adjustZoom();
}

// Zoom out
function zoomOut() {
    zoomLevel -= 0.1;
    adjustZoom();
}