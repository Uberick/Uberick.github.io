//start function for the start button
function start(){
    //this line disables the start button from being pressed
    document.getElementById("start").disabled = true;
    //this line enables the stop button to be pressed again after it was disabled
    document.getElementById("stop").disabled = false;

    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);

}

//stop function for the stop button
function stop(){
    //this line disables the stop button from being pressed
    document.getElementById("stop").disabled = true;
    //this line enables the start button to be pressed again after it was disabled
    document.getElementById("start").disabled = false;

    clearInterval(timer);
}

//dom required
function getData(){
    var loadedData = loadData();
    return loadedData;
}

//dom required
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

//this function loads the sound into the page
function playSound(){
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

//this function loads the sound into the page
function playSpace(){
    mySound = new sound("ES_Helix Nebula.mp3");
    mySound.play();
}

//this function creates the source for the sounds without displaying it
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }

    this.stop = function(){
        this.sound.pause();
    }

}


class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temperature,
        digitalSensor_temperature,
        cssSensor_temperature,
        cssSensor_eC02,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temperature = bmpSensor_temperature;
        this.digitalSensor_temperature = digitalSensor_temperature;
        this.cssSensor_temperature = cssSensor_temperature;
        this.cssSensor_eC02 = cssSensor_eC02;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}