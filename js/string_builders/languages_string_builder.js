function languages_string_builder(lang_array) {
  let language_string = '';

  for (i = 0; i < lang_array.length; i++) {
    language_string += lang_array[i];

    if (i != lang_array.length-1) {
      language_string += ", ";
    }
  }

  return language_string;
}
