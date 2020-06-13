function loadSaveState(name, data = 'EWG-DATA') {
  if (data == 'EWG-DATA') {
		try {
      data = JSON.parse(localStorage.getItem('EWG-DATA'));
		}

		// If anything goes wrong, there is no data to load.
		catch(err) {
		  alert('Sorry, there is no data to load.');
		  return;
		}
  }

  if (Object.keys(data).includes(name)) {
    // Check if there is no data to load.
    if (data == null) {
      cl('Sorry, there is no data to load.');
      return;
    }

    else {
      display.innerHTML = data[name];
    }
  }

  else {
    cl('There is no wyvern with that name.');
    return;
  }
}
