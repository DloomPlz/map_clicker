//Bonus BonusMine
//ajoute un income passif de pierre
function BonusMine(cost,Multiplicator) {
	this.Name="BonusMine";
    this.Multiplicateur=Multiplicator;
    this.Cost=cost;
    this.IDlvl=200;
}
BonusMine.prototype=new Bonus;
BonusMine.prototype.constructor= BonusMine;

BonusMine.prototype.Afficher= function (TypeAffichage,value) {

    var arrondieCost = arrondir(this.getCost());

    var affiche;
    if (TypeAffichage=='long'){
        affiche= "<div class='MiniTile'>"+
                    "<u class='nom'>"+
                        this.getName()+
                    "</u>"+
                   
                    "<div class='description'>"+
                        "<u>description :</u> <br>"+
                        this.getDescription()+
                    "</div>"+
                   
                "</div>";
    }
    else {
        affiche="<div class='BonusTile' value='"+value+"'>"+this.Name+"</br>son cout : "+ arrondieCost+"</br>";
    }
    return affiche;
};


BonusMine.prototype.Action= function () {
	Game.MonGold.AddGold(this.IncomeAmount);
};

function arrondir(resultat) {
     
      resultat2 = Math.round(resultat); 

      return resultat2;
}