// This is the randomizer for Wyvern Type.
function WT_randomize() {
  let wyvern_type_text = "";
  let roll = Math.floor(Math.random() * wyvern_types.length);
  let wyvern = wyvern_types[roll];

  let wyvern_object = {
    wyvernTypeData : wyvern
  };

  return wyvern_object;
}
