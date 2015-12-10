//item ItemMine
//ajoute un income passif de pierre
function ItemMine(cost,IncomeAmount) {
	this.Name="ItemMine"
    this.Cost=cost;
    this.IncomeAmount=IncomeAmount;
    this.IDlvl=200;
}
ItemMine.prototype=new Item;
ItemMine.prototype.constructor= ItemMine;


ItemMine.prototype.setIncomeAmount= function (nb) {
    this.IncomeAmount=nb;
};

ItemMine.prototype.getIncomeAmount= function () {
    return this.IncomeAmount;
};

ItemMine.prototype.Afficher= function (TypeAffichage,value) {
    var affiche;
    if (TypeAffichage=='long'){
        affiche= "<div class='Tile'>"+
                    "<u class='nom'>"+
                        this.getName()+
                    "</u>"+
                    "<div class='caracteristiques'>"+
                        "<u>caracteristiques :</u> <br>"+
                        this.getIncomeAmount()+
                    "</div>"+
                    "<div class='description'>"+
                        "<u>description :</u> <br>"+
                        this.getDescription()+
                    "</div>"+
                   
                "</div>";
    }
    else {
        affiche="<div class='Item' value='"+value+"'>"+this.Name+"</br>son cout : "+ this.getCost()+"</br>Son Income :"+this.getIncomeAmount()+"</div>";
    }
    return affiche;
};

ItemMine.prototype.Upgrade= function (MapRenderer) {
	Game.Map.UpgradeBuild(this.IDlvl,this);
	this.IDlvl= this.IDlvl+1;
};

ItemMine.prototype.Action= function () {
	Game.MonGold.AddGold(this.IncomeAmount);
};