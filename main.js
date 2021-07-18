noseX=0; 
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
canvas=createCanvas(350,300);
canvas.center();
video = createCapture(VIDEO);
video.size(350,300);
video.hide();
poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,350,300);
//fill(255,0,0);stroke(255,0,0);circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,30,25);
}


function take_snapshot(){
    save('My Filtre Image.png');
}

function modelloaded()
{
console.log("pn is wk")
}

function gotPoses(results) 
{
    if(results.length >0)
    {
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        noseX=results[0].pose.nose.x-15;
        console.log("nose y ="+results[0].pose.nose.y);
        noseY=results[0].pose.nose.y-15;
    }
}