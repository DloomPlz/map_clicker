//////CLASS_ITEM\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Item(cost,nom,description) {
	this.Name;
    this.setCost(cost);

}

Item.prototype.setCost= function (value) {
    this.Cost = value;
    return this;
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

Item.prototype.Upgrade=function () {
};

Item.prototype.Afficher=function (TypeAffichage,value) {
};


