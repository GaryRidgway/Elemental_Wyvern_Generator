function modals_template() {
  let modals = '\
    <div id="save-modal" class="modal">\
      <div class="modal-content" >\
        <span class="close">&times;</span>\
        <p>Save Modal</p>\
      </div>\
    </div>\
\
    <div id="load-modal" class="modal">\
      <div class="modal-content">\
        <span class="close">&times;</span>\
        <p>Load Modal</p>\
      </div>\
    </div>\
  ';

  return modals;
}
