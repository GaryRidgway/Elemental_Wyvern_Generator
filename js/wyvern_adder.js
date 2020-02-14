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

  let mutations = mutations_template();
  let statblock = statblock_template();

  body.innerHTML = w.wyvern.wyvernTypeText
                 + '<div class="flex-half">'
                 + statblock
                 + w.wyvern.levelTable
                 + '</div>'
                 + mutations;
}
