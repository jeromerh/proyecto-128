rigth_wrist_x=0
rigth_wrist_y=0
left_wrist_x=0
left_wrist_y=0
score_right_wrist=0
score_left_wrist=0
sound=""
function setup(){
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoad)
posenet.on("pose",gotPoses)
}
function preload(){
sound=loadSound("music.mp3")
}
function draw(){
 image(video,0,0,600,500)
 fill("blue")
 stroke("cyan")
}
function modelLoad(){
    console.log("Modelo cargado correctamente")
}

function gotPoses(results){
    if(results.length<0){
       score_right_wrist=results[0].pose.keypoints[10].score
       score_left_wrist=results[0].pose.keypoints[9].score
       rigth_wrist_x=results[0].pose.rightWrist.x
       rigth_wrist_y=results[0].pose.rigthWrist.y
       left_wrist_x=results[0].pose.leftWrist.x
       left_wrist_y=results[0].pose.leftWrist.y

    }
}
