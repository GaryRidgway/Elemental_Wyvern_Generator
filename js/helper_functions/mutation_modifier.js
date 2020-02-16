function mutation_modifier(mutations) {
  let mods = mutations[0][4];
  let mod_keys = Object.keys(mods);

  for (let i =0; i < mod_keys.length; i++) {
    let option = mod_keys[i];
    switch (option) {
      case "abilities":
        // code block
        break;

      case "ac":
        w.AC += mods[option];
        break;

      case "profs":
        let profs = mods[option];
        let prof_keys = Object.keys(profs);

        for (let j = 0; j < prof_keys.length; j++) {
          let prof = prof_keys[j];
          // If the skill is already there and there is no expertise.
          if (w.skills[prof] && !profs[prof][1]) { /* Do nothing. */}
          else {
            w.skills[prof] = profs[prof];
          }

        }







        break;

      case "scores":
        // Scores to be modified.
        let STBM = Object.keys(mods[option]);
        let skill_array = mods[option];
        // Set up an object of skills to be added after all capped at 20 skills have been added.
        let post_add = {};
        // For every skill to be modified.
        for (let j =0; j < STBM.length; j++) {
          let skill = STBM[j];
          // If the skill cap is set, maxing the skill at 20.
          if (skill_array[skill][1]) {
            // If it is under 20 add normally.
            if ((w.Stats[skill] + skill_array[skill][0]) <= 20) {
              w.Stats[skill] += skill_array[skill][0];
            }
            // If it is above 20, set it to 20.
            else {
              w.Stats[skill] = 20;
            }
          }
          // Else if the addition is NOT capped at 20.
          else {
            // Set them up to be added later.
            post_add[skill] = skill_array[skill][0];
          }
        }

        // Add the unbound skills.
        let pa_keys = Object.keys(post_add);
        for (let j = 0; j < pa_keys.length; j++) {
          let skill = pa_keys[j];

          w.Stats[skill] += post_add[skill];
        }
        break;

      case "size":
        w.Size = mods[option];
        break;

      case "speed":
        // code block
        break;

      default:
      // code block
    }
  }
}
