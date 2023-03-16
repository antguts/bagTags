import con from './dbconnect.js'

// QUERIES
let showPlayers = con.query("SELECT * FROM player", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

let showLocations = con.query("SELECT * FROM locations", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});
