song="";
song2="";
function preload(){
    song= loadSound("Music.mp3");
    song2= loadSound("Music2.mp3");
}
scoreRightWrist=0;
scoreLeftWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose',gotPoses);
}
function ModelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses (results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    }
}
    function draw(){
        image(video, 0, 0, 600, 500);
    }