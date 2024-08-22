const canvasf = document.getElementById("gameCanvasf");
canvasf.width = innerWidth;
canvasf.height = innerHeight;
const canvase = document.getElementById("gameCanvase");
canvase.width = innerWidth;
canvase.height = innerHeight;
const canvas = document.getElementById("gameCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const canvasd = document.getElementById("gameCanvasd");
canvasd.width = innerWidth;
canvasd.height = innerHeight;


//FORMS
const formstitle = ["drawcell","drawsquare","slider","lwss","hwss","x66","fireship","crotchet","ecologist","sirrobin","p52"];
var forms = [
[[0,0,1],[1,0,1],[0,1,1]],  //slider
[[1,0,1,0],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]],  //lwss
[[0,1,0,1,0],[0,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,0,0,0,1],[0,1,0,0,1],[0,0,1,1,1]], //hwss
[[0,1,1,1,0,0,0,1,1,1,0],[1,0,0,1,0,0,0,1,0,0,1],[1,0,0,0,1,0,1,0,0,0,1],[0,1,1,0,0,0,0,0,1,1,0],[1,1,0,0,0,0,0,0,0,1,1],[0,1,1,1,0,0,0,1,1,1,0],[0,1,1,1,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1,0,0,0]], //x66 
[[0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],[0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],[0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0],[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],[0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],[1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]], //FireShip
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0],[  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[  0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], //crotchetship
[ [ 0,1,0,0,1,0,0,0,0,0,1,1,0
],[ 1,0,0,0,0,0,0,0,0,1,1,1,1
],[ 1,0,0,0,1,0,0,0,1,1,0,1,1
],[ 1,1,1,1,0,0,0,0,0,1,1,0,0
],[ 0,0,0,0,0,0,0,0,0,0,0,0,0
],[ 0,0,0,0,0,0,0,0,0,0,0,0,0
],[ 0,0,0,0,0,0,0,0,0,0,0,0,0
],[ 0,0,0,0,1,1,0,0,0,0,0,0,0
],[ 0,0,1,1,0,1,1,0,0,0,0,0,0
],[ 0,0,1,0,0,1,0,0,0,0,0,0,0
],[ 0,0,1,0,0,1,0,0,0,0,0,0,0
],[ 0,0,0,1,1,0,0,0,0,0,0,0,0
],[ 0,0,0,0,0,0,0,0,0,0,0,0,0
],[ 0,0,0,0,0,0,0,0,0,0,0,0,0
],[ 0,1,0,0,1,0,0,0,0,0,0,0,0
],[ 1,0,0,0,0,0,0,0,0,0,0,0,0
],[ 1,0,0,0,1,0,0,0,0,0,0,0,0
],[ 1,1,1,1,0,0,0,0,0,0,0,0,0]], //ecologist
[
[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]],  //SirRobin
[[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0],[
1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[
0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0],[
0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0],[
0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],[
0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0],[
1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[
1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0],[
0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1],[
0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1],[
0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[
0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[
0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],[
0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[
0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[
0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]] //p52 glider Gun
]
// MENU
const soloButton = document.getElementById("solo");
const rulesButton = document.getElementById("rules");
const exitRulesButton = document.getElementById("exitRules");
const menu = document.getElementById("menu");
const bottom = document.getElementById("bottom");
const topbar = document.getElementById("top");
const hotbar = document.getElementById("hotbar");


soloButton.addEventListener("click", () => {
    menu.classList.add("hide");
    bottom.classList.add("hide");
    topbar.classList.add("hide");
    hotbar.classList.remove("hide");
    gameLoop();
});
rulesButton.addEventListener("click", () => {
    document.getElementById("rulesTab").classList.remove("hide");
});
exitRulesButton.addEventListener("click", () => {
    document.getElementById("rulesTab").classList.add("hide");
});

//HOTBAR
const exit = document.getElementById("exit");
const play = document.getElementById("play");
const nxt = document.getElementById("nxt");
const clear = document.getElementById("clear");
const draw = document.getElementById("draw");
const erase = document.getElementById("erase");
const random = document.getElementById("random");
const debut = document.getElementById("debut");
const speed = document.getElementById("speed");
const mvt = document.getElementById("mvt");
const infinite = document.getElementById("infinite");
const sizebutton = document.getElementById("size");
const speedmenu = document.getElementById("speedmenu");
const speedrange = document.getElementById("speedrange");
const infinitemenu = document.getElementById("infinitemenu");
const infiniterange = document.getElementById("infiniterange");
const sizeinfinite = document.getElementById("sizeinfinite");
const sizemenu = document.getElementById("sizemenu");
const sizerangeX = document.getElementById("sizerangeX");
const sizerangeY = document.getElementById("sizerangeY");
const drawmenu = document.getElementById("drawmenu");
const rotasymmenu = document.getElementById("rotasymmenu");
const erasemenu = document.getElementById("erasemenu");
const gennum = document.getElementById("gennum");
const genspeed = document.getElementById('genspeed');
const sizenumX = document.getElementById("sizenumX");
const sizenumY = document.getElementById("sizenumY");
var onmvt = 0;
var onspeed = 0;
var onpaus = 1;
var oninfinite = false;
var onsize = false;
var copy=0;
var onwall = 0;

var ondraw = 0;
var drawparamId = 0;
var rotation = 0;
var symetrie = 0;
const rota = document.getElementById("rota");
const sym = document.getElementById("sym");
var drawparam = [];
for (let i = 0; i < formstitle.length; i++) {
    drawparam.push(document.getElementById(formstitle[i]));
}

var onerase = 0;
var eraseparamId = 0;
const eraseparam = [document.getElementById("erasecell"),document.getElementById("erasesquare")];

draw.addEventListener("click", () => {
    ondraw = 1 - ondraw;
    onerase = 0;
    onmvt = 0;
    onspeed = 0;
    oninfinite = 0;
    onsize = 0;
    canvasd.classList.remove("onerase");
    canvasd.classList.remove("onsquare");
    canvasd.classList.remove("onmvt");
    if (ondraw) {
        pausegame();
        canvasd.classList.remove("hide");
        draw.classList.add("active");
        erase.classList.remove("active");
        mvt.classList.remove("active");
        canvasd.classList.add("ondraw");
        canvasd.classList.remove("onerase");
        canvas.classList.remove("onmvt");
        drawmenu.classList.remove("hide");
        speedmenu.classList.add("hide");
        speed.classList.remove("active");
        erasemenu.classList.add("hide");
        erase.classList.remove("active");
        infinite.classList.remove("active");
        infinitemenu.classList.add("hide");
        sizebutton.classList.remove("active");
        sizemenu.classList.add("hide");
        drawparam[drawparamId].classList.add("active");
        if(drawparamId==1){
            xstartd = -1;
            canvasd.classList.remove("ondraw");
            canvasd.classList.add("onsquare");
        } else {
            canvasd.classList.remove("onsquare");
            canvasd.classList.add("ondraw");
            if(drawparamId>1){
                rotasymmenu.classList.remove("hide");
            }
        }
    } else {
        draw.classList.remove("active");
        canvasd.classList.remove("ondraw");
        drawmenu.classList.add("hide");
        rotasymmenu.classList.add("hide");
        canvasd.classList.add("hide");
    }
});
for (let i = 0; i < drawparam.length; i++) {
    drawparam[i].addEventListener("click", () => {
        drawparamId = i;
        drawparam.forEach((param) => {
            param.classList.remove("active");
        });
        drawparam[i].classList.add("active");
        rotasymmenu.classList.add("hide");
        if(i!=1){
            canvasd.classList.add("ondraw");
            canvasd.classList.remove("onsquare");
            if(i!=0){
                rotasymmenu.classList.remove("hide");
            }
        } else {
            canvasd.classList.remove("ondraw");
            canvasd.classList.add("onsquare");
        }
    });
}
rota.addEventListener("click", () => {
    rotation = (rotation + 1) % 4;
});
sym.addEventListener("click", () => {
    symetrie = 1 - symetrie;
});

//erasemenu
erase.addEventListener("click", () => {
    onerase = 1 - onerase;
    ondraw = 0;
    onmvt = 0;
    onspeed = 0;
    oninfinite = 0;
    onsize = 0;
    canvasd.classList.remove("ondraw");
    canvasd.classList.remove("onmvt");
    if (onerase) {
        pausegame();
        erase.classList.add("active");
        draw.classList.remove("active");
        mvt.classList.remove("active");
        erasemenu.classList.remove("hide");
        speedmenu.classList.add("hide");
        speed.classList.remove("active");
        drawmenu.classList.add("hide");
        rotasymmenu.classList.add("hide");
        draw.classList.remove("active");   
        infinite.classList.remove("active");
        infinitemenu.classList.add("hide");
        sizebutton.classList.remove("active");
        sizemenu.classList.add("hide");
        eraseparam[eraseparamId].classList.add("active");
        canvasd.classList.remove("hide");
        canvasd.classList.add("onerase");
        if(eraseparamId==1){
            xstart = -1;
            canvasd.classList.remove("onerase");
            canvasd.classList.add("onsquare");
        } else {
            canvasd.classList.remove("onsquare");
            canvasd.classList.add("onerase");
        }
    } else {
        erase.classList.remove("active");
        canvasd.classList.remove("onerase");
        canvasd.classList.remove("onsquare");
        erasemenu.classList.add("hide");
        canvasd.classList.add("hide");
    }
    
});
for (let i = 0; i < eraseparam.length; i++) {
    eraseparam[i].addEventListener("click", () => {
        eraseparamId = i;
        eraseparam.forEach((param) => {
            param.classList.remove("active");
        });
        eraseparam[i].classList.add("active");
        if(i==0){
            canvasd.classList.add("onerase");
            canvasd.classList.remove("onsquare");
        } else {
            canvasd.classList.remove("onerase");
            canvasd.classList.add("onsquare");
        }
    });
}

exit.addEventListener("click", () => {
    menu.classList.remove("hide");
    bottom.classList.remove("hide");
    topbar.classList.remove("hide");  
    hotbar.classList.add("hide");
    canvasd.classList.add("hide");
    canvas.classList.remove("onmvt");
    mvt.classList.remove("active");
    onmvt=0;
    onerase=0;
    ondraw=0;
    onspeed=0;
    oninfinite=0;
    onsize=0;
    speed.classList.remove("active");
    draw.classList.remove("active");
    erase.classList.remove("active");
    speedmenu.classList.add("hide");
    drawmenu.classList.add("hide");
    rotasymmenu.classList.add("hide");
    erasemenu.classList.add("hide");
    infinite.classList.remove("active");
    infinitemenu.classList.add("hide");
    sizebutton.classList.remove("active");
    sizemenu.classList.add("hide");
});
play.addEventListener("click", () => {
    var img = play.querySelector("img");
    if (img.src.includes("play.svg")) {
        img.src = "./images/pause.svg";
        onpaus = 0;
        if(generation==0){
            oldGrid = grid;
            colsOld = cols
        }
        play.classList.add("active");
        ondraw = 0;
        onerase = 0;
        draw.classList.remove("active");
        canvasd.classList.remove("ondraw");
        canvasd.classList.remove("onsquare");
        drawmenu.classList.add("hide");
        rotasymmenu.classList.add("hide");
        erase.classList.remove("active");
        canvasd.classList.remove("onerase");
        erasemenu.classList.add("hide");
    } else {
        img.src = "./images/play.svg";
        onpaus = 1;
        play.classList.remove("active");
    }
});
nxt.addEventListener("click", () => {
    if(generation==0){
        oldGrid = grid;
        colsOld = cols;
    }
    updateGrid();
    generation++;
    gennum.innerText = generation;
    displayGrid();
});
clear.addEventListener("click", () => {
    clearboard();
    displayGrid()
});
mvt.addEventListener("click", () => {
    drawmenu.classList.add("hide");
    rotasymmenu.classList.add("hide");
    erasemenu.classList.add("hide");
    mvt.classList.add("active");
    draw.classList.remove("active");
    erase.classList.remove("active");
    onmvt = 1;
    ondraw = 0;
    onerase = 0;
    canvas.classList.add("onmvt");
    canvasd.classList.remove("ondraw");
    canvasd.classList.remove("onerase");
    canvasd.classList.remove("onsquare");
    canvasd.classList.add("hide");
});
random.addEventListener("click", () => {
    randomboard();
    displayGrid()
});
debut.addEventListener("click", () => {
    if(generation!=0){
        grid=oldGrid;
        cols=colsOld;
        rows=grid.length;
        sizec=cols*size;
        sizer=rows*size;
        sizerangeX.value=cols;
        sizerangeY.value=rows;
        sizenumX.innerText=cols;
        sizenumY.innerText=rows;
        generation=0;
        gennum.innerText = 0;
        displayBorder();
    }
});
//speedmenu
speed.addEventListener("click", () => {
    onspeed = 1 - onspeed;
    ondraw = 0;
    onerase = 0;
    oninfinite = 0;
    onsize = 0;
    if (onspeed) {
        speed.classList.add("active");
        speedmenu.classList.remove("hide");
        draw.classList.remove("active");
        canvasd.classList.remove("ondraw");
        drawmenu.classList.add("hide");
        rotasymmenu.classList.add("hide");
        erase.classList.remove("active");
        canvasd.classList.remove("onerase");
        canvasd.classList.remove("onsquare");
        erasemenu.classList.add("hide");
        infinite.classList.remove("active");
        infinitemenu.classList.add("hide");
        sizebutton.classList.remove("active");
        sizemenu.classList.add("hide");
    } else {
        speed.classList.remove("active");
        speedmenu.classList.add("hide");
    }
});
speedrange.addEventListener("input", () => {
    genspeed.innerHTML = Math.floor(10*speedrange.value/60)/10 + " générations par seconde";
    speednm = parseInt(speedrange.value,10);
});
//infinitemenu
const onwallbutton = document.getElementById("onwall");
infinite.addEventListener("click", () => {
    displayGrid();
    oninfinite = 1 - oninfinite;
    displayBorder();
    ondraw = 0;
    onerase = 0;
    onspeed = 0;
    onsize = 0;
    if (oninfinite) {
        infinite.classList.add("active");
        infinitemenu.classList.remove("hide");
        draw.classList.remove("active");
        canvasd.classList.remove("ondraw");
        drawmenu.classList.add("hide");
        rotasymmenu.classList.add("hide");
        erase.classList.remove("active");
        canvasd.classList.remove("onerase");
        canvasd.classList.remove("onsquare");
        erasemenu.classList.add("hide");
        speed.classList.remove("active");
        speedmenu.classList.add("hide");
        sizebutton.classList.remove("active");
        sizemenu.classList.add("hide");
    } else {
        infinite.classList.remove("active");
        infinitemenu.classList.add("hide");
    }
});
infiniterange.addEventListener("input", () => {
    sizeinfinite.innerHTML = infiniterange.value==0 ? "0 symétrie":(2*infiniterange.value+1)*(2*infiniterange.value+1) + " symétries";
    copy = infiniterange.value;
    displayGrid();
    displayBorder()
});
onwallbutton.addEventListener("click", () => {
    onwall = 1 - onwall;
    if (onwall) {
        onwallbutton.classList.add("active");
        f.strokeStyle = "red";
    } else {
        onwallbutton.classList.remove("active");
        f.strokeStyle = "#76ABAE";
    }
    displayBorder()
});
//sizemenu
sizebutton.addEventListener("click", () => {
    drawmenu.classList.add("hide");
    rotasymmenu.classList.add("hide");
    erasemenu.classList.add("hide");
    speedmenu.classList.add("hide");
    infinitemenu.classList.add("hide");
    ondraw = 0;
    onerase = 0;
    onspeed = 0;
    oninfinite = 0;
    onsize = 1 - onsize;
    if (onsize) {
        sizebutton.classList.add("active");
        sizemenu.classList.remove("hide");
        canvasd.classList.remove("onsquare");
        canvasd.classList.remove("onerase");
        canvasd.classList.remove("ondraw");
        draw.classList.remove("active");
        erase.classList.remove("active");
        speed.classList.remove("active");
        infinite.classList.remove("active");
    } else {
        sizebutton.classList.remove("active");
        sizemenu.classList.add("hide");
    }
});
sizerangeX.addEventListener("input", () => {
    oldcols = cols;
    cols = parseInt(sizerangeX.value,10);
    sizenumX.innerText=cols;
    grid = resizeGrid();
    displayGrid();
});
sizerangeY.addEventListener("input", () => {
    oldrows = rows;
    rows = parseInt(sizerangeY.value,10);
    sizenumY.innerText=rows;
    grid = resizeGrid();
    displayGrid();
});


// JEU 
const e = canvase.getContext("2d")
const c = canvas.getContext("2d");
const d = canvasd.getContext("2d");
const f = canvasf.getContext("2d");
c.fillStyle = "#76ABAE";
f.lineWidth = 1;
e.fillStyle = "#76ABAE";
f.strokeStyle = "#76ABAE";
f.fillStyle = "#76ABAE";

//VARIABLES
var size=10;
var generation = 0;
var rows = 100;
var cols = 100;
var sizec = size*cols;
var sizer = size*rows;
var oldcols = cols;
var oldrows = rows;
var speednm=1200;
sizerangeX.value=cols;
sizerangeY.value=rows;
sizenumX.innerText=cols;
sizenumY.innerText=rows;

var centerx = canvas.width / 2 - (sizec) / 2 ;
var centery = canvas.height / 2 -(sizer) / 2

let copyList = [] 
let grid = createGrid();
displayBorder();
displayCopy();

function createGrid() {
    var nwgrid = [];
    for (let i = 0; i < rows; i++) {
        nwgrid[i] = [];
    }
    return nwgrid;
}

function pausegame() {
    var img = play.querySelector("img");
    img.src = "./images/play.svg";
    onpaus = 1;
    play.classList.remove("active");
}

function clearboard() {
    grid = createGrid();
}

function randomboard() {
    grid = createGrid();
    for (let i = 0; i < (rows*cols)/4; i++) {
        let nwrow = Math.floor(Math.random() * rows);
        let nwcol = Math.floor(Math.random() * cols);
        if(grid[nwrow].indexOf(nwcol)==-1){
           grid[nwrow].push(nwcol);
        }
    }
}

function resizeGrid() {
    let nwgrid = []
    if(oldrows!=rows){
        nwgrid = createGrid();
        if(oldrows<rows){
            nwgrid = grid;
            for(let i=oldrows;i<rows;i++){
                nwgrid[i] = [];
            }
        }
        if(oldrows>rows){
            for(let i=0;i<rows;i++){
                nwgrid[i] = grid[i];
            }
        }
    }else if(cols<oldcols){
        nwgrid = grid;
        for(let i=0;i<rows;i++){
            if(grid[i].length!=0){
                nwgrid[i] = grid[i].filter(val => val < cols);
            }
        }
    }
    oldrows = rows;
    oldcols = cols;
    sizec = size*cols;
    sizer = size*rows;
    displayBorder();
    if(nwgrid.length!=0){
        return nwgrid;
    }
    return grid;
}

function addToGrid(x, y, rotation, symetrie, form) {
    const rotatedForm = rotateForm(form, rotation, symetrie);
    for (let i = 0; i < rotatedForm.length; i++) {
        for (let j = 0; j < rotatedForm[i].length; j++) {
            if (rotatedForm[i][j] === 1) {
                const gridX = x + j;
                const gridY = y + i;
                if (gridY >= 0 && gridY < rows && gridX >= 0 && gridX < cols) {
                    if(grid[gridY].indexOf(gridX)==-1){
                        grid[gridY].push(gridX);
                    }
                }
            }
        }
    }
}

function rotateForm(form, rotation, symetrie) {
    let rotatedForm = form;
    for (let r = 0; r < rotation; r++) {
        rotatedForm = rotate90(rotatedForm);
    }
    if (symetrie) {
        const mirroredForm = [];
        for (let i = rotatedForm.length - 1; i >= 0; i--) {
            mirroredForm.push(rotatedForm[i]);
        }
        return mirroredForm;
    }
    return rotatedForm;
}

function rotate90(form) {
    const rows = form.length;
    const cols = form[0].length;
    const rotatedForm = [];
    for (let i = 0; i < cols; i++) {
        const newRow = [];
        for (let j = rows - 1; j >= 0; j--) {
            newRow.push(form[j][i]);
        }
        rotatedForm.push(newRow);
    }
    return rotatedForm;
}

//GAMEOFLIFE 
function updateGrid() {
    let newGrid = createGrid();
    let dict = []
    if(onwall){
        for (let i = 0; i < rows; i++) {
            if(grid[i].length!=0){
                grid[i].forEach((j) => {
                    for(let l=-1;l<=1;l++){
                        for(let k=-1;k<=1;k++){
                            if((l!=0||k!=0)&&((i+l >= 0 && i+l < rows && j+k >= 0 && j+k < cols))){
                                var neighborRow = i+l;
                                var neighborCol = j+k;
                                if (dict[neighborRow]==undefined) {
                                    dict[neighborRow]=new Map();
                                    dict[neighborRow].set(neighborCol,1);
                                } else {
                                    var sc = dict[neighborRow].get(neighborCol);
                                    if(dict[neighborRow].get(neighborCol)==undefined){
                                        dict[neighborRow].set(neighborCol,1);
                                    } else if(sc<4){
                                        dict[neighborRow].set(neighborCol,sc+1);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
    } else {
        for (let i = 0; i < rows; i++) {
            if(grid[i].length!=0){
                grid[i].forEach((j) => {
                    for(let l=-1;l<=1;l++){
                        for(let k=-1;k<=1;k++){
                            if(l!=0||k!=0){
                                var neighborRow = i+l;
                                var neighborCol = j+k;
                                if (neighborRow < 0) {
                                    neighborRow = rows - 1;
                                }
                                else if (neighborRow >= rows) {
                                    neighborRow = 0;
                                }
                                if (neighborCol < 0) {
                                    neighborCol = cols - 1;
                                }
                                else if (neighborCol >= cols) {
                                    neighborCol = 0;
                                }
                                if (dict[neighborRow]==undefined) {
                                    dict[neighborRow]=new Map();
                                    dict[neighborRow].set(neighborCol,1);
                                } else {
                                    var sc = dict[neighborRow].get(neighborCol);
                                    if(dict[neighborRow].get(neighborCol)==undefined){
                                        dict[neighborRow].set(neighborCol,1);
                                    } else if(sc<4){
                                        dict[neighborRow].set(neighborCol,sc+1);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
    }
    for (let i = 0; i < dict.length; i++){
        var row = dict[i];
        if(row!=undefined){
            for (var [key, value] of row) {
                if (value == 3 || (value == 2 && grid[i].indexOf(key)!=-1)) {
                    if(newGrid[i].indexOf(key)==-1){
                        newGrid[i].push(key);
                    }
                }
            }
        }

    };
    grid = newGrid;
}

//DISPLAY  
function displayGrid() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    e.clearRect(0, 0, canvas.width, canvas.height);
    if(copy!=0){
        for (let i = 0; i < rows; i++) {
            if(grid[i].length!=0){
                grid[i].forEach((j) => {
                    c.fillRect(j * size + centerx,i * size +centery, size, size);
                    copyList.forEach((el) => {
                        e.fillRect(j * size + centerx-el[0],i * size +centery-el[1], size, size);
                    }); 
                });
            }
        }
    } else {
        for (let i = 0; i < rows; i++) {
            if(grid[i].length!=0){
                grid[i].forEach((j) => {
                    c.fillRect(j * size + centerx,i * size +centery, size, size);
                });
            }
        }
    }
}

function displayBorder(){
    f.clearRect(0, 0, canvas.width, canvas.height);
    f.beginPath();
    if(copy!=0&&oninfinite){
        for(let l=-copy;l<=copy;l++){
            for(let k=-copy;k<=copy;k++){
                if(k!=0||l!=0){
                    f.rect(centerx-sizec*l, centery-sizer*k, sizec, sizer);
                }
            }
        }
    }
    f.rect(centerx, centery, sizec, sizer);
    f.rect(centerx-sizec*copy, centery-sizer*copy, (2*copy+1)*sizec, (2*copy+1)*sizer);
    f.stroke();
    displayCopy();
}

function displayCopy(){
    copyList = [];
    for(let l=-copy;l<=copy;l++){
        for(let k=-copy;k<=copy;k++){
            if(k!=0||l!=0){ 
                copyList.push([sizec*l,sizer*k]);
            }
        }
    }
}
//MOUSE MVT GRAB
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
canvasd.addEventListener("mousemove", (e) => {
    d.clearRect(0, 0, canvas.width, canvas.height);
    if(onerase||ondraw){
        const mousepos = getMousePos(canvasd, e);
        d.lineWidth = 2;
        for (let i = -15; i <= 15; i++) {
            for (let j = -15; j <= 15; j++) {
                const gridX = Math.floor((-centerx+mousepos.x)/ size) + i;
                const gridY = Math.floor((-centery+mousepos.y) / size) + j;
                const distance = Math.sqrt(i * i + j * j);
                if (distance <= 10) {
                    d.strokeStyle = `rgba(118, 171, 174, ${(10 - distance) / 10})`;
                    d.beginPath();
                    d.moveTo(centerx+gridX * size, centery+gridY * size);
                    d.lineTo(centerx+(gridX + 1) * size, centery+gridY * size);
                    d.moveTo(centerx+gridX * size, centery+gridY * size);
                    d.lineTo(centerx+gridX * size, centery+(gridY + 1) * size);
                    d.stroke();
                }
            }
        }
        if(!(ondraw&&drawparamId>1)){
            const gridX2 = Math.floor((-centerx+mousepos.x) / size);
            const gridY2 = Math.floor((-centery+mousepos.y) / size);
            d.fillStyle = "#EEEEEE";
            d.fillRect(gridX2 * size + centerx,gridY2 * size +centery, size, size);
        }
    }

});
var gridX1 = 0;
var gridY1 = 0;
var mousedown = false;
canvas.addEventListener("mousedown", (e) => {
    if(onmvt){
        const mousepos = getMousePos(canvas, e);
        gridX1 = Math.floor((-centerx+mousepos.x) / size);
        gridY1 = Math.floor((-centery+mousepos.y) / size);
        mousedown = true;
        displayBorder();
    }
});
canvas.addEventListener("mouseup", (e) => {
    mousedown = false;
});
canvas.addEventListener("mouseleave", (e) => {
    mousedown = false;
});
canvas.addEventListener("mousemove", (e) => {
    if (mousedown) {
        const mousepos = getMousePos(canvas, e);
        const gridX2 = Math.floor((-centerx+mousepos.x) / size);
        const gridY2 = Math.floor((-centery+mousepos.y) / size);
        if (gridX2 != gridX1 || gridY2 != gridY1) {
            const dx = gridX2 - gridX1;
            const dy = gridY2 - gridY1;
            centerx += dx*size;
            centery += dy*size;
            c.clearRect(0, 0, canvas.width, canvas.height);
            displayBorder();
            displayGrid();
        }
    }
});
//DRAW AND ERASE
var xstart = -1;
var ystart = 0;
var xstartd = -1;
var ystartd = 0;
canvasd.addEventListener("click", (e) => {
    const mousepos = getMousePos(canvasd, e);
    const gridX = Math.floor((-centerx+mousepos.x) / size);
    const gridY = Math.floor((-centery+mousepos.y) / size);
    if (ondraw) {
        if(drawparamId==0){
            if(gridY>=0&&gridY<rows&&gridX>=0&&gridX<cols){
                if(grid[gridY].indexOf(gridX)==-1){
                    grid[gridY].push(gridX);
                }
            }
        } else if(drawparamId==1){
            if(xstartd==-1){
                xstartd = gridX;
                ystartd = gridY;
            } else {
                var xend = gridX;
                var yend = gridY;
                if(xend<xstartd){
                    xend = xstartd-1;
                    xstartd = gridX+1;
                }
                if(yend<ystartd){
                    yend = ystartd-1;
                    ystartd = gridY+1;
                }
                for (let i = ystartd; i <= yend; i++) {
                    for (let j = xstartd; j <= xend; j++) {
                        if (i>= 0 && i < rows && j>= 0 && j< cols) {
                            if(grid[i].indexOf(j)==-1){
                                grid[i].push(j);
                            }
                        }
                    }
                }
                xstartd = -1;
            }
        } else {
            addToGrid(gridX, gridY, rotation, symetrie, forms[drawparamId-2]);
        }
    } else if (onerase) {
        if(eraseparamId==0){
            if(gridY>=0&&gridY<rows&&gridX>=0&&gridX<cols){
                var index = grid[gridY].indexOf(gridX);
                if(index!=-1){
                    grid[gridY].splice(index,1);
                }
            }
        } else if(eraseparamId==1){
            if(xstart==-1){
                xstart = gridX;
                ystart = gridY;
            } else {
                var xend = gridX;
                var yend = gridY;
                if(xend<xstart){
                    xend = xstart-1;
                    xstart = gridX+1;
                }
                if(yend<ystart){
                    yend = ystart-1;
                    ystart = gridY+1;
                }
                for (let i = ystart; i <= yend; i++) {
                    for (let j = xstart; j <= xend; j++) {
                        if (i >= 0 && i< rows && j >= 0 && j < cols) {
                            var index = grid[i].indexOf(j);
                            if(index!=-1){
                                grid[i].splice(index,1);
                            }
                        }
                    }
                }
                xstart = -1;
            }
        }
    }
    displayGrid();
}); 
var msdown
canvasd.addEventListener("mousedown", (e) => {
    if(ondraw||onerase){
        const mousepos = getMousePos(canvas, e);
        var gridX = Math.floor((-centerx+mousepos.x) / size);
        var gridY = Math.floor((-centery+mousepos.y) / size);
        if (ondraw&&drawparamId==0) {
            if(gridY>=0&&gridY<rows&&gridX>=0&&gridX<cols){
                if(grid[gridY].indexOf(gridX)==-1){
                    grid[gridY].push(gridX);
                }
            }
        } else if (onerase&&eraseparamId==0) {
            if(gridY>=0&&gridY<rows&&gridX>=0&&gridX<cols){
                var index = grid[gridY].indexOf(gridX);
                if(index!=-1){
                    grid[gridY].splice(index,1);
                }
            }
        }
        displayGrid();
        msdown = true;
    }
});
canvasd.addEventListener("mousemove", (e) => {
    if (msdown) {
        const mousepos = getMousePos(canvas, e);
        const gridX = Math.floor((-centerx+mousepos.x) / size);
        const gridY = Math.floor((-centery+mousepos.y) / size);
        if (ondraw&&drawparamId==0) {
            if(gridY>=0&&gridY<rows&&gridX>=0&&gridX<cols){
                if(grid[gridY].indexOf(gridX)==-1){
                    grid[gridY].push(gridX);
                }
            }
        } else if (onerase&&eraseparamId==0) {
            if(gridY>=0&&gridY<rows&&gridX>=0&&gridX<cols){
                var index = grid[gridY].indexOf(gridX);
                if(index!=-1){
                    grid[gridY].splice(index,1);
                }
            }
        }   
        displayGrid();
    }
    if(onerase&&eraseparamId==1&&xstart!=-1){
        const mousepos = getMousePos(canvas, e);
        const gridX = Math.floor((-centerx+mousepos.x) / size);
        const gridY = Math.floor((-centery+mousepos.y) / size);
        d.lineWidth = 3;
        d.strokeStyle = "red";
        d.beginPath();
        d.rect(centerx+xstart*size, centery+ystart*size, size*(gridX-xstart+1), size*(gridY-ystart+1));
        d.stroke();
        displayGrid();
    } else if(ondraw&&drawparamId==1&&xstartd!=-1){
        const mousepos = getMousePos(canvas, e);
        const gridX = Math.floor((-centerx+mousepos.x) / size);
        const gridY = Math.floor((-centery+mousepos.y) / size);
        d.lineWidth = 3;
        d.strokeStyle = "#EEEEEE";
        d.beginPath();
        d.rect(centerx+xstartd*size, centery+ystartd*size, size*(gridX-xstartd+1), size*(gridY-ystartd+1));
        d.stroke();
        displayGrid();
    } else if(ondraw&&drawparamId>1){
        const mousepos = getMousePos(canvas, e);
        const gridX = Math.floor((-centerx+mousepos.x) / size);
        const gridY = Math.floor((-centery+mousepos.y) / size);
        d.lineWidth = 2;
        d.fillStyle = "#EEEEEE";
        const rotatedForm = rotateForm(forms[drawparamId-2], rotation, symetrie);
        for (let i = 0; i < rotatedForm.length; i++) {
            for (let j = 0; j < rotatedForm[i].length; j++) {
                if (rotatedForm[i][j] === 1) {
                    d.fillRect(centerx + (gridX + j) * size, centery + (gridY + i) * size, size, size);
                }
            }
        }
       
    }
});
canvasd.addEventListener("mouseup", (e) => {
    msdown = false;
});
canvasd.addEventListener("mouseleave", (e) => {
    msdown = false;
});
//ZOOM
canvas.addEventListener("wheel", (e) => {
    const zoom = e.deltaY > 0 ? 0.9 : 1.1;
    const mousepos = getMousePos(canvas, e);
    const oldsize = size;
    size *= zoom;
    sizer = size*rows;
    sizec = size*cols;
    centerx = mousepos.x - (mousepos.x - centerx) * (size / oldsize);
    centery = mousepos.y - (mousepos.y - centery) * (size / oldsize);
    c.clearRect(0, 0, canvas.width, canvas.height);
    displayBorder();
    displayGrid();
});
canvasd.addEventListener("wheel", (e) => {
    const zoom = e.deltaY > 0 ? 0.9 : 1.1;
    const mousepos = getMousePos(canvasd, e);
    const oldsize = size;
    size *= zoom;
    sizer = size*rows;
    sizec = size*cols;
    centerx = mousepos.x - (mousepos.x - centerx) * (size / oldsize);
    centery = mousepos.y - (mousepos.y - centery) * (size / oldsize);
    d.clearRect(0, 0, canvas.width, canvas.height);
    displayBorder();
    displayGrid();
});

//LOOP
function gameLoop() {
    if(!onpaus){
        updateGrid();
        generation++;
        gennum.innerText = generation;
        displayGrid();
    }
    if(generation==0){
        displayGrid();
        oldGrid = grid;
        colsOld = cols
    }
    setTimeout(gameLoop, 60000/speednm);
}
