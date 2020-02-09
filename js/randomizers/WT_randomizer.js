// This is the randomizer for Wyvern Type.
function WT_randomize() {
  let wyvern_type_text = "";
  let roll = Math.floor(Math.random() * wyvern_types.length);
  let wyvern = wyvern_types[roll];
  let type = wyvern.type;
  let description = wyvern.description;

  let textblock = "<div class='wyvern-type " + type + "'>";
  textblock += "<h2>" + type + " wyvern</h2>";
  textblock += "<p>" + description + "</p>";
  textblock += "</div>";
  wyvern_type_text += textblock;

  wyvern_type_text += create_table(wyvern.level_chart);

  return wyvern_type_text;
}
