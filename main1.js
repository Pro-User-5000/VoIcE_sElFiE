var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function run (event) {
    
    console.log(event);
    
    var content = event.results[0][0].transcript;
    console.log(content)

    document.getElementById("textbox").innerHTML=content;
    console.log(content)
    speak();
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90 
});

camera = document.getElementById("camera");