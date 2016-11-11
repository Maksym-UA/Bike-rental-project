void setup() {
   size(1600, 150);
  
}

void draw() {
  noStroke();
  background(255);
  fill(20, 15);
  for(int i=10; i< width; i+=20){
    for(int j=5; j<height; j+=20){
      ellipse(i, j, 3,3);
    }
  }
  
}