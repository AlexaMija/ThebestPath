
/*startCoordinate = [x, y];
endCoordinate = [x, y];
blocks; //random 20
startCoordinate.blocks = false;
endCoordinate.blocks = false;
[x+1,y] [x-1,y] [x, y+1] [x, y-1];
console.log(path.map(path => path.length)); 
*/
*/ promisli o ovome
function removeFromArray(arr, elt) {
  for (var i = arr.length - 1; i = 0; i--)
if(arr[i] == elt) {
  arr.splice(i, 1);
}
}
function heuristic(a, b) {
//  var d = (a.i, a.j, b.i, b.j);
var d = abs(a.i - b.i)  + abs(a.j - b.j);
  return d;
}
*/
var cols = 10;
var rows = 10;
var board = [];
var openSet;
var closedSet;
var startCoordinate;
var endCoorinate;
var path;
//2d board
function setup() {
for (var i = 0; i < cols; i++) {
  board[i] = [];
  for (var j = 0; j < rows; j++) {
    board[i][j] = [];
  }
}
}
//Pocetna i krajnja tacka (moze da se menja)
startCoordinate = board[0][0];
endCoorinate = board[9][9];
//Dozvoljeno kretanje po board-u
function Spot() {
  this.x = i;
  this.y = j;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;
  if (random(board) === 20) {
    this.wall = true;
  }
  //definisati show f-on da izlista array
  this.addNeighbors = function() {
    var i = this.i;
    var j = this.j;
    if (i < cols - 1) {
      this.neighbors.push(boars[i + 1][j])
    }
    if (i > 0) {
      this.neighbors.push(board[i - 1][j])
    }
    if (j < rows - 1) {
      this.neighbors.push(board[i][j + 1])
    }
    if (j < 0) {
      this.neighbors.push(board[i][j - 1])
    }
  }
}
Spot()
// Definisati f i g this.f i this.j (je l se to posle tretira kao objekat)
function setup() {
for(var i = 0; i = cols; i++) {
  board[i] = new Array(rows);
}
for (var i = 0; i < cols; i++) {
  for (var j = 0; j < rows; j++) {
    board[i][j] = new Spot(i, j);
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
    board[i][j] = addNeighbors(board);
}
startCoordinate = [0][0];
endCoordinate = board[cols - 1][rows - 1];
startCoordinate.wall = false;
endCoordinate.wall = false;
openSet.push(start);
console.log(board)
}
//
function run() {
while (openSet.length > 0) {
  var winner = 0;
  for (var i = 0; i < openSet.length; i++) {
    if(openSet[i].f < openSet[winner].f) {
      winner = 1;
    }
  }
  var current = openSet[winner];

noLoop()
  console.log("Done!");
  }
  remoweFromArray(openSet, current);
  closedSet.push(current);
  var neighbors = current.neighbors;
  for (var i = 0; i < neighbors.length; i++)
  var neighbor = neighbors[i];
  if (!closedSet.includes(neighbor) && !neighbor.wall) {
    var tempG = current.g + 1;
    if (openSet.includes(neighbor)) {
      if (tempG < neighbor.g) {
        neighbor.g = tempG;
      }
  } else {
    neighbor.g = tempG;
    opetSet.push(neighbor);
  }
  neighbor.h = heuristc(neighbor, end);
  neighbor.g = neighbor.g + neighbor.h;
  neighbor.previous = current;
}
}
} else {
  console.log("No solution!")
  nosolution = true;
  noLoop();
}
for (var i = 0; i < cols; i++) {
  for (var j = 0; j < rows; j++)
  grid[i][j].show();
}
for (var i = 0; i < closedSet.length; i++) {
 closedSet[i].show();
}
for (var i = 0; i <openSet.length; i++) {
openSet[i].show();
}
if (!nosolution) {
  path = []
  var temp = current;
  path.push(temp.previous);
  temp = temp.previous;
}
for (var i = 0; i <path.length; i++) {
  path[i].show();
}
console.log(removeFromArray);
