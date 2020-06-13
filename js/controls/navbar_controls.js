var save_modal;
var save_btn;
var close_save_modal;

var load_modal;
var load_btn;
var close_load_modal;

var reload;

document.addEventListener("DOMContentLoaded", function () {

  // Get the modal
  save_modal = document.getElementById("save-modal");

  // Get the button that opens the modal
  save_btn = document.getElementById("save-button");

  // Get the <span> element that closes the modal
  close_save_modal = document.querySelector('#save-modal .close');

  // Get the button element that cancels the modal
  cancel_save_modal = document.querySelector('#save-modal .cancel');

  // Get the button element that saves the wyvern
  save_save_modal = document.querySelector('#save-modal .save');

  // When the user clicks on the button, open the modal
  save_btn.onclick = function () {
    save_modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  close_save_modal.onclick = function () {
    close_and_clear(save_modal)
  }

  // When the user clicks on cancel, close the modal
  cancel_save_modal.onclick = function () {
    close_and_clear(save_modal)
  }

  // When the user clicks on save, save the wyvern
  save_save_modal.onclick = function () {
    let wyname = save_modal.querySelector('.modal-text-prompt').value
    let override = true;
    if (saved_wyerns.includes(wyname)) {
      override = confirm('A wyvern called \"' + wyname + '\" already exists, are you sure want to overwrite it?');
    }

    if (override) {
      saveState(wyname);
      close_and_clear(save_modal);
      load_saved_wyvern_names();
    }
  }

  // Get the modal
  load_modal = document.getElementById("load-modal");

  // Get the button that opens the modal
  load_btn = document.getElementById("load-button");

  // Get the <span> element that closes the modal
  close_load_modal = document.querySelector('#load-modal .close');

  // Get the button element that cancels the modal
  cancel_load_modal = document.querySelector('#load-modal .cancel');

  // Get the button element that loads the wyvern
  load_load_modal = document.querySelector('#load-modal .load');

  // When the user clicks on the button, open the modal
  load_btn.onclick = function () {
    generate_select_list();
    load_modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  close_load_modal.onclick = function () {
    load_modal.style.display = "none";
  }

  // When the user clicks on cancel, close the modal
  cancel_load_modal.onclick = function () {
    close_and_clear(load_modal)
  }

  // When the user clicks on load, load the wyvern
  load_load_modal.onclick = function () {
    let wyname = load_modal.querySelector('#wyvern-name-select-list').value;
    loadSaveState(wyname);
    close_and_clear(save_modal);
  }

  // Get the reload button.
  reload_btn = document.getElementById("reload-button");

  // When the user clicks on the button, reload the wyvern.
  reload_btn.onclick = function () {
    add_wyvern();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == load_modal) {
      load_modal.style.display = "none";
    }

    if (event.target == save_modal) {
      close_and_clear(save_modal)
    }
  }
});

function close_and_clear(modal) {
  modal.style.display = "none";
  try {
    modal.querySelector('.modal-text-prompt').value = "";
  }
  catch(err) {

  }
}
