function convert() {
    var table = document.getElementById("siswa");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        header.push(table.rows[0].cells[i].innerHTML);
    }
    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j <table.rows[i].cells.length; j++) {
            row[header[j]] =table.rows[i].cells[j].innerHTML;
        }
        rows.push(row);
    } 
    return (rows);
}
console.table(convert());