// Each mutation has a name, description, effect, and percentage chance of mutating.
var base_percentage = 10;

var mutations = [
  [
    "Example Mutation",
    "Example Description",
    "Example Changes",
    0,
    {
      abilities: {
        "Ability 1": "Hello, I am an ability.",
        "Ability 2": "I am the second ability!",
      },
      ac: -2,
      profs: {
        'Intimidation': ['CHA', false],
        'Persuasion': ['CHA', false],
        'Perception': ['WIS', true]
      },
      scores: {
        STR: [2, true],
        DEX: [20, false],
        CON: [0, true],
        INT: [0, true],
        WIS: [4, true],
        CHA: [0, true]
      },
      senses: {
        'sense': [60, 'dogs'],
        'darkvision': [-9999, 'dogs']
      },
      size: 'Huge',
      speed : {
        fly : -20,
        climb : 0,
        burrow : 0
      }
    }
  ],
  [
    "Adaptive Carapace",
    "Sometimes, an incredible ability to manipulate appearance is present in some wyverns, with the skin beneath their scales having the ability to mottle its color and texture. This wyvern has the ability to camouflage in to various environments such as mountain hills, grassy plains, or vast deserts.",
    "This wyvern gains the ability to cast the 'Invisibility' spell once per day with this trait and regains the ability to do so when it finishes a long rest.",
    base_percentage,
    {
      abilities: {
        "Adaptive Carapace": "This wyvern gains the ability to cast the 'Invisibility' spell once per day with this trait and regains the ability to do so when it finishes a long rest.",
      },
    }
  ],
  [
    "Adherent Grasp",
    "This wyvern has increased muscle strength and differeng talon tensile strengths, which can give a wyvern great ability to scale sheer faces, and even move up entire mountains stealthily by holding on to the rocky faces without being detected.",
    "This wyvern gains proficiency in Stealth, and a Climbing Speed of 30 ft.",
    base_percentage,
    {
      profs: {
        'Stealth': ['DEX', false]
      },
      speed: {
        climb: 30
      }
    }
  ],
  [
    "Aquatic Adaptation",
    "Some mutations can completely change the natural homes of a wyvern. This wyvern has an affinity for the sea, growing a set of Gills, a Dorsal Fin, and a Caudal Fin on its tail similar to that of a Shark.",
    "This wyvern gains a Swimming Speed of 60 feet, and it can breathe Air and Water.",
    base_percentage,
    {
      abilities: {
        "Aquatic Adaptation": "This wyvern can breathe Air and Water."
      },
      speed: {
        swim: 60
      }
    }
  ],
  [
    "Arcane Skeleton",
    "This wyvern has retained some of the magics used to incubate it, and its bones are now comprised of obsidian glass. Its skeleton has been enhanced, and is considered magical.",
    "Any melee attack made by this wyvern is considered magical for the purposes of overcoming resistances.",
    base_percentage,
    {
      abilities: {
        "Arcane Skeleton": "Any melee attack made by this wyvern is considered magical for the purposes of overcoming resistances.",
      },
    }
  ],
  [
    "Armor of Pangol",
    "This wyvern is kin to the well defended Pangolin, and as such its scales might grow larger on their body, creating a natural armor plating often paired with a wider and equally armored tail. While slowed down considerably, it makes up for its lessened aerobatic accuity with one of the most robust carapaces observed in nature.",
    "This wyvern's Flying speed is reduced by 30 feet, and its AC is increased by 3",
    base_percentage,
    {
      ac: 3,
      speed : {
        fly : -30
      }
    }
  ],
  [
    "Avian Ancestry",
    "This wyvern has awakened its Avian Ancestry. Bird like features, such as feathers, may present themselves on mutated wyverns. They can range from full coverings to appearing only along joints and any amount in between. They vary in size, shape, and color, and physiology, so each avian mutation is uniquely different. These mutations result in lighter overall body structures, granting a more nimble frame that becomes more brittle, but much more agile in the process.",
    "This wyvern decreases its Constitution by 1. Additionally, this wyvern increases its Dexterity by 1 to a maximum of 20, and its Flying Speed by 10.",
    base_percentage,
    {
      scores: {
        DEX: [1, true],
        CON: [-1, true],
      },
      speed : {
        fly : 10,
      }
    }
  ],
  // [
  //   "Bomb Door",
  //   "Bomb Door",
  //   "",
  //   1,
  //   {
  //     abilities: {
  //       "Bomb Door": "Bomb Door.",
  //     },
  //   }
  // ],
  [
    "Colossal Wingspan",
    "Some wyverns have mutations that expand their wings to those of colossal proportions. This wyvern has been bestowed with such a mutation, and as such has a wingspan twice as large as a normal wyvern.",
    "This wyvern counts as one size larger when determining its wingspan. Additionally, its Flying speed is increased by 40.",
    base_percentage,
    {
      abilities: {
        "Colossal Wingspan": "This wyvern counts as one size larger when determining its wingspan."
      },
      speed : {
        fly : 40
      }
    }
  ],
  [
    "Delta Wings",
    "Variations in wing styles reflect the amount of drag and stability imposed on the wyverns aerobatic features. This wyvern has Delta Wings that have folds that carry down each side of the spine and through to the tail, allowing them to be more stable in flight at higher speeds.",
    "This wyvern has increases its Dexterity by 1 to a maximum of 20, and its Flying Speed by 10.",
    base_percentage,
    {
      scores: {
        DEX: [1, true],
      },
      speed : {
        fly : 10,
      }
    }
  ],
  [
    "Draconic Sentience",
    "This wyvern has been affected by direct magical manipulation during its incubation, manifesting as heightened mental acuity. The result of this magical influence is not only sentience and a conscious self-awareness, but a personality unique and all its own. Where one wyvern might use its power to subjugate others, some may decide upon more benevolent actions, with all manner of temperaments a possibility.<br/><br/>Additionally, with this increased self awareness some wyverns make the decision to become magical practitioners. Whether manifesting through their draconic bloodline, intense study, or through divine means, this can greatly alter the way a wyvern interacts with the world.",
    "Roll a d10 and add 7 for each of its Intelligence, Wisdom, and Charisma Ability Scores.<br/><br/>These are its new respective Ability Scores. Additionally, if this wyvern decides to become a spellcaster, it must first meet certain criteria. As it ages, it must train to embrace its magical abilities, sacrificing two Ability Score Increases at levels 4, 8, 12, 16, or 19 to be able to cast spells. After selecting either Cleric, Sorcerer, or Wizard, it must also meet the Ability Score requirements as stated in the multiclassing rules of the Players Handbook. Provided it meets all class prerequisites, this wyvern will use the relevant spellcasting Ability Modifiers when casting spells. It gains spell slots, prepares spells, and chooses spells as if it were a spellcaster of the chosen type with a level equivalent to half the wyvern's level, rounded down, plus one.",
    base_percentage*2,
    {
      abilities: {
        "Draconic Sentience": "This wyvern has Draconic Sentience, as described below.",
      },
    }
  ],
  [
    "Glauceal Wings",
    "Variations in wing styles reflect the amount of drag and stability imposed on the wyverns aerobatic features. This wyvern has Glauceal Wings, granting it two smaller sets of stabilizer wings, one pair on its hind legs and the other pair halfway down its tail, granting them incredible agility during flight.",
    "This wyvern increases its Dexterity by 2 to a maximum of 20, its AC by 2, and its Flying Speed by 10 feet.",
    base_percentage,
    {
      ac: 2,
      scores: {
        DEX: [2, true],
      },
      speed : {
        fly : 10
      }
    }
  ],
  [
    "Igneous Scales",
    "This wyvern's scales are unnaturally colored and textured, almost uniformly maroon with black shards at their edges. When this wyvern is exposed to high amounts of heat, the glossy sheen of the igneous scales deepens to a dull black as they they absorb and radiate this energy.",
    "This wyvern increases its AC by 2 when its current HP is over 50% of its maximum HP, rounded down. Additionally, this wyvern heals for 1/4 of any fire damage it takes when it is below 50% of its maximum HP, rounded down.",
    base_percentage,
    {
      abilities: {
        "Igneous Scales": "This wyvern increases its AC by 2 when its current HP is over 50% of its maximum HP, rounded down. Additionally, this wyvern heals for 1/4 of any fire damage it takes when it is below 50% of its maximum HP, rounded down."
      },
    }
  ],
  [
    "Blessed Essence",
    "This wyvern appears from birth as a pure illustrious white with variations of black mottling infrequently dotting its wing membranes. Its normally bloodshot and sickly yellow eyes appear instead as cloudy and gray with bright red irises. Its general demeanor remains almost the same, with the exception of a more transparent respect and gentle affection given to riders who have earned its trust.",
    "This wyvern's aura now radiates healing energy. It loses its Essence Siphon and instead gains a Blessed Essence. This wyvern may now, as an action, choose to heal 1 target within 30 feet. The target regains a number of hit points equal to the amount determined by the Essence Siphon column of the Death Wyvern Level Table.",
    base_percentage,
    {
      abilities: {
        "Blessed Essence": "This wyvern loses its Essence Siphon and instead gains a Blessed Essence."
      },
      breath_weapon : {
        'Blessed Essence': "A willing creature of this wyvern's choice that it can see within 30 ft regains a number of hit points equal to the amount determined by the Essence Siphon column of the Death Wyvern Level Table. This has no effect on undead or constructs."
      }
    }
  ],
  [
    "Ionic Warp",
    "This wyvern is briefly surrounded by bolts of lightning that lance and strike violently outward towards a signle point. Instantaneously, it reappears as spectacular spears of electricity arc between its previous location and the point it has chosen.",
    "This wyvern is able to teleport up to 80 feet to an unoccupied point it can see as a bonus action. It may do so once per day with this trait and regains all uses of this ability on a long rest.",
    base_percentage,
    {
      abilities: {
        "Ionic Warp": "This wyvern is able to teleport up to 80 feet to an unoccupied point it can see as a bonus action. It may do so once per day with this trait and regains all uses of this ability on a long rest."
      }
    }
  ],
  [
    "Magmatic Ejection",
    "This wyvern has an incredibly large barreled chest capable of storing molten rock. This wyvern might use this molten rock for anything from furnishing its lair to supplementing its breath attack.",
    "This wyvern can use stored magma in this chest cavity as an Action to spew magma at a point they can see within a 30 foot range. Any creatures within a 10 foot radius around this point must make a {{SAVE_DC}} Dexterity saving throw, taking 14 (4d6) fire damage on a failed save or half as much on a success. The area around this point becomes difficult terrain for 1 minute, and any creature who starts its turn there takes 3 (1d6) fire damage. This wyvern generates enough magma a day to use this ability once per day with this trait and regains all uses of this ability when it finishes a long rest. Alternatively, it can consume a chestful of magma from a viable source as an action to recharge this ability.",
    base_percentage,
    {
      abilities: {
        "Magmatic Ejection": "This wyvern can use stored magma in this chest cavity as an Action to spew magma at a point they can see within a 30 foot range. Any creatures within a 10 foot radius around this point must make a {{SAVE_DC}} Dexterity saving throw, taking 14 (4d6) fire damage on a failed save or half as much on a success. The area around this point becomes difficult terrain for 1 minute, and any creature who starts its turn there takes 3 (1d6) fire damage. This wyvern generates enough magma a day to use this ability once per day with this trait and regains all uses of this ability when it finishes a long rest. Alternatively, it can consume a chestful of magma from a viable source as an action to recharge this ability."
      }
    }
  ],
  [
    "Mane of Ice",
    "This wyvern has a large crystalline mane of pointed shards that lance outward from the back of its skull and extend down the spine. Its skin is semi-translucent, revealing its internal blue-hued muscle structure and off-white skeleton beneath its frozen carapice.",
    "This wyvern's naturally spiked hide protects it from being Grappled, imposing disadvantage on any Strength (Athletics) check to restrain it. Additionally, this wyvern may propel its spines outward at high velocity as an Action once per day. Any creatures within a 30 foot radius around this wyvern must make a Dexterity saving throw, taking 14 (4d6) cold damage on a failed save or half as much on a success. This wyvern regains all uses of this ability when it finishes a long rest.",
    base_percentage,
    {
      abilities: {
        "Mane of Ice": "This wyvern's naturally spiked hide protects it from being Grappled, imposing disadvantage on any Strength (Athletics) check to restrain it. Additionally, this wyvern may propel its spines outward at high velocity as an Action once per day. Any creatures within a 30 foot radius around this wyvern must make a {{SAVE_DC}} Dexterity saving throw, taking 14 (4d6) cold damage on a failed save or half as much on a success. This wyvern regains all uses of this ability when it finishes a long rest."
      }
    }
  ],
  [
    "Mosasauric Jaws",
    "This wyvern's face is abnormally elongated to contain a more robust skeletal structure. Inside its mouth is a secondary upper jaw with serrated and heavily angled teeth. When this wyvern bites down, the inner jaw is capable of raking flesh off of any creature unfortunate to be caught in its maw.",
    "This wyvern's bite attack deals an additional 7 (2d6) piercing damage on a hit.",
    base_percentage,
    {
      abilities: {
        "Mosasauric Jaws": "This wyvern's bite attack deals an additional 7 (2d6) piercing damage on a hit."
      },
    }
  ],
  [
    "Mydo'Kin Scales",
    "Additional muscle and scale growth can lead to imposing wyvern mutations that make them much more agile in the air. Several of the scales on this wyvern grow to the size of tower shields, and may be raised swiftly to create large amounts of drag when flying. This ability can be used to swiftly maneuver while flying, allowing for acute directional changes. Additionally, these scales can be rasised simply for their imposing size and grandeur, creating an incredibly intimidating presence.",
    "This wyvern gains proficiency in Intimidation. Additionally, it gains the ability to take the 'Dodge' action as a bonus action twice per day with this trait and regains all uses of this ability when it finishes a long rest.",
    base_percentage,
    {
      abilities: {
        "Mydo'Kin Scales": "This wyvern may take the 'Dodge' action as a bonus action twice per day with this trait and regains all uses of this ability when it finishes a long rest."
      },
      profs: {
        'Intimidation': ['CHA', false]
      },
    }
  ],
  [
    "Ocular Acuity",
    "This wyvern has grown four eyes in straight lines on each side of its head to replace the two a wyvern would normally have. These eight eyes have no pupils to be seen, and are instead one solid color of your choosing. These eyes, while useful for taking in their surroundings, often give wyverns a menacing appearance.",
    "This wyvern gains expertise in Perception and proficiency in Intimidation.",
    base_percentage,
    {
      profs: {
        'Intimidation': ['CHA', false],
        'Perception': ['WIS', true]
      },
    }
  ],
  [
    "Resonant Quakes",
    "This wyvern's attunement with the earth's resonant frequency allows it to manipulate the naural harmonics of the world around it. By concentrating, it can cause the ground to begin shaking and cracking ",
    "This wyvern may, as an Action, violently shake the ground in a 30ft radius centered on itself for 1 minute. At the start of each of their turns, each creature in this radius must make a Dexterity saving throw. On a failed save, an affected target's speed is halved, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.",
    base_percentage,
    {
      abilities: {
        "Resonant Quakes": "This wyvern may, as an Action, violently shake the ground in a 30ft radius centered on itself for 1 minute. At the start of each of their turns, each creature in this radius must make a {{SAVE_DC}} Dexterity saving throw. On a failed save, an affected target's speed is halved, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted."
      },
    }
  ],
  [
    "Rock Wyvern Basic",
    "{{DO NOT DISPLAY}}",
    "",
    base_percentage/base_percentage * 100,
    {
      senses: {
        'darkvision': [-9999,''],
        'blindsight': [60, ' ft.'],
        'tremorsense': [120, ' ft.']
      },
      speed: {
        fly: -9999,
        burrow: 80
      }
    }
  ],
  [
    "Subdermal Magma",
    "Beneath the surface of this wyvern's skin emanates a bright and powerful orange light from between its scales. Upon close inspection, this light appears dynamic as subdermal magma flows beneath its shard like scales. The viscous lava makes this wyvern's skin almost unbearable to touch, and experienced riders use incredibly thick leather saddles to protect themselves from exposure.",
    "The natural glow of this wyvern's subdermal magma sheds bright light in a 10 foot radius and dim light for an additional 10 feet. If this wyvern takes piercing or slashing damage from a melee attack, glowing magma pours from the wound onto its attacker. The attacker takes 1d6 fire damage from this effect.",
    base_percentage,
    {
      abilities: {
        "Subdermal Magma": "This wyvern sheds bright light in a 10 foot radius and dim light for an additional 10 feet. If this wyvern takes piercing or slashing damage from a melee attack, glowing magma pours from the wound onto its attacker. The attacker takes 1d6 fire damage from this effect.",
      }
    }
  ],
  [
    "Swept Wings",
    "Variations in wing styles reflect the amount of drag and stability imposed on the wyverns aerobatic features. This wyvern has Swept Wings, granting them a smaller set of stabilizer wings on their back legs, allowing them to be more agile during flight.",
    "This wyvern has increases its Dexterity by 1 to a maximum of 20, and increases its AC by 1.",
    base_percentage,
    {
      ac: 1,
      scores: {
        DEX: [1, true],
      },
    }
  ],
  [
    "Titanous Form",
    "This wyvern will have increased metabolisim and muscle density in their youth, which might cause it to reach a titanous size by adulthood, often growing up to twice as large as a normal wyvern. This, while it makes them proportionally slower in flight and less aerobatic compared to their smaller kin, gives them incredible strength and an astoundingly fortified constitution.",
    "This wyvern doubles in size and now has the Size Category of 'Huge'. Its AC is decreased by 2, and its Dexterity is decreased by 2. Additionally, its Strength, Maximum Strength, Constitution, and Maximum Constitution increase by 3",
    base_percentage,
    {
      ac: -2,
      scores: {
        STR: [3, false],
        DEX: [-2, true],
        CON: [3, false]
      },
      size: 'Huge',
    }
  ],
  [
    "Vicious Crown",
    "While almost all kin of draconic ancestry have menacing horns across their forms, one mutation for wyverns allows them to grow incredibly imposing horns of all shapes and sizes. This wyvern has larger and more destructive horns than most, crowning it with a might unbeknownst to the rest of its kin.",
    "If this wyvern moves at least 10 feet straight toward a target and then hits it with a melee attack on the same turn, the wyvern can then strike the target with its horns as well, and the target takes an extra 9 (2d8) piercing damage. If the target is a creature of a size category equal to or less than this wyvern, it must succeed on a contested athletics check with this wyvern or be pushed up to 10 feet away and knocked prone.",
    base_percentage,
    {
      abilities: {
        "Vicious Crown": "If this wyvern moves at least 10 feet straight toward a target and then hits it with a melee attack on the same turn, the wyvern can then strike the target with its horns as well, and the target takes an extra 9 (2d8) piercing damage. If the target is a creature of a size category equal to or less than this wyvern, it must succeed on a contested athletics check with this wyvern or be pushed up to 10 feet away and knocked prone."
      },
    }
  ],
];
