"use strict"
// Object.defineProperty(exports, "__esModule", { value: true });

// let fs = require('fs');

let emily = new Player("Emily", 6900, 1, null)
let ata = new Player("Ata", 2000, 2, null);
let ruchit = new Player("Ruchit", 1000, 3, null);
let jack = new Player("Jack", 1000, 4, null);
let players = [emily, ata, ruchit, jack, emily, ata, ruchit, jack, emily, ata, ruchit, jack, emily, ata, ruchit, jack];

// const json = JSON.stringify(players);

// fs.writeFile('ranking.js', json, 'utf8', function(err){
//     if(err){ 
//           console.log(err); 
//     } else {
//           //Everything went OK!
//     }});

printRankings();

function printRankings() {
    var body = document.getElementsByTagName("body")[0];  
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");
    var cell = document.createElement("th");
    var cell_value = document.createTextNode("Rank");
    cell.appendChild(cell_value);
    row.appendChild(cell);
    var cell = document.createElement("th");
    var cell_value = document.createTextNode("Player");
    cell.appendChild(cell_value);
    row.appendChild(cell);
    var cell = document.createElement("th");
    var cell_value = document.createTextNode("Points");
    cell.appendChild(cell_value);
    row.appendChild(cell);
    tblBody.appendChild(row);
  
    for (var i = 0; i < players.length; i++) {
        var row = document.createElement("tr");  
        var cell_rank = document.createElement("td");
        var cell_rank_value = document.createTextNode(players[i].rank);
        cell_rank.appendChild(cell_rank_value);
        row.appendChild(cell_rank);
        var cell_name = document.createElement("td");
        var cell_name_value = document.createTextNode(players[i].name);
        cell_name.appendChild(cell_name_value);
        row.appendChild(cell_name);
        var cell_points = document.createElement("td");
        var cell_points_value = document.createTextNode(players[i].points);
        cell_points.appendChild(cell_points_value);
        row.appendChild(cell_points);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
  }