//Bonus BonusIncome
//ajoute un income passif
function BonusIncome(cost,IncomeAmount) {
	this.Name="BonusIncome"
    this.Cost=cost;
    this.IncomeAmount=IncomeAmount;
}
BonusIncome.prototype=new Bonus;
BonusIncome.prototype.constructor= BonusIncome;


BonusIncome.prototype.setIncomeAmount= function (nb) {

    this.IncomeAmount=nb;
};

BonusIncome.prototype.getIncomeAmount= function () {

    return this.IncomeAmount;
};

BonusIncome.prototype.Afficher= function (nb) {
	var arrondieCost = arrondir(this.getCost());
  
	var affiche="<div class='Bonus' value='"+nb+"'>"+this.Name+"</br>son cout : "+ arrondieCost +"</br>";
    return affiche;
};

BonusIncome.prototype.Action= function () {
	Game.MonGold.AddGold(this.IncomeAmount);
};

function arrondir(resultat) {
       
	  resultat2 = Math.round(resultat); 

      return resultat2;
}