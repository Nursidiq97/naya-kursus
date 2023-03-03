var users = ['Yamin', 'Yasin', 'Rizal'];
var umur = [25, 24, 25];
var email = ['yamin23@gmail.com', 'yasin37@gmail.com', 'rizal363@gmail.com'];

var text = document.getElementById("text");
var table = 
'<table align="center"><thead><tr><th>ID</th><th>Name</th><th>Umur</th><th>email</th></tr></thead><tbody>';

for (var i = 0; i <users.length; i++) {
    table += '<tr><td>' + (i + 1) + '</td><td>' + users[i] + '</td><td>' + umur[i] +
    '</td><td>' + email[i] + '</td></tr>';
}
table += '</tbody></table>';
text.innerHTML = table;
