function saveState(name) {
  let savedContent = {};

  try {
    savedContent = JSON.parse(localStorage.getItem('EWG-DATA'));
  }

  // If anything goes wrong, there is no data to load.
  catch (err) {
    cl('No previous data to load');
    return;
  }

  let wyvern = display.innerHTML;

  savedContent[name] = wyvern;

  localStorage.setItem('EWG-DATA', JSON.stringify(savedContent));
}
