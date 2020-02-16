function senses_string_builder(senses) {
  let senses_keys = Object.keys(senses);
  let sense_string = '';

  for (let i = 0; i < senses_keys.length; i++) {
    const sense = senses_keys[i];
    if (senses[sense][0] > 0) {
      if (i != 0 && senses[senses_keys[i -1]][0] > 0) {
        sense_string += ((i != senses_keys.length) ? ', ' : '');
      }
      sense_string += sense + ' ' + senses[sense][0] + ' ' + senses[sense][1];
    }
  }

  return sense_string;
}
