function speed_string_builder(speeds) {
  let speeds_keys = Object.keys(speeds);
  let speed_string = '';

  for (let i = 0; i < speeds_keys.length; i++) {
    const speed = speeds_keys[i];
    if (speed == 'walk') {
      speed_string += speeds[speed] + ' ft.';
    }
    else {
      speed_string += speed + ' ' + speeds[speed] + ' ft.';
    }

    speed_string += ((i != speeds_keys.length - 1) ? ', ' : '');
  }

  return speed_string;
}
