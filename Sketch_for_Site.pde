MovingBall centre;
MovingBall[] arounds;

int numOfBalls;
   

void setup() {
  size(1600,350);

  numOfBalls = 200;
 centre = new MovingBall(width/2, height/2);
  arounds = new MovingBall[numOfBalls];
 
  for (int i=0; i < arounds.length; i++ ) {
    arounds[i] = new MovingBall(random(width), random(height) );
  }
    background(255);
 }


void draw() {
  //background(0);
    //centre.run();
   for (int i=0; i < arounds.length; i++ ) {
     arounds[i].run();
   }
}
     
  
  
/*
 * MovingBall class
 *
 * Represents a moving ball that moves in a single direction
 *
 */
class MovingBall {

  float x, y;        // position
  float tx, ty;      // target in x and y
  float step, inc;
  float radius;
 int numOfDirections =1;// from 1 -9
  int direction;


  // constructor
  // create a moving ball at the supplied position (x_, y_)
  MovingBall(float x_, float y_) {
    x = x_;
    y = y_;

    reset();
  }
  
  // run
  // calls move() followed by display()
  void run() {
    this.move();    // this refers to the current object
    this.display();
  }

  // move
  // move the ball in the desired direction
  void move() {

    step -= inc;

    if (step < 0) {
      x = tx;
      y = ty;
      reset();
    }

    x = lerp(tx, x, step); 
    y = lerp(ty, y, step);

    checkBounds();
  }

  // checkBounds
  // checks that the ball is within the display window.
  // If it reaches the edge, move in the opposite direction
  void checkBounds() {
    if (x <= 0 || x >= width || y <= 0 || y >= height) {
      x = width/2;
      y = height/2;
      reset();
    }
  }

  void reset() {
    step = 1;
    inc = random(0.01);
    radius = random(10, 50);

    float angleUnit = TWO_PI/numOfDirections; 
    direction = (int) random(numOfDirections);

    tx = x + radius*cos(direction * angleUnit);
    ty = y + radius*sin(direction * angleUnit);
    
  }
  
  // display method
  //
  //
  void display() {
   
    noStroke();
     //rectMode(CENTER);
   // fill(255, 30);
    //rect(tx, ty, 5, 5);
    fill(220, 60);
    ellipse(x, y, 2, 2);
   
  }
}