// This is the randomizer for Elemental Agnostic Mutations.
function EAM_randomize() {
  let chosen_mutations = [];

  for (i = 0; i < mutations.length; i++) {
    let roll = Math.floor(Math.random() * 100);
    if (roll <= mutations[i][3]) {
      chosen_mutations.push(mutations[i]);
    }
  }

  return chosen_mutations;
}
