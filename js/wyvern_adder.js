var body;

document.addEventListener("DOMContentLoaded", function() {
  add_wyvern();
});


function add_wyvern() {
  body = document.querySelector('body');

  body.innerHTML = WT_randomize() + EAM_randomize();
  // body.innerHTML = create_table(fire_wyvern_level_chart);
}
