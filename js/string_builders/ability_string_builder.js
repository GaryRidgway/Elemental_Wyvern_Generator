function ability_string_builder(abilities) {
  let ability_keys = Object.keys(abilities);
  let ability_string = '';
  for (let i = 0; i < ability_keys.length; i++) {
    const ability = ability_keys[i];

    ability_string += '\
      <div class="property-block">\
        <h4>' + ability + '.</h4>\
        <p>' + abilities[ability] + '</p>\
      </div> <!--property block -->\
    ';
  }

  return ability_string;
}
