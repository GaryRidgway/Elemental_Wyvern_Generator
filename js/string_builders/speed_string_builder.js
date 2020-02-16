function speed_string_builder(speeds) {
  let speeds_keys = Object.keys(speeds);
  let speed_string = '';

  for (let i = 0; i < speeds_keys.length; i++) {
    const speed = speeds_keys[i];
    if (speeds[speed] > 0) {
      if (speed == 'walk') {
        speed_string += speeds[speed] + ' ft.';
      }
      else {
        speed_string += ((i != speeds_keys.length) ? ', ' : '');
        speed_string += speed + ' ' + speeds[speed] + ' ft.';
      }
    }
  }

  return speed_string;
}
