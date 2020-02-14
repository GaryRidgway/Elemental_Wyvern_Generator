function wyvern_type_template() {
    let wyvern = w.wyvern;
    let wyvern_type_text = "";
    let type = wyvern.type;
    let description = wyvern.description;

    let textblock = "<div class='wyvern-type " + type + "'>";
    textblock += "<h2>" + type + " wyvern</h2>";
    textblock += "<p>" + description + "</p>";
    textblock += "</div>";
    wyvern_type_text += textblock;

    return wyvern_type_text;
}