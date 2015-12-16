//////CLASS_Bonus\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function Bonus(cost,nom,description,Img) {
	this.Name;
	this.Description=description;
    this.setCost(cost);
	this.Img=Img || null;

}

Bonus.prototype.setImg= function(Img){
	this.Img = Img;
}

Bonus.prototype.setCost= function (value) {
    this.Cost = value;
    
};

Bonus.prototype.getCost=function () {

    return this.Cost;
};

Bonus.prototype.setName=function (name) {
	this.Name=name;
};

Bonus.prototype.getName=function () {
	return this.Name;
};



Bonus.prototype.setDescription=function (descri) {
	this.Description=descri;
};

Bonus.prototype.getDescription=function () {
	return this.Description;
};

Bonus.prototype.Upgrade=function () {
};

Bonus.prototype.Afficher=function (TypeAffichage,value) {
};


