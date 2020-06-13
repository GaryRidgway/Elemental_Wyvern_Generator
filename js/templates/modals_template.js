var saved_wyerns;
load_saved_wyvern_names();

function modals_template() {
  let modals = '\
    <div id="save-modal" class="modal">\
      <div class="modal-content" >\
        <h2>Wyvern name <span class="close">&times;</span></h2>\
        <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="modal-text-prompt" type="text" value="" >\
        <div class="save-modal-buttons">\
          <button class="save">Save</button>\
          <button class="cancel">Cancel</button>\
        </div>\
      </div>\
    </div>\
\
    <div id="load-modal" class="modal">\
      <div class="modal-content">\
        <h2>Wyvern name <span class="close">&times;</span></h2>\
        <div class="select-list-container"></div>\
        <div class="save-modal-buttons">\
          <button class="load">Load</button>\
          <button class="cancel">Cancel</button>\
        </div>\
      </div>\
    </div>\
  ';

  return modals;
}

// Generate the select list for a user to load a wyvern.
function generate_select_list() {
  load_saved_wyvern_names();
  let select_list = '<select id="wyvern-name-select-list">';
  for (let i = 0; i < saved_wyerns.length; i++) {
    select_list += '<option value="' + saved_wyerns[i] + '">' + saved_wyerns[i] + '</option>'
  }
  select_list += '</select>';

  document.querySelector('.select-list-container').innerHTML = select_list;
}
