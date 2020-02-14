function statblock_template() {
  var statblock_template = '\
  <div class="stat-block wide">\
    <hr class="orange-border" />\
    <div class="section-left">\
      <div class="creature-heading">\
        <h1>' + w.Type + ' Wyvern</h1>\
        <h2>Level ' + w.level + ' ' + w.Size + ' dragon, unaligned</h2>\
      </div> <!-- creature heading -->\
      <svg height="5" width="100%" class="tapered-rule">\
        <polyline points="0,0 400,2.5 0,5"></polyline>\
      </svg>\
      <div class="top-stats">\
        <div class="property-line first">\
          <h4>Armor Class</h4>\
          <p>' + w.AC + ' (13 + Dexterity modifier) (natural armor)</p>\
        </div> <!-- property line -->\
        <div class="property-line">\
          <h4>Hit Points</h4>\
          <p>30</p>\
        </div> <!-- property line -->\
        <div class="property-line last">\
          <h4>Speed</h4>\
          <p>' + w.Speed.walk + 'ft., ' + w.Speed.flyPrefix + ' ' + w.Speed.fly + w.Speed.extra + 'ft.</p>\
        </div> <!-- property line -->\
        <svg height="5" width="100%" class="tapered-rule">\
        <polyline points="0,0 400,2.5 0,5"></polyline>\
      </svg>\
        <div class="abilities">\
          <div class="ability-strength">\
            <h4>STR</h4>\
            <p>' + statDisplay(w.Stats.STR) + '</p>\
          </div> <!-- ability strength -->\
          <div class="ability-dexterity">\
            <h4>DEX</h4>\
            <p>' + statDisplay(w.Stats.DEX) + '</p>\
          </div> <!-- ability dexterity -->\
          <div class="ability-constitution">\
            <h4>CON</h4>\
            <p>' + statDisplay(w.Stats.CON) + '</p>\
          </div> <!-- ability constitution -->\
          <div class="ability-intelligence">\
            <h4>INT</h4>\
            <p>' + statDisplay(w.Stats.INT) + '</p>\
          </div> <!-- ability intelligence -->\
          <div class="ability-wisdom">\
            <h4>WIS</h4>\
            <p>' + statDisplay(w.Stats.WIS) + '</p>\
          </div> <!-- ability wisdom -->\
          <div class="ability-charisma">\
            <h4>CHA</h4>\
            <p>' + statDisplay(w.Stats.CHA) + '</p>\
          </div> <!-- ability charisma -->\
        </div> <!-- abilities -->\
        <svg height="5" width="100%" class="tapered-rule">\
        <polyline points="0,0 400,2.5 0,5"></polyline>\
      </svg>\
        <div class="property-line first">\
          <h4>Skills</h4>\
          <p>' + skill_string_builder(w.skills, w.proficiency) + '</p>\
        </div> <!-- property line -->';

        if (w.BWDT != null) {
          statblock_template += '\
            <div class="property-line">\
              <h4>Damage Immunities</h4>\
              <p>' + w.BWDT + '</p>\
            </div> <!-- property line -->';
        }

        statblock_template += '\
        <div class="property-line">\
          <h4>Senses</h4>\
          <p>' + senses_string_builder(w.senses) + '</p>\
        </div> <!-- property line -->\
        <div class="property-line">\
          <h4>Languages</h4>\
          <p>' + languages_string_builder(w.languages) + '</p>\
        </div> <!-- property line -->\
      </div> <!-- top stats -->\
      <svg height="5" width="100%" class="tapered-rule">\
        <polyline points="0,0 400,2.5 0,5"></polyline>\
      </svg>\
      <div class="property-block first">\
        <h4>Extra Attack.</h4>\
        <p>Beginning at 5th Level, this wyvern can Attack twice using its Bite or Claws, instead of once, whenever it attacks with either its Bite or Claws action on its Turn.<br><br>\
        The number of attacks increases to three when this wyvern reaches 11th level and to four when it reaches 20th. Only one of these attacks may be a Bite.</p>\
      </div> <!-- property block -->'

      if (w.special_ability_type == 'ability') {
        statblock_template +='\
          <div class="property-block">\
            <h4>' + w.special_ability_title + '</h4>\
            <p>' + w.special_ability_description + '</p>\
          </div> <!-- property block -->'
      }

      statblock_template +='\
    </div> <!-- section left -->\
    <div class="section-right">\
      <div class="actions">\
        <h3>Actions</h3>\
        <div class="property-block">\
          <h4>Bite.</h4>\
          <p><i>Melee Weapon Attack:</i> +' + (parseInt(w.proficiency) + mod(w.Stats.STR)) + ' to hit (proficiency bonus + Strength modifier), reach 10 ft., one creature.\
          <i>Hit:</i> ' + (7 + mod(w.Stats.STR)) + ' (2d6 + Strength modifier) piercing damage.</p>\
        </div> <!-- property block -->\
        <div class="property-block">\
          <h4>Claws.</h4>\
          <p><i>Melee Weapon Attack:</i> +' + (parseInt(w.proficiency) + mod(w.Stats.STR)) + ' to hit (proficiency bonus + Strength modifier), reach 5 ft., one creature.\
          <i>Hit:</i> ' + (9 + mod(w.Stats.STR)) + ' (2d8 + Strength modifier) slashing damage.</p>\
        </div> <!-- property block -->'

        if (w.special_ability_type == 'action') {
          statblock_template +='\
            <div class="property-block">\
              <h4>' + w.special_ability_title + '</h4>\
              <p>' + w.special_ability_description + '</p>\
            </div> <!-- property block -->'
        }

      statblock_template +='\
      </div> <!-- actions -->\
    </div> <!-- section right -->\
    <hr class="orange-border bottom" />\
  </div> <!-- stat block -->\
  ';

  statblock_template = replace_pattern_in_string(statblock_template, '{{SAVE_DC}}', 'DC ' + w.saveDC);

  return statblock_template;
}
