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
  
	var affiche="<div class='BonusSelling' value='"+nb+"'><div class='img' ><img src='"+this.Img+"'></div></div>";
    return affiche;
};

BonusMultiplicator.prototype.Afficher2= function (nb) {
    var arrondieCost = arrondir(this.getCost());
    var affiche2 = "<div class='BonusHover' value='"+nb+"'>"+this.Name+"</br>son cout : "+ arrondieCost+"</br> <p>"+ this.Description +"</p></div>";
    return affiche2;
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