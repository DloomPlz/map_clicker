//////CLASS_ITEM\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Item(cost,nom,description,Img) {
	this.Name;
	this.multiplicator=0;
	this.Img=Img || null;
    this.setCost(cost);


}
Item.prototype.setImg= function(Img){
	this.Img = Img;
}
Item.prototype.setCost= function (value) {
    this.Cost = value;
};

Item.prototype.getCost=function () {

    return this.Cost;
};

Item.prototype.setName=function (name) {
	this.Name=name;
};

Item.prototype.getName=function () {
	return this.Name;
};



Item.prototype.setDescription=function (descri) {
	this.Description=descri;
};

Item.prototype.getDescription=function () {
	return this.Description;
};

Item.prototype.Increment=function () {
	this.multiplicator++;
};

Item.prototype.Afficher=function (TypeAffichage,value) {
};


