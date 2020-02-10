var body;

document.addEventListener("DOMContentLoaded", function() {
  add_wyvern();
});


function add_wyvern() {
  body = document.querySelector('body');
  let wyvern = WT_randomize()

  body.innerHTML = wyvern.wyvernTypeText
                 + wide_statblock_template
                 + wyvern.levelTable
                 + EAM_randomize();

  // body.innerHTML = create_table(fire_wyvern_level_chart);
  // body.innerHTML = wide_statblock_template;
}
