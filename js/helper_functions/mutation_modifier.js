function mutation_modifier(mutations) {
  if (mutations && mutations[0] && mutations[0][4]) {

    for (let k = 0; k < mutations.length; k++) {
      const mut = mutations[k];

      let mods = mut[4];
      let mod_keys = Object.keys(mods);

      for (let i = 0; i < mod_keys.length; i++) {
        let option = mod_keys[i];
        switch (option) {
          case "abilities":
            let abilities = mods[option];
            let ability_keys = Object.keys(mods[option]);
            for (let j = 0; j < ability_keys.length; j++) {
              const ability = ability_keys[j];
              if (w.abilities[ability]) {
                w.abilities[ability] += abilities[ability];
              }
              else {
                w.abilities[ability] = abilities[ability];
              }
            }
            break;

          case "ac":
            w.AC += mods[option];
            break;

          case "breath_weapon":
            let new_bw = Object.keys(mods[option])[0];
            w.special_ability_title = new_bw;
            w.special_ability_description = mods[option][new_bw];
            break;

          case "profs":
            let profs = mods[option];
            let prof_keys = Object.keys(profs);

            for (let j = 0; j < prof_keys.length; j++) {
              let prof = prof_keys[j];
              // If the skill is already there and there is no expertise.
              if (w.skills[prof] && !profs[prof][1]) { /* Do nothing. */ }
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
            for (let j = 0; j < STBM.length; j++) {
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

          case "senses":
            let senses = mods[option];
            let sense_keys = Object.keys(mods[option]);
            for (let j = 0; j < sense_keys.length; j++) {
              const sense = sense_keys[j];
              if (w.senses[sense]) {
                w.senses[sense][0] += senses[sense][0];
              }
              else {
                w.senses[sense] = senses[sense];
              }
            }
            break;

          case "size":
            w.Size = mods[option];
            break;

          case "speed":
            let speeds = mods[option];
            let speed_keys = Object.keys(mods[option]);
            for (let j = 0; j < speed_keys.length; j++) {
              const speed = speed_keys[j];
              if (w.Speeds[speed]) {
                w.Speeds[speed] += speeds[speed];
              }
              else {
                w.Speeds[speed] = speeds[speed];
              }
            }
            break;

          default:
          // code block
        }
      }
    }
  }
}
