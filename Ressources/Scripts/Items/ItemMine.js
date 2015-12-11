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


ItemMine.prototype.setTotalIncomeAmount= function (nb) {
    this.TotalIncomeAmount = nb;
}

ItemMine.prototype.getTotalIncomeAmount= function (nb) {
    return this.TotalIncomeAmount;
}

ItemMine.prototype.getIncomeAmount= function () {

    return this.IncomeAmount;
};


ItemMine.prototype.Afficher= function (TypeAffichage,value) {

    var arrondieCost = arrondir(this.getCost());
    var arrondieIncome = arrondir(this.getIncomeAmount());
    $('#bonus').html(arrondieIncome);
    var affiche;
    if (TypeAffichage=='long'){
        affiche= "<div class='Tile'>"+
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
        affiche="<div class='Item' value='"+value+"'><div class='img' ><p>"+this.multiplicator+"</p><img src='"+this.Img+"'></div>"+this.Name+"</br>son cout : "+ arrondieCost+"</br></div>";
    }
    return affiche;
};

ItemMine.prototype.Upgrade= function (MapRenderer) {

	this.IDlvl= this.IDlvl+1;
};

ItemMine.prototype.Action= function () {
	Game.MonGold.AddGold(this.IncomeAmount);
};

function arrondir(resultat) {
     
      resultat2 = Math.round(resultat); 

      return resultat2;
}

ItemMine.prototype.Increment=function () {
    this.multiplicator++;
};

ItemMine.prototype.Add=function (val) {
    this.multiplicator+=val;
};