// Each wyvern has an elemental type, and a special ability that goes with that type.
// Additionally, each wyvern starts with a special ability, and basic visual traits.
var wyvern_types = [
  {
    type: "fire",
    description: "Fire Wyverns usually sport red, black, or brown colored hides, but have been known to show a mixture of the three. Their wing membranes may feature subtle burnished gold colors, or, rarely, a vibrant red-orange mix. Fire Wyverns have the boniest spines of the wyvern family, and often feature brows made of small horns. More spines dot their wings, jaw, and back. The tip of their snouts are hooked, resembling common birds of prey. Much to their namesake, fire wyverns are notorious for their fiery temperament, both destructive and unpredictable in comparison to their kin. Only someone of extremely strong willpower will be able to tame a fire wyvern, and forming a bond of trust is often even more difficult than the taming itself.",
    level_chart: fire_wyvern_level_chart,
    breath_weapon_damage_type : 'fire',
    special_ability_title : 'Fire Breath (Recharge 5-6)',
    special_ability_description : 'This wyvern exhales fire in a 30-foot cone. Each creature in that area must make a {{SAVE_DC}} (8 + proficiency bonus + Strength modifier) Dexterity saving throw, taking fire damage equal to the amount determined by the Breath Weapon column of the Fire Wyvern Level Table on a failed save, or half as much damage on a successful one.',
    special_ability_type: 'action'
  },
  {
    type: "ice",
    description: "Ice Wyverns often manifest with their hide being somewhere along the color spectrum of light blue to white. Their wing membrane is often the same color as their main body, giving them incredible natural camouflage in colder climates. They are the most avian of the Wyverns, possessing a thin snout almost like that of a beak. Ice wyverns also have a crown of jagged horns that crest the top of its head like a crown of ice, giving them an almost regal appearance. Ice wyverns are often the most tempered of any of their kin, but when enraged can be the most ruthless. The greatest of ice wyvern riders have learned how to communicate with their wyverns to make sure that not only their goals are met, but those of their wyverns are met as well.",
    level_chart: ice_wyvern_level_chart,
    breath_weapon_damage_type : 'cold',
    special_ability_title : 'Cold Breath (Recharge 5-6)',
    special_ability_description : 'This wyvern exhales an icy blast in a 30-foot cone. Each creature in that area must make a {{SAVE_DC}} (8 + proficiency bonus + Strength modifier) Constitution saving throw, taking cold damage equal to the amount determined by the Breath Weapon column of the Lightning Wyvern Level Table on a failed save, or half as much damage on a successful one.',
    special_ability_type: 'action'
  },
  {
    type: "death",
    description: "Death wyverns almost exclusively appear in dark greys or blacks, with distinctive fluorescent blue, white, green, or red membranes on their neck down to their chest that expand when using their Essence Siphon. Their wing membrane often mimics the same fluorescent membrane as those on its neck. Their head is very wide in comparison to other wyverns with a thick neck and tail both of almost the same width. A pair of large scaled plates protrudes from the front of their snout with a slightly backward slant, and their eyes are often bloodshot and dilated. Death wyverns often carry with them an aura of necrotic energy, with most plant life shriveling in their vicinity. Additionally, they also do not feed like most of their other wyvern kin, opting to not consume physical sustenance, but instead draining the life force of others and using that to maintain their form. Often apathetic and broken of spirit, death wyverns are the easiest to tame, but some of the hardest to keep because of their sheer necrotic presence. There are however rumors of these wyverns who have transcended their path of death, and have become benevolent beings, but these have never been able to be proven true, and death wyverns should be treated with the utmost caution.",
    level_chart: death_wyvern_level_chart,
    breath_weapon_damage_type : 'necrotic',
    special_ability_title : 'Essence Siphon (Recharge 5-6)',
    special_ability_description : 'This wyvern chooses a humanoid that it can see within 60 feet. The target must succeed on a {{SAVE_DC}} (8 + proficiency bonus + Strength modifier) Constitution saving throw, taking necrotic damage equal to the amount determined by the Essence Siphon column of the Death Wyvern Level Table on a failed save, or half as much damage on a successful one. This wyvern regains hit points equal to half the amount of necrotic damage dealt. The target must then make a {{SAVE_DC}} (8 + proficiency bonus + Strength modifier) Constitution saving throw at the end of each of its turns. Until the target succeeds, they take the same amount of necrotic damage again each turn and this wyvern regains hit points equal to half of that amount.',
    special_ability_type: 'action'
  },
  {
    type: "lighning",
    description: "Lightning Wyverns often occur in shades of blue or purple, often with jagged streaks of white that break through these colors in erratic ways. Their wing membrane is often blinding white, but a myriad of light blues and yellows have also been seen. They have narrow, triangular faces with jagged cheekbones and large eyes. The lightning wyvern is the only wyvern to have small tendrils that protrude from the back of their skull on either side, and it is said that these are the parts of its body that conducts electricity. Some have even fabled that these float through the air and crackle with electricity when the wyvern is in the presence of vicious storms. Lightning wyverns can be extremely anxious creatures, or extremely calm creatures. This seems to always be tied to how far away, or close to the ocean it is, preferring the raging waters and its myriad of storms.",
    level_chart: lightning_wyvern_level_chart,
    breath_weapon_damage_type : 'lightning',
    special_ability_title : 'Lightning Breath (Recharge 5-6)',
    special_ability_description : 'This wyvern exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a {{SAVE_DC}} (8 + proficiency bonus + Strength modifier) Dexterity saving throw, taking lightning damage equal to the amount determined by the Breath Weapon column of the Lightning Wyvern Level Table on a failed save, or half as much damage on a successful one.',
    special_ability_type: 'action'
  },
  {
    type: "rock",
    description: "Rock wyverns often camouflage themselves in with mountainous or arid landscapes, as their hides are often dusty browns and greys. Rock wyverns are vastly different than other wyverns, as they have no wings, no eyes, and therefore no sense of sight. However, their ability to sense the earth and feel the vibrations of the world around them completely negates this when they are on the ground. Additionally, they have an incredible ability to burrow, moving almost as fast as its kin can fly. They have large and angular lower jaws complete with many small obsidian teeth that have evolved for viciously tearing through earth as it burrows. Its claws are also tipped with obsidian, adding to its ability to burrow and its incredibly menacing form. Rock wyverns have the smoothest body of all wyverns and they have large flaps of skin that fold down over their nostrils to protect them when they burrow through the ground. Rock wyverns are often very intelligent creatures, and are especially keen on being tamed by those with a kind heart or a gentle disposition.",
    level_chart: rock_wyvern_level_chart,
    breath_weapon_damage_type : null,
    special_ability_title : 'Non-Magical Damage Reduction',
    special_ability_description : 'Bludgeoning, piercing, and slashing damage that this wyvern takes from non-magical weapons is reduced by the amount shown in the Non-Magical Damage Reduction column of the Rock Wyvern Level Table.',
    special_ability_type: 'ability'
  }
];
