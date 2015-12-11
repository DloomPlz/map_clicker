
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function BoutiqueBonus() {
	Mine_1 = new BonusMultiplicator(100,2,"Hache");
	Mine_1.setName('Ajoute+1');
	Mine_1.setDescription('Un truc qui coupe');

	Mine_2 = new BonusClick(100,3);
	Mine_2.setName('Click+2');
	Mine_2.setDescription('Un truc qui coupe');
	

	this.BonusArray=[Mine_1,Mine_2];
}

BoutiqueBonus.prototype.Afficher= function (div) {
	$('.Bonus').html("");
	var nb = 0;
	this.BonusArray.forEach(function(index,nb){
		$('.Bonus').append(index.Afficher(nb));
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
