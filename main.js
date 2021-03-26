var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("text_box").innerHTML=" ";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
     document.getElementById("text_box").innerHTML = Content;
      console.log(Content);
      if (Content=="take my selfie") {
       console.log("Take my selfie")
       speak();
      }
   
}
function speak() {
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in five seconds";
    var speak_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_this); 
    Webcam.attach(camera);
  setTimeout(function(){
      take_snapshot();
      save();
    
  } , 5000);  
}
camera=document.getElementById("camera");
Webcam.set({    
    width:360, 
    height:250,
    image_format:'png',
    png_quality:2000
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">'
    })

}
function save() {
  link=document.getElementById("link");
  image=document.getElementById("selfie_img").src;
  link.href=image;
  link.click();
}