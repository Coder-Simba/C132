img="";
status = "";

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.position(300, 130);
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img, gotResult);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#e9d1ab");
    text("Dog", 45,75);
    noFill();
    stroke('#e9d1ab');
    rect(30, 60, 450, 350);

    fill("#e9d1ab");
    text("Cat", 320, 120);
    noFill();
    stroke("#e9d1ab");
    rect(300, 90, 270, 320);
}


function gotResult(error, results){
    if(error){
        console.log(error);

    }
    console.log(results);
}