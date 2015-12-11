//Bonus BonusMultiplicator
//ajoute un income passif
function BonusMultiplicator(cost,BonusValue,ItemName) {
    this.Name="BonusMultiplicator"
    this.Cost=cost;
    this.BonusValue=BonusValue;
    this.ItemName=ItemName;
}
BonusMultiplicator.prototype=new Bonus;
BonusMultiplicator.prototype.constructor= BonusMultiplicator;


BonusMultiplicator.prototype.setBonusMultiplicator= function (nb) {
    this.BonusValue=nb;
};

BonusMultiplicator.prototype.Afficher= function (nb) {
	var arrondieCost = arrondir(this.getCost());
  
	var affiche="<div id='BonusSelling' value='"+nb+"'>"+this.Name+"</br>son cout : "+ arrondieCost;
    return affiche;
};

BonusMultiplicator.prototype.Action= function () {
    var NAME=this.ItemName;
    var VALUE=this.BonusValue;
    console.log("Action");
    Game.MaBoutique.ItemArray.forEach(function(index){
        console.log(NAME+"=?="+index.getName());
        if(index.getName()==NAME){
            console.log("Found!");
            index.Add(VALUE);
        }
    });
};

function arrondir(resultat) {
       
	  resultat2 = Math.round(resultat); 

      return resultat2;
}