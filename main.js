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
        scoreRightWrist= results[0].pose.keypoints[10].score;
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist +" scoreLeftWrist = "+ scoreLeftWrist);
    }
}
    function draw(){
        image(video, 0, 0, 600, 500);
        fill("#008c8c");
        stroke("#008c8c");
        song_status= song.isPlaying();
        song2_status= song2.isPlaying();
        if(scoreRightWrist>0.2){
            circle(rightWristX,rightWristY,20);
            song2.stop();
            if(song_status==false){
                song.play();
            }
        }
        if(scoreLeftWrist>0.2){
            circle(leftWristX,leftWristY,20);
            song.stop();
            if(song2_status==false){
                song2.play();
            }
        }
    }
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}