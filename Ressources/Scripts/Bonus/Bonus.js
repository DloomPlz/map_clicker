//////CLASS_Bonus\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function Bonus(cost,nom,description) {
	this.Name;

    this.setCost(cost);


}

Bonus.prototype.setCost= function (value) {
    this.Cost = value;
    return this;
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


