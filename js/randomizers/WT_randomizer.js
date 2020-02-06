// This is the randomizer for Wyvern Type.
function WT_randomize() {
  let wyvern_type_text = "";
  let roll = Math.floor(Math.random() * wyvern_types.length);
  let type = wyvern_types[roll][0];

  let textblock = "<div class='wyvern-type-" + type + "'>";
  textblock += "<h2>" + type + " wyvern</h2>";
  textblock += "</div>";
  wyvern_type_text += textblock;

  return wyvern_type_text;
}
