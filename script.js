var linearButton = document.querySelector("#linear");
var radialButton = document.querySelector("#radial");
var conicButton = document.querySelector("#conic");
linearButton
var backgroundEx = document.querySelector("#gradient1");
var linFlag = true;
var radFlag = false;
var conFlag = false;

var linearContainer = document.querySelector("#linearContainer");
var radialContainer = document.querySelector("#radialContainer");
var conicalContainer = document.querySelector("#conicalContainer");

linearContainer.style.display = "inline-block";
radialContainer.style.display = "none";
conicalContainer.style.display = "none";


var cssCode = document.querySelector("#cssCode");



var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4");
var color5 = document.querySelector("#color5");
var color6 = document.querySelector("#color6");
var color7 = document.querySelector("#color7");
var color8 = document.querySelector("#color8");

var color1Box = document.querySelector("#colorBox1");
var color2Box = document.querySelector("#colorBox2");
var color3Box = document.querySelector("#colorBox3");
var color4Box = document.querySelector("#colorBox4");
var color5Box = document.querySelector("#colorBox5");
var color6Box = document.querySelector("#colorBox6");
var color7Box = document.querySelector("#colorBox7");
var color8Box = document.querySelector("#colorBox8");

var numOfColors = document.querySelector("#numOfColors");
var enableColors = document.getElementsByClassName("enableColors");

var degree = document.querySelector("#degrees");
var degreeNumber = document.querySelector("#degreeNumber");

var degreeC = document.querySelector("#degreesC");
var degreeCNumber = document.querySelector("#degreeCNumber");

var xPostion = document.querySelector("#xPosition");
var yPostion = document.querySelector("#yPosition");
var xPos = document.querySelector("#xPos");
var yPos = document.querySelector("#yPos");

var xPostionC = document.querySelector("#xPositionC");
var yPostionC = document.querySelector("#yPositionC");
var xPosC = document.querySelector("#xPosC");
var yPosC = document.querySelector("#yPosC");



