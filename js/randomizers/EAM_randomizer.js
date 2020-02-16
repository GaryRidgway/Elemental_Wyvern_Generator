// This is the randomizer for Elemental Agnostic Mutations.
function EAM_randomize() {
  let chosen_mutations = [];
  let excluded_mutations = w.wyvern.excluded_mutations;

  for (i = 0; i < mutations.length; i++) {
    let mutation = mutations[i];
    let roll = Math.floor(Math.random() * 100);
    let mut_name = mutation[0];

    if (roll < mutation[3] && excluded_mutations.indexOf(mut_name) < 0) {
      chosen_mutations.push(mutations[i]);
    }
  }

  return chosen_mutations;
}
