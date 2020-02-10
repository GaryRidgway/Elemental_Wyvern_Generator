// Simplified console log.
function cl(log) {
  console.log(log);
}

// Calculate the modifier from the stat.
function mod(STAT) {
  return Math.floor((STAT - 10) / 2);
}

// Calculate a string for statistic displaying with a display of ABILITY (+/-MOD).
function statDisplay(STAT) {
  let modifier = mod(STAT);
  let prefix = '';
  if (modifier > 0) {
    prefix = '+';
  }

  return STAT + ' (' + prefix + modifier + ')';
}
