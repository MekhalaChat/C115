noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/j2kswJw6/dog-puppy-snapchat-clip-art-nose-removebg-preview-1.png');
}

function setup(){
canavas = createCanavas(350 , 350);
canavas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);

}
function modelLoaded() {
 console.log('PoseNet is initialized'); 
}