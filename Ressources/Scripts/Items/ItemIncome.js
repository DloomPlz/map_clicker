//item ItemIncome
//ajoute un income passif
function ItemIncome(cost,IncomeAmount) {
	  this.Name="ItemIncome"
    this.Cost=cost;
    this.IncomeAmount=IncomeAmount;
}
ItemIncome.prototype=new Item;
ItemIncome.prototype.constructor= ItemIncome;


ItemIncome.prototype.setIncomeAmount= function (nb) {

    this.IncomeAmount=nb;
};

ItemIncome.prototype.getIncomeAmount= function () {

    return this.IncomeAmount;
};

ItemIncome.prototype.Afficher= function (nb) {
	var arrondieCost = arrondir(this.getCost());
	var arrondieIncome = arrondir(this.getIncomeAmount());
	var affiche="<div class='Item' value='"+nb+"'>"+this.Name+"</br>son cout : "+ arrondieCost +"</br>";
    return affiche;
};

ItemIncome.prototype.Action= function () {
	Game.MonGold.AddGold(this.IncomeAmount);
};

function arrondir(resultat) {
    resultat2 = resultat;          
	  resultat2 = Math.round(resultat2); 

      return resultat2;
}