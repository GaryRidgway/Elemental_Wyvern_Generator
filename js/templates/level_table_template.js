function level_table_template() {
  let wyvern_type = w.wyvern.wyvernTypeData.type;
  let table_array = w.wyvern.wyvernTypeData.level_chart;
  
  let table_html = "\
    <div class='level-table-container'>\
      <div class='corner top-left'><div class='inner-curve'></div></div>\
      <div class='corner top-right'><div class='inner-curve'></div></div>\
      <div class='corner bottom-left'><div class='inner-curve'></div></div>\
      <div class='corner bottom-right'><div class='inner-curve'></div></div>\
      <table class='level-table'>\
      <h3>" + wyvern_type + " Wyvern level table</h3>";

  for (i = 0; i < table_array.length; i++) {
    table_html += "<tr>";

    for (j = 0; j < table_array[i].length; j++) {
      if (i != 0) {
        table_html += "<td>" + table_array[i][j]+ "</td>";
      }
      else {
        table_html += "<th>" + table_array[i][j] + "</th>";
      }
    }
    table_html += "</tr>";
  }

  return table_html + '</table></div>';
}
