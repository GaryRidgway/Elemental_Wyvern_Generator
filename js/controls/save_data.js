function saveState(name) {
  let savedContent = {};

  try {
    savedContent = JSON.parse(localStorage.getItem('EWG-DATA'));
  }catch (err) {}

  let wyvern = wyvern_display.innerHTML;

  savedContent[name] = wyvern;

  localStorage.setItem('EWG-DATA', JSON.stringify(savedContent));
}
