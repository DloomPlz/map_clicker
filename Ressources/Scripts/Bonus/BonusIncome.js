//Bonus BonusIncome
//mulitplie income item ou total
function BonusIncome(cost,BonusValue) {
    this.Name="BonusIncome"
    this.Cost=cost;
    this.BonusValue=BonusValue;

}
BonusIncome.prototype=new Bonus;
BonusIncome.prototype.constructor= BonusIncome;


BonusIncome.prototype.setBonusIncome= function (nb) {
    this.BonusValue=nb;
};

BonusIncome.prototype.Afficher= function (nb) {
	var arrondieCost = arrondir(this.getCost());
  
	var affiche="<div class='BonusSelling' value='"+nb+"'><div class='img' ><img src='"+this.Img+"'></div></div>";
    return affiche;
};

BonusIncome.prototype.Afficher2= function (nb) {
    var arrondieCost = arrondir(this.getCost());
    var affiche2 = "<div class='BonusHover' value='"+nb+"'>"+this.Name+"</br>son cout : "+ arrondieCost+"</br> <p>"+ this.Description +"</p></div>";
    return affiche2;
};

BonusIncome.prototype.Action= function () {
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