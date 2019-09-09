
let values = [];
var item="Bubble sort";
let i = 0;
let j = 0;
let num = 0;

function setup() {
  textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(10,50);
    sel.option('Bubble sort');
    sel.option('Insertion sort');
    sel.option('Merge sort');
    sel.option('Selection sort');
    sel.changed(mySelectEvent);


  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    if(i%1==0){
        values[i] = random(height);
        strokeWeight(5);
    }
  }
}

function mySelectEvent() {
  item = sel.value();
  background(200);
  console.log("item:"+item);
  //text('It is a ' + item + '!', 50, 50);
}

function draw(){

  background(0);
let swapped = new Array();
var len = values.length;

if(select) {
  console.log("SELECT");
  if (i < values.length) {
    var j_min = i;
    for (var j = i + 1; j < len; j++) {
        if (values[j] < values[j_min]) {
            j_min = j;
            swapped.push(j)
        }
    }
    if (j_min !== i) {
        swap(values, i, j_min);
    }
  } else {
    console.log("finished");
    console.log("size is " + width,0,0);
    noLoop();
  }

}

  if(item== "Bubble sort"){
    bubble();
  }
  if(item == "Insertion sort"){
    insertSort();
  }
  if(item == "Merge sort"){
    mergeSort();
  }
  if(item == "Selection sort"){
    selsort();
  }
}

function insertSort(){
  background(0);
  new p5.Table([3]);

  for(var z = 0; z < values.length-i-1; z++) {
    let temp = values[z];
    let j = z - 1;
    while (j >= 0 && values[j] > temp) {
      values[j + 1] = values[j];
      j--;
    }
    values[j + 1] = temp;
  }
  return values;
}







function bubble(){

    background(0);
    new p5.Table([3]);


    if (i < values.length && i%1==0) {
      for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        if (a > b) {
          swap(values, j, j + 1);
        num+= 3;
        }
      }
    } else {
      console.log("finished");
      noLoop();
    }
    i++;
    document.getElementById('swaps').innerHTML = "swaps:"+num+"lines sorted:"+values.length;
      //console.log("swaps:"+num);
      //console.log("lines sorted:"+values.length);


    for (let i = 0; i < values.length; i++) {
      stroke(255);
      //strokeWeight(0);
      line(i,height, i, height - values[i] );
      rotate(PI/3);

    }

}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
