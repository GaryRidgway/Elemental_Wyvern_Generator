var body;

document.addEventListener("DOMContentLoaded", function() {
  add_wyvern();
});


function add_wyvern() {
  body = document.querySelector('body');

  if (!w){
    let wyvern    = WT_randomize();
    create_wyvern_data(wyvern);
  }

  let wyvern_type = wyvern_type_template()
  let mutations   = mutations_template();
  let statblock   = statblock_template();
  let level_table = level_table_template();

  body.innerHTML = wyvern_type
                 + '<div class="flex-half">'
                 + statblock
                 + level_table
                 + '</div>'
                 + mutations;
}
