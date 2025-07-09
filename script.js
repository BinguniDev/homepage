var homepage = document.getElementById("homepage");
var wwwImage = document.getElementById("wwwImage");
var wwwImageText = document.getElementById("wwwImageText");
var codingImage = document.getElementById("codingImage");
var codingImageText = document.getElementById("codingImageText");
var robloxImage = document.getElementById("robloxImage");
var robloxImageText = document.getElementById("robloxImageText");

var images = document.getElementById("images");

function webOnload() {
    homepage.style.display = "none";
}

document.getElementById("startButton").addEventListener("click", function() {
    this.remove();
    startIntro();
});

document.getElementById("skip").addEventListener("click", function() {
    this.remove();
    intro.remove();3
    homepage.style.display = "block";
    document.body.style.backgroundColor = "#2564bf";
});

function startIntro() {
    document.body.style.backgroundColor = "#14121e";
    var infoText = document.getElementById("informationText");
    var audio = new Audio("click-audio.mp3")
    var cassetteAudio = new Audio("cassette-audio.mp3");
    var TurnPage = new Audio("turnpage-audio.mp3");
    var intro = document.getElementById("intro");

    cassetteAudio.play();
    setTimeout(function(){
        audio.play();
        infoText.textContent = "Name: Binguni404";
        setTimeout(function(){
            audio.play();
            infoText.textContent = "Born: Unkown";
            setTimeout(function(){
                audio.play();
                infoText.textContent = "Computer Enthusiast";
                setTimeout(function(){
                    audio.play();
                    infoText.textContent = "From germany";
                    setTimeout(function(){
                        audio.play();
                        infoText.textContent = "Current location:";
                        setTimeout(function(){
                            audio.play();
                            infoText.textContent = "Current location: H";
                            setTimeout(function(){
                                audio.play();
                                infoText.textContent = "Current location: HE";
                                setTimeout(function(){
                                    audio.play();
                                    infoText.textContent = "Current location: HER";
                                    setTimeout(function(){
                                        audio.play();
                                        infoText.textContent = "Current location: HERE";
                                        setTimeout(function(){
                                            audio.play();
                                            infoText.textContent = "";
                                            setTimeout(function(){
                                                intro.remove();
                                                setTimeout(function(){
                                                    TurnPage.play();
                                                    homepage.style.display = "block";
                                                    document.body.style.backgroundColor = "#2564bf";
                                                },500);
                                            },3000);
                                        },3000);
                                    },800);
                                },800);
                            },800);
                        },3000);
                    },3000);
                },3000);
            },3000);
        },3000);
    },3000);
}

wwwImageText.style.border = "none";
codingImageText.style.border = "none";
robloxImageText.style.border = "none";

var wwwVoice = new Audio("voice/internet.mp3");
var codingVoice = new Audio("voice/coding.mp3");
var robloxVoice = new Audio("voice/roblox.mp3");

wwwImage.addEventListener("click", (event) => {
    wwwImageText.textContent = "I really like the internet. The internett is one of the best inventions in the world history. Nobody else could have make it better than Sir Timothy John Berners-Lee.";
    wwwImageText.style.border = "2px solid white";
    wwwImageText.style.padding = "10px";
    wwwImageText.style.width = "300px";
    setTimeout(() => {
        wwwVoice.play();
    }, 500);
    
    wwwImage.addEventListener("mouseleave", (event) => {
        wwwImageText.textContent = "";
        wwwImageText.style.border = "none";
        wwwImageText.style.padding = "0";
        wwwImageText.style.width = "0px";
        wwwVoice.pause();
        wwwVoice.currentTime = 0;
    });
});

codingImage.addEventListener("click", (event) => {
    codingImageText.textContent = "I also really like to code web games and also just websites like these ones because its just chilling and you can literally create anythink you want to. Fun fact: this website should look a littlebit older that's why it doesn't really look modern.";
    codingImageText.style.border = "2px solid white";
    codingImageText.style.padding = "10px";
    codingImageText.style.width = "300px";
    setTimeout(() => {
        codingVoice.play();
    }, 500);
    
    codingImage.addEventListener("mouseleave", (event) => {
        codingImageText.textContent = "";
        codingImageText.style.border = "none";
        codingImageText.style.padding = "0";
        codingImageText.style.width = "0px";
        codingVoice.pause();
        codingVoice.currentTime = 0;
    });
});

robloxImage.addEventListener("click", (event) => {
    robloxImageText.textContent = "Yes, yes, I also play roblox and I also like to make simple roblox games because its free and also easier with lua to code for me instead of c# (c *sharp* not c *pound*) or c++ or java or whatever. (I also like to just play roblox)";
    robloxImageText.style.border = "2px solid white";
    robloxImageText.style.padding = "10px";
    robloxImageText.style.width = "300px";
    setTimeout(() => {
        robloxVoice.play();
    }, 500);
    
    robloxImage.addEventListener("mouseleave", (event) => {
        robloxImageText.textContent = "";
        robloxImageText.style.border = "none";
        robloxImageText.style.padding = "0";
        robloxImageText.style.width = "0px";
        robloxVoice.pause();
        robloxVoice.currentTime = 0;
    });
});

function isMobile() {
    return navigator.maxTouchPoints > 0 && /Android|iPhone|iPad/i.test(navigator.userAgent);
}

if(isMobile() == true) {
    wwwImage.style.width = "30vw";
    codingImage.style.width = "30vw";
    robloxImage.style.width = "30vw";

    wwwImage.style.height = "30vh";
    codingImage.style.height = "30vh";
    robloxImage.style.height = "30vh";
}

console.log(isMobile());