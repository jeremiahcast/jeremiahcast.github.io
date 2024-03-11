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