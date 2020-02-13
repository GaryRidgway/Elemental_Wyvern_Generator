// Simplified console log.
function cl(log) {
  var caller_line = (new Error).stack.split("\n")[2].split(' ')[6];
  console.log(log, caller_line);
}

// Calculate the modifier from the stat.
function mod(STAT) {
  return Math.floor((STAT - 10) / 2);
}

// Create a modifier string based on positive or negative.
function modDisplay(MOD) {
  return (MOD > -1) ? ('+' + MOD) : MOD.toString();
}

// Calculate a string for statistic displaying with a display of ABILITY (+/-MOD).
function statDisplay(STAT) {
  let modifier = mod(STAT);
  let modString = modDisplay(modifier);

  return STAT + ' (' + modString + ')';
}
