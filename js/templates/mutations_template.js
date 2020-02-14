function mutations_template() {
    let mutations = w.mutations;
    let wyvern_trait_text = "<div class='element-agnostic-mutations'>";

    for (i = 0; i < mutations.length; i++) {
        let textblock = "<div class='mutation-" + i + "'>";
        textblock += "<h2>" + mutations[i][0] + "</h2>";
        textblock += "<p>" + mutations[i][1] + "</p>";
        textblock += "<p>" + mutations[i][2] + "</p>";
        textblock += "</div>";
        wyvern_trait_text += textblock;
    }

    return wyvern_trait_text + "</div>";
}