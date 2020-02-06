// This is the randomizer for Elemental Agnostic Mutations.
function EAM_randomize() {
  let wyvern_trait_text = "<div class='element-agnostic-mutations'>";


  for (i = 0; i < mutations.length; i++) {
    let roll = Math.floor(Math.random() * 100);
    if (roll <=10) {
      let textblock = "<div class='mutation-" + i + "'>";
      textblock += "<h2>" + mutations[i][0] + "</h2>";
      textblock += "<p>" + mutations[i][1] + "</p>";
      textblock += "<p>" + mutations[i][2] + "</p>";
      textblock += "</div>";
      wyvern_trait_text += textblock;
    }
  }

  wyvern_trait_text += "</div>";

  return wyvern_trait_text;
}
