//////CLASS_InventaireBonus\\\\\\\\\\\\\\\\\\
//gere le prix des differents bonus 


function InventaireBonus() {
	this.BonusArray=[];
}

Inventaire.prototype.Afficher= function (div) {
	$('#BonusInventory').html("");
	this.BonusArray.forEach(function(index){
		$('#BonusInventory').append(index.Afficher(index));
	})
}

Inventaire.prototype.RemoveBonus=function(ind){
	return this.BonusArray.splice(ind,1);
}

Inventaire.prototype.AddBonus=function(NouveauBonus){
	var existant= 0;
	
		this.BonusArray.push(NouveauBonus);
		NouveauBonus.Upgrade();
	

}

Inventaire.prototype.UseBonuss=function(){
	this.BonusArray.forEach(function(index){
		index.Action();
	})
	Game.Update();
}
