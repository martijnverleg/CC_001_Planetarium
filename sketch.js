var sizeSlider, distanceSlider, speedSlider;
var planets = [];

function setup() {
	createCanvas(windowWidth, windowHeight -100);

	sizeLabel = createP('Size: ');
	sizeSlider = createSlider(0, 100, 5);
	distanceLabel = createP('Distance: ');
	distanceSlider = createSlider(0, 100, 8);
	speedLabel = createP('Speed: ');
	speedSlider = createSlider(0, 100, 10);
	sunLabel = createP('Sun size: ');
	sunSlider = createSlider(1, 100, 50);

	planets[0] = new Planet(109.1, 0.0, "#FFF0", 0.0); // sun
	planets[1] = new Planet(0.387, 0.387, "#90F", 58.8); // mercury
	planets[2] = new Planet(0.723, 0.722, "#0FF", -244); // venus
	planets[3] = new Planet(1, 1, "#0F0", 1); // earth
	planets[4] = new Planet(0.532, 1.52, "#F00", 1.03); // mars
	planets[5] = new Planet(11.21, 5.20, "#F90", 0.415); // jupiter
	planets[6] = new Planet(9.45, 9.58, "#FC0", 0.445); // saturn
	planets[7] = new Planet(4.01, 19.20, "#9FF", -0.720); // uranus
	planets[8] = new Planet(3.88, 30.05, "#00F", 0.673); // neptune
	planets[9] = new Planet(0.186, 39.48, "#F99", 6.41);  // pluto
}

function draw() {
  background(25, 25, 75);

  relSize = sizeSlider.value();
  sunSize = sunSlider.value();
  relDistance = distanceSlider.value();
  relSpeed = speedSlider.value() / 10000000;

  noStroke();
  fill(255, 255, 235);
  ellipse(windowWidth / 2 , (windowHeight - 100) / 2 , sunSize, sunSize);
  
  translate(width/2, height/2);

  for(i = 1; i < planets.length; i++) {
    planets[i].update(relSize, relDistance, relSpeed, sunSize);
    planets[i].show();
  }
}