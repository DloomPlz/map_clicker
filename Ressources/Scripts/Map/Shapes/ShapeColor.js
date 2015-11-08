// Class Shape (detain information to draw objects)
//in our case only rectangles

function ShapeColor(x, y, w, h, fill,drag,LinkItem) {
  //check if values existe
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.fill = fill || '#AAAAAA';
  //   drawImage(img,i*this.CoefWidth,j*this.CoefHeight,this.CoefWidth,this.CoefHeight);
// var img = new Image();
//   img.src = 'Images/Tiles/Grass_1.bmp';
  this.drag=drag || false;
  this.LinkItem=LinkItem;
}

// Draws this shape to a given context
ShapeColor.prototype.draw = function(Context) {
  Context.fillStyle = this.fill;
  Context.fillRect(this.x, this.y, this.w, this.h);
}

// Determine if a point is inside the shape's bounds
ShapeColor.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

