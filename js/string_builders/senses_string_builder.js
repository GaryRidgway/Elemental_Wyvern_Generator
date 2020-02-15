function senses_string_builder(sense_array) {
  let sense_string = '';

  for (i = 0; i < sense_array.length; i++) {
    sense_string += sense_array[i];

    if (i != sense_array.length-1) {
      sense_string += ", ";
    }
  }

  return sense_string;
}
