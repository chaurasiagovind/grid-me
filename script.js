

var shades = ['#6f98a8','#2b8ead','#2f454e','#2b8ead','#2f454e','#bfbfbf','#bfbfbf','#6f98a8','#2f454e'];
var boxes = shades.map((shade, index) => [index+1, shade ]);
/**
 * applies color and adds number to grid
 * @param {boxes} boxes : 2d array of color and number
 */
function render(boxes){
  var id;
  for(var i=0; i<=8;i++){
    id = "box-"+(i+1)
    document.getElementById(id).style.backgroundColor = boxes[i][1];
      var box = document.getElementById(id);
      var text = boxes[i][0];
      box.innerHTML = text;
  }
}
render(boxes);
function shuffleBoxes() {
  for (let i = boxes.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = boxes[randomIndex];
    boxes[randomIndex] = boxes[i];
    boxes[i] = temp;
  }
  return boxes;
}
function shuffle(){
  shuffleBoxes();
  render(boxes);
}
function sort(){
  boxes.sort();
  render(boxes);
}

