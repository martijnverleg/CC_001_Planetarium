function Planet(a, b, c, d) {
  this.size = log(a);
  this.pos = b;
  this.col = c;
  this.speed = d;
  this.start = random(360);
  this.time = 0;

  this.update = function(siz, dis, spd, sun) {
    this.relSize = this.size * siz;
    this.relPos = this.pos * dis + sun;
    this.relSpeed = this.speed * spd;
    rotate(degrees(this.start+this.time));
    this.time = this.time + this.relSpeed;
  }

  this.show = function() {
    fill(this.col);
    ellipse(this.relPos, 0, this.relSize, this.relSize);
  }
}