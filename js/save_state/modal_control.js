var save_modal;
var save_btn;
var close_save_modal;

var load_modal;
var load_btn;
var close_load_modal;

document.addEventListener("DOMContentLoaded", function () {

  // Get the modal
  save_modal = document.getElementById("save-modal");

  // Get the button that opens the modal
  save_btn = document.getElementById("save-button");

  // Get the <span> element that closes the modal
  close_save_modal = document.querySelector('#save-modal .close');

  // When the user clicks on the button, open the modal
  save_btn.onclick = function () {
    save_modal.style.display = "block";
  }

  // Get the modal
  load_modal = document.getElementById("load-modal");

  // Get the button that opens the modal
  load_btn = document.getElementById("load-button");

  // Get the <span> element that closes the modal
  close_load_modal = document.querySelector('#load-modal .close');

  // When the user clicks on the button, open the modal
  load_btn.onclick = function () {
    load_modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  close_load_modal.onclick = function () {
    load_modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == load_modal) {
      load_modal.style.display = "none";
    }

    if (event.target == save_modal) {
      save_modal.style.display = "none";
    }
  }
});
