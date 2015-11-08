// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// var img = document.getElementById("scream");
// ctx.drawImage(img,10,10);
// alert("do");
//////CLASS_RendererMap\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function MapRenderer(CanevasID,MapArray) {
	this.Can=document.getElementById(CanevasID);
	this.Canevas=new CanvasState(this.Can);
	this.MapArray=MapArray;


	this.MapWidth = this.MapArray.length;
	this.MapHeight = this.MapArray[0].length;	
	this.Width = this.Canevas.width;
	this.Height = this.Canevas.height;

	this.CoefWidth=this.Width/this.MapWidth;
	this.CoefHeight=this.Height/this.MapHeight;
}

MapRenderer.prototype.GetCanevas= function () {
	return this.Canevas;
};

MapRenderer.prototype.getMapArray=function () {
	return this.MapArray;
};

MapRenderer.prototype.DrawBackground= function () {
	var img = new Image();
	img.src = 'Ressources/Images/Tiles/Grass_1.bmp';
	for	(i = 0; i < this.MapArray.length; i++) {
		for	(j = 0; j < this.MapArray[i].length; j++) {
	   		
	   		switch(this.MapArray[i][j]) {
			    case 0:
			      	this.Canevas.addShape(
			      		new ShapeImage(
			      			i*this.CoefWidth,
			      			j*this.CoefHeight,
			      			this.CoefWidth,
			      			this.CoefHeight,
			      			img
			      			)
			      		);
			        break;
			    case 1:
			        this.Canevas.addShape(
			        	new ShapeColor(
			        		i*this.CoefWidth,
			        		j*this.CoefHeight,
			        		this.CoefWidth,
			        		this.CoefHeight, 
			        		'rgba(127, 255, 212, .5)',
			        		false
			        		));
			        break;
			} 
			
	   	}
	} 
	this.Canevas.draw();
}

MapRenderer.prototype.UpgradeBuild= function (idlvl, item) {
	for	(i = 0; i < this.MapArray.length; i++) {
		for	(j = 0; j < this.MapArray[i].length; j++) {
	   		if (this.MapArray[i][j]==idlvl){
	   			console.log("UpgradeBuild");
	   			this.Canevas.addShape(
			        	new ShapeColor(
			        		i*this.CoefWidth,
			        		j*this.CoefHeight,
			        		this.CoefWidth,
			        		this.CoefHeight, 
			        		'rgb(127, 255, 212)',
			        		true,
			        		item
			        	));
	   			this.MapArray[i][j]=idlvl+1;
	   			this.Canevas.draw();
			return;
	   		}				
	   	}
	} 
}