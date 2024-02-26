// prompt name
function promptForName() {
    var name = prompt("Enter your name:");
    document.getElementById("nameID").innerHTML = "Hello " + name;
}

// enlarge image
document.getElementById("myImage").onclick = function() {
    this.style.width = "400px";
}

// dropdown
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
            }
        }
    }
}

// onmouseover and onmouseout
function mouseOver(element) {
    element.style.color = 'blue';
}

function mouseOut(element) {
    element.style.color = 'black';
}