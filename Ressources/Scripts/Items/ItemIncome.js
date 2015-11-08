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
	var affiche="<div class='Item' value='"+nb+"'>"+this.Name+"</br>son cout : "+ this.getCost()+"</br>Son Income :"+this.getIncomeAmount()+"</div>";
    return affiche;
};

ItemIncome.prototype.Action= function () {
	Game.MonGold.AddGold(this.IncomeAmount);
};