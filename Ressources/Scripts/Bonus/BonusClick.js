//Bonus BonusClick
//ajoute un income passif
function BonusClick(cost,BonusValue) {
    this.Name="BonusClick"
    this.Cost=cost;
    this.BonusValue=BonusValue;
}
BonusClick.prototype=new Bonus;
BonusClick.prototype.constructor= BonusClick;


BonusClick.prototype.setBonusClick= function (nb) {
    this.BonusValue=nb;
};

BonusClick.prototype.Afficher= function (nb) {
	var arrondieCost = arrondir(this.getCost());
  
	var affiche="<div class='Bonus' value='"+nb+"'>"+this.Name+"</br>son cout : "+ arrondieCost +"</br>";
    return affiche;
};

BonusClick.prototype.Action= function () {
	ClickAdd+=this.BonusValue;
    console.log(ClickAdd);
};

function arrondir(resultat) {
       
	  resultat2 = Math.round(resultat); 

      return resultat2;
}