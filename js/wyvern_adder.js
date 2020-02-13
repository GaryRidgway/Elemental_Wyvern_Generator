var body;

document.addEventListener("DOMContentLoaded", function() {
  add_wyvern();
});


function add_wyvern() {
  body = document.querySelector('body');
  let wyvern    = WT_randomize();
  let mutations = EAM_randomize();
  let statblock = statblock_create(wyvern.wyvernTypeData);

  body.innerHTML = wyvern.wyvernTypeText
                 + '<div class="flex-half">'
                 + statblock
                 + wyvern.levelTable
                 + '</div>'
                 + mutations;

  // body.innerHTML = create_table(fire_wyvern_level_chart);
  // body.innerHTML = wide_statblock_template;
}
