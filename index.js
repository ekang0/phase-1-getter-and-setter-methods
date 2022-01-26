// Add your Circle class here
const pi = Math.PI;

class Circle {
  constructor(radius){
    this.radius = radius
  };
  
  get diameter() {
    return this.radius * 2
  };
  get circumference() {
    return pi * (this.radius * 2)
  };
  get area() {
    return pi * (this.radius * this.radius)
  };

  set diameter(diameter){
    this.radius = diameter / 2
  };
  set circumference(circum) {
    this.radius = circum / (2 * pi)
  };
  set area(area){
    this.radius = Math.sqrt(area / pi)
  };

}

/* 
PEMDAS
Diameter = radius • 2
Circumference = π • diameter
Area = π • radius2
*/