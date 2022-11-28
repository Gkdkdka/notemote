const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("range");
const mode = document.getElementById("mode");
const saveBtn = document.getElementById("down");

const INITIAL_COLOR = "#000000";
const CANVAS_SIZE = 700;

ctx.strokeStyle = "#2c2c2c";

canvas.width = 1000;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1000, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

var bDisplay = true;

function handleCanvasLimit() {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.lineWidth = 2.5;
}

function handleCanvasCircle() {

}

function drawingTriangle() {
    
}

function handleCanvasTriangle(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleCanvasSquare() {

}

function doDisplay1() {
    var con = document.getElementById("palette");
    if(con.style.display=='none'){ 		
        con.style.display = 'block';
        con.style.display = 'inline-block'; 	
    } else{ 		
        con.style.display = 'none'; 	
    } 
}

function doDisplay2() {
    var con = document.getElementById("range");
    if(con.style.display=='none'){ 		
        con.style.display = 'block';
        con.style.display = 'inline-block';	
    } else{ 		
        con.style.display = 'none'; 	
    } 
}

function handleDelete() {
    ctx.clearRect(0, 0, 1000, CANVAS_SIZE);
}

function stopPainting() {
    painting = false;
}

function startPainting(event) {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint"
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, 1000, CANVAS_SIZE);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "canvas";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}