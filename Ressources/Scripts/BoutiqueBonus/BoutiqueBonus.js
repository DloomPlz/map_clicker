
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function BoutiqueBonus() {


	// ----------------------  BONUS HACHE ----------------
	Mine_1 = new BonusMultiplicator(1,2,"Hache");
	Mine_1.setName('Silex');
	Mine_1.setDescription("Une etincelle d'evolution");
	Mine_1.setImg("./Ressources/Images/Bonus/Bois/silex.png");


	Mine_2 = new BonusMultiplicator(500,3,"Hache");
	Mine_2.setName('Basalte');
	Mine_2.setDescription("Une etincelle d'evolution");
	Mine_2.setImg("./Ressources/Images/Bonus/Bois/basalte.png");


	Mine_3 = new BonusMultiplicator(700,4,"Hache");
	Mine_3.setName('Manche en Hickory');
	Mine_3.setDescription('La fierté des Achéens!');
	Mine_3.setImg("./Ressources/Images/Bonus/Bois/manche_hickory.png");


	Mine_4 = new BonusMultiplicator(1000,5,"Hache");
	Mine_4.setName('Granite');
	Mine_4.setDescription("Plus dure que mes poings, c'est dire ! ");
	Mine_4.setImg("./Ressources/Images/Bonus/Bois/granite.png");

	
	// --------------------BONUS BUCHERONS --------------------

	Mine_5 = new BonusMultiplicator(2000,2,"Bucheron");
	Mine_5.setName('Stripteaseuses');
	Mine_5.setDescription("Aucun arbre n'arrête un bucheron , surtout avec une jolie fille derrière! ");
	Mine_5.setImg("./Ressources/Images/Bonus/Bois/poledance.png");


	Mine_6 = new BonusMultiplicator(2000,2,"Bucheron");
	Mine_6.setName("Sirop d'érable");
	Mine_6.setDescription("Les bucherons sont en forme! ");
	Mine_6.setImg("./Ressources/Images/Bonus/Bois/sirop_derable.png");


	// --------------------BONUS Castors --------------------

	Mine_7 = new BonusMultiplicator(3000,2,"Castors");
	Mine_7.setName("Dentifirice");
	Mine_7.setDescription("Plus forte ,plus blanche : meilleurs dents! ");
	Mine_7.setImg("./Ressources/Images/Bonus/Bois/dentifrice.png");


	Mine_8 = new BonusMultiplicator(3000,2,"Castors");
	Mine_8.setName("Queue de fer");
	Mine_8.setDescription("Pas de sous entendu... ");
	Mine_8.setImg("./Ressources/Images/Bonus/Bois/queue_fer.png");


	// --------------------BONUS Castors --------------------

	Mine_9 = new BonusMultiplicator(4000,2,"Atelier");
	Mine_9.setName("Meule d'affutage");
	Mine_9.setDescription("");
	Mine_9.setImg("./Ressources/Images/Bonus/Bois/meule.png");


	Mine_10 = new BonusMultiplicator(4000,2,"Atelier");
	Mine_10.setName("Grosse soirée");
	Mine_10.setDescription("");
	Mine_10.setImg("./Ressources/Images/Bonus/Bois/boule_disco.png");


	// --------------------BONUS Curseurs --------------------

	Mine_11 = new BonusClick(1000,4);
	Mine_11.setName("Main Caleuses");
	Mine_11.setDescription("Vos mains se sont habitués à couper");
	Mine_11.setImg("./Ressources/Images/Bonus/Bois/main.png");


	Mine_12 = new BonusClick(2000,5);
	Mine_12.setName("Branlette");
	Mine_12.setDescription("Plus gros biceps");
	Mine_12.setImg("./Ressources/Images/Bonus/Bois/fap.png");

	// --------------------BONUS RPS --------------------


	this.BonusArray=[Mine_1,Mine_2,Mine_3,Mine_4,Mine_5,Mine_6,Mine_7,Mine_8,Mine_9,Mine_10,Mine_11,Mine_12];
}

BoutiqueBonus.prototype.Afficher= function (div) {
	$('.Bonus').html("");
	var nb = 0;
	this.BonusArray.forEach(function(index,nb){
		$('.Bonus').append(index.Afficher(nb));
		$('.Bonus').append(index.Afficher2(nb));
		
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
