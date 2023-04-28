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