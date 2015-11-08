// Class Shape (detain information to draw objects)
//in our case only rectangles

function ShapeImage(x, y, w, h, link, drag) {
  //check if values existe
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.img = new Image();
  this.img.src ='Images/Tiles/Grass_1.bmp';
  this.drag=drag || false;
}

// Draws this shape to a given context
ShapeImage.prototype.draw = function(Context) {
  this.img = new Image();
  this.img.src ='Images/Tiles/Grass_1.bmp';
  Context.drawImage(this.img, this.x, this.y, this.w, this.h);
}

// Determine if a point is inside the shape's bounds
ShapeImage.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

