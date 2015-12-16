
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function BoutiqueBonus() {
	Mine_1 = new BonusMultiplicator(700,2,"Silex");
	Mine_1.setName('Silex');
	Mine_1.setDescription("Une etincelle d'evolution");
	Mine_1.setImg("./Ressources/Images/Bonus/silex.png");

	Mine_2 = new BonusClick(100,3);
	Mine_2.setName('Les clics sont 2 fois plus effectifs');
	Mine_2.setDescription('Un truc qui coupe');
	Mine_2.setImg("./Ressources/Images/Items/Age_bois/hache_bois.png");
	

	this.BonusArray=[Mine_1,Mine_2];
}

BoutiqueBonus.prototype.Afficher= function (div) {
	$('.Bonus').html("");
	var nb = 0;
	this.BonusArray.forEach(function(index,nb){
		$('.Bonus').append(index.Afficher(null,nb));
		$('.Bonus').append(index.Afficher2(null,nb));
		
		nb++;
	});

}


BoutiqueBonus.prototype.RemoveBonus=function(ind){
	
	//this.UpgradeAchat(ind);
	return this.BonusArray.splice(ind,1);
}

BoutiqueBonus.prototype.UpgradeAchat=function(ind){
	var OldBonus =this.BonusArray[ind];
	var NewBonus;
	if (this.BonusArray[ind].constructor.name=="BonusIncome")
	{

		NewBonus = new BonusIncome(parseInt(OldBonus.getCost()*1.5+10),OldBonus.getIncomeAmount()*2);
	}
	 
	this.BonusArray.push(NewBonus);
}

BoutiqueBonus.prototype.getBonus=function(nb){
	return this.BonusArray[nb];
}

BoutiqueBonus.prototype.RefreshBonus=function(LastAchat){
	alert(LastAchat.constructor.name);
	return;
}