numOfColors.addEventListener("change",function(e){
    if(e.target.value == 2){
        console.log("2");
        color3Box.style.display = "none";
        color4Box.style.display = "none";
        color5Box.style.display = "none";
        color6Box.style.display = "none";
        color7Box.style.display = "none";
        color8Box.style.display = "none";
    }
    else if(e.target.value == 3){
        color3Box.style.display = "inline-block";
        color4Box.style.display = "none";
        color5Box.style.display = "none";
        color6Box.style.display = "none";
        color7Box.style.display = "none";
        color8Box.style.display = "none";
    }
    else if(e.target.value == 4){
        color3Box.style.display = "inline-block";
        color4Box.style.display = "inline-block";
        color5Box.style.display = "none";
        color6Box.style.display = "none";
        color7Box.style.display = "none";
        color8Box.style.display = "none";
    }
    else if(e.target.value == 5){
        color3Box.style.display = "inline-block";
        color4Box.style.display = "inline-block";
        color5Box.style.display = "inline-block";
        color6Box.style.display = "none";
        color7Box.style.display = "none";
        color8Box.style.display = "none";
    }
    else if(e.target.value == 6){
        color3Box.style.display = "inline-block";
        color4Box.style.display = "inline-block";
        color5Box.style.display = "inline-block";
        color6Box.style.display = "inline-block";
        color7Box.style.display = "none";
        color8Box.style.display = "none";
    }
    else if(e.target.value == 7){
        color3Box.style.display = "inline-block";
        color4Box.style.display = "inline-block";
        color5Box.style.display = "inline-block";
        color6Box.style.display = "inline-block";
        color7Box.style.display = "inline-block";
        color8Box.style.display = "none";
    }
    else if(e.target.value == 8){
        color3Box.style.display = "inline-block";
        color4Box.style.display = "inline-block";
        color5Box.style.display = "inline-block";
        color6Box.style.display = "inline-block";
        color7Box.style.display = "inline-block";
        color8Box.style.display = "inline-block";
    }
    if(linFlag){
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
});

linearButton.addEventListener("click", function(){
    if(!linFlag){

        // backgroundEx.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
        linearContainer.style.display = "block";
        radialContainer.style.display = "none";
        conicalContainer.style.display = "none";
        changeLinear();
        linFlag = true;
        radFlag = false;
        conFlag = false;
        cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
    }
    
});
radialButton.addEventListener("click", function(){
    
    if(!radFlag){
        // backgroundEx.style.background = `radial-gradient(${color1.value}, ${color2.value})`;
        linearContainer.style.display = "none";
        radialContainer.style.display = "block";
        conicalContainer.style.display = "none";
        changeRadial();
        linFlag = false;
        radFlag = true;
        conFlag = false;
        cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
    }
    
});
conicButton.addEventListener("click", function(){
    if(!conFlag){
        linearContainer.style.display = "none";
        radialContainer.style.display = "none";
        conicalContainer.style.display = "block";
        changeConical();
        linFlag = false;
        radFlag = false;
        conFlag = true;
        cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
    }

});

color1.addEventListener("change",function(){
    if(linFlag){
        // backgroundEx.style.background = `linear-gradient(${this.value}, ${color2.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color2.addEventListener("change",function(){
    if(linFlag){
         //backgroundEx.style.background = `linear-gradient(${color1.value}, ${this.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color3.addEventListener("change",function(){
    if(linFlag){
        // backgroundEx.style.background = `linear-gradient(${color1.value}, ${this.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color4.addEventListener("change",function(){
    if(linFlag){
        // backgroundEx.style.background = `linear-gradient(${this.value}, ${color2.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color5.addEventListener("change",function(){
    if(linFlag){
         //backgroundEx.style.background = `linear-gradient(${color1.value}, ${this.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color6.addEventListener("change",function(){
    if(linFlag){
        // backgroundEx.style.background = `linear-gradient(${color1.value}, ${this.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color7.addEventListener("change",function(){
    if(linFlag){
        // backgroundEx.style.background = `linear-gradient(${this.value}, ${color2.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});
color8.addEventListener("change",function(){
    if(linFlag){
         //backgroundEx.style.background = `linear-gradient(${color1.value}, ${this.value})`;
        changeLinear();
    }
    else if(radFlag){
        changeRadial();
    }
    else if(conFlag){
        changeConical();
    }
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
});


degree.addEventListener("input",function(){
    degreeNumber.textContent = this.value;
    changeLinear();

});
degreeC.addEventListener("input",function(){
    degreeCNumber.innerText = this.value;
    changeConical();

});
xPostion.addEventListener("input",function(){
    xPos.textContent = this.value + `%`;
    changeRadial();

});
yPostion.addEventListener("input",function(){
    yPos.textContent = this.value + `%`;
    changeRadial();

});
xPostionC.addEventListener("input",function(){
    xPosC.textContent = this.value + `%`;
    changeConical();

});
yPostionC.addEventListener("input",function(){
    yPosC.textContent = this.value + `%`;
    changeConical();

});

function changeLinear(){
    if(numOfColors.value == "2"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value})`;
    }
    else if(numOfColors.value == "3"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value}, ${color3.value})`;
    }
    else if(numOfColors.value == "4"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value}, ${color3.value},
            ${color4.value})`;
    }
    else if(numOfColors.value == "5"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value}, ${color3.value},
            ${color4.value}, ${color5.value})`;
    }
    else if(numOfColors.value == "6"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value}, ${color3.value},
            ${color4.value}, ${color5.value}, ${color6.value})`;
    }
    else if(numOfColors.value == "7"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value}, ${color3.value},
            ${color4.value}, ${color5.value}, ${color6.value}, ${color7.value})`;
    }
    else if(numOfColors.value == "8"){
        backgroundEx.style.background = `linear-gradient(${degree.value}deg,${color1.value}, ${color2.value}, ${color3.value},
            ${color4.value}, ${color5.value}, ${color6.value}, ${color7.value}, ${color8.value})`;
    }
    //backgroundEx.style.background = `linear-gradient(${this.value}deg,${color1.value}, ${color2.value})`;
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`
}
function changeRadial(){
    if(numOfColors.value == "2"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value})`;
    }
    else if(numOfColors.value == "3"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value},
            ${color3.value})`;
    }
    else if(numOfColors.value == "4"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value})`;
    }
    else if(numOfColors.value == "5"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value})`;
    }
    else if(numOfColors.value == "6"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value}})`;
    }
    else if(numOfColors.value == "7"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value}, ${color7.value})`;
    }
    else if(numOfColors.value == "8"){
        backgroundEx.style.background = `radial-gradient(at ${xPostion.value}% ${yPostion.value}%, ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value}, ${color7.value}, ${color8.value})`;
    }
    //backgroundEx.style.background = `linear-gradient(${this.value}deg,${color1.value}, ${color2.value})`;
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`
}
function changeConical(){
    if(numOfColors.value == "2"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%, 
            ${color1.value}, ${color2.value})`;
    }
    else if(numOfColors.value == "3"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%, 
            ${color1.value}, ${color2.value},
            ${color3.value})`;
    }
    else if(numOfColors.value == "4"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%, 
            ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value})`;
    }
    else if(numOfColors.value == "5"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%,
             ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value})`;
    }
    else if(numOfColors.value == "6"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%, 
            ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value})`;
    }
    else if(numOfColors.value == "7"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%, 
            ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value}, ${color7.value})`;
    }
    else if(numOfColors.value == "8"){
        backgroundEx.style.background = `conic-gradient(from ${degreeC.value}deg at ${xPostionC.value}% ${yPostionC.value}%, 
            ${color1.value}, ${color2.value},
            ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value}, ${color7.value}, ${color8.value})`;
    }
    //backgroundEx.style.background = `linear-gradient(${this.value}deg,${color1.value}, ${color2.value})`;
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`
}

function init(){
    color1.value = "#ff0000";
    color2.value = "#0000ff";
    color3.value = "#00ff00";
    color4.value = "#ff9900";
    color5.value = "#ffff00";
    color6.value = "#00ffff";
    color7.value = "#ff00ff";
    color8.value = "#ff0000";

    color3Box.style.display = "none";
    color4Box.style.display = "none";
    color5Box.style.display = "none";
    color6Box.style.display = "none";
    color7Box.style.display = "none";
    color8Box.style.display = "none";

    backgroundEx.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;
    cssCode.innerText = `Code: background: ${backgroundEx.style.background};`;
    linearButton.checked = true;
    numOfColors.value = "2";
    degree.value = "0";
    degreeC.value = "0";
    xPostion.value = "50";
    yPostion.value = "50";
    xPostionC.value = "50";
    yPostionC.value = "50";
}
init();