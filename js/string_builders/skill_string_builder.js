function skill_string_builder(skill_obj, proficiency) {
  // take in the skill objects
  // 1 by 1,
  // add necessary proficiency,
  // print them out in a string
  let skill_string = '';
  let keys = Object.keys(skill_obj);
  let profInt = parseInt(proficiency);

  for (i = 0; i < keys.length; i++) {
    let skill_data = skill_obj[keys[i]];
    let expertise = (skill_data[1]) ? profInt*2 : profInt;
    let skill_mod = mod(w.Stats[skill_data[0]]);
    let final_modifier_string = modDisplay(skill_mod + expertise);

    skill_string += (keys[i] + ' ' +  final_modifier_string);

    skill_string += ((i != keys.length - 1) ? ', ' : '');
  }
  return (skill_string);
}
