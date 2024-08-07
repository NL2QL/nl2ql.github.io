const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

var acc = document.getElementsByClassName("accordion");
var i;

// toggle all to active to start
for (i = 0; i < acc.length; i++) {
  acc[i].classList.toggle("active");
  var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}