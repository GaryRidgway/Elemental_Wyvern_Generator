var w;

function create_wyvern_data(wyvernData) {
    let wyvernTypeData = wyvernData;
    // Create a Wyvern Variable Dictionary to hold the wyvern Data.
    w = {};
    w.wyvern = wyvernData;
    w.level = 1;
    w.Stats = {
    STR : 15,
    DEX : 10,
    CON : 15,
    INT : 5 ,
    WIS : 12,
    CHA : 6
    };
    w.Type = wyvernTypeData.type;
    w.Size = 'Large';
    w.AC = 13;
    w.Speeds = {
        walk : 20,
        fly  : 80,
    };
    // Breath Weapon Damage Type.
    w.BWDT = wyvernTypeData.breath_weapon_damage_type;
    w.special_ability_title = wyvernTypeData.special_ability_title;
    w.special_ability_description = wyvernTypeData.special_ability_description;
    w.special_ability_type = wyvernTypeData.special_ability_type;
    w.proficiency = wyvernTypeData.level_chart[w.level][1];
    w.languages = [
    "&#8212;"
    ];
    // Each skill has the skill value and whether it has expertise.
    w.skills = {
    'Perception' : ['WIS', false]
    };
    w.abilities = {};
    w.senses = {
        'darkvision': [60, 'ft.'],
        'passive Perception': [(mod(w.Stats.WIS) + 10 + ((w.skills['Perception'] != undefined) ? parseInt(w.proficiency) : 0)), '']
    }

    w.mutations = EAM_randomize();

    mutation_modifier(w.mutations);

    w.hp = mod(w.Stats.CON) * 15;
    w.saveDC = 8 + mod(w.Stats.STR) + parseInt(w.proficiency);
}
