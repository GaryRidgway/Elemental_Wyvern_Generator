var wyvern_display;
var modal_container;

document.addEventListener("DOMContentLoaded", function() {
  add_wyvern();
  add_modals();
});


function add_wyvern(reload = false) {
  wyvern_display = document.querySelector('body #wyvern-display');

  let wyvern    = WT_randomize();
  create_wyvern_data(wyvern);

  let wyvern_type = wyvern_type_template()
  let mutations   = mutations_template();
  let statblock   = statblock_template();
  let level_table = level_table_template();

  wyvern_display.innerHTML = wyvern_type
                 + '<div class="flex-half">'
                 + statblock
                 + level_table
                 + '</div>'
                 + mutations;
}

function add_modals() {
  modal_container = document.querySelector('#modal-container');
  modal_container.innerHTML = modals_template();
}
