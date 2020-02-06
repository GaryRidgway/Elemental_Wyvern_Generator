var body;

document.addEventListener("DOMContentLoaded", function() {
  add_wyvern();
});


function add_wyvern() {
  body = document.querySelector('body');
  body.innerHTML = EAM_randomize();
}
