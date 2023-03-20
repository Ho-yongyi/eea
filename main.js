status = "";
img ="";
resul = [];
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", moadLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects"
}
function draw()
{
    image(video, 0, 0, 300, 300);
    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResults);
        for(i=0; i<resul.length;i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Dectected";
            document.getElementById("no").innerHTML = "Number of objects detected are: " + resul.length;
            fill(r,g,b);
            percent = floor(resul[i].confidence * 100);
            text(resul[i].label + " "+ percent + "%", resul[i].x, resul[i].y);
            noFill();
            stroke(r,g,b);
            rect(resul[i].x, resul[i].y, resul[i].width, resul[i].height)
       }
    }
    // fill("red");
    // text("dog", 100, 100);
    // stroke("red");
    // noFill();
    // rect(150, 150, 250, 250);

    // noFill();
    // stroke("red");
    // rect(250, 200, 100, 100);
    // fill("red");
    // text("cat", 250, 210);
}
function moadLoaded()
{
    console.log("model is loaded");
    status = true;
}
function gotResults(error, results)
{
    if(error)
    [
        console.error("error")
    ]
    else
    {
        console.log(results);
        resul = results;
    }
}