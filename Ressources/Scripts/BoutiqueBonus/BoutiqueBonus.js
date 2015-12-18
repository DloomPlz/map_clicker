
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function BoutiqueBonus() {
	this.BonusArray;
}

BoutiqueBonus.prototype.Age1= function () {
	

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

	Mine_5 = new BonusMultiplicator(1800,18,"Bucheron");
	Mine_5.setName('Stripteaseuses');
	Mine_5.setDescription("Aucun arbre n'arrête un bucheron , surtout avec une jolie fille derrière! ");
	Mine_5.setImg("./Ressources/Images/Bonus/Bois/poledance.png");


	Mine_6 = new BonusMultiplicator(1800,18,"Bucheron");
	Mine_6.setName("Sirop d'érable");
	Mine_6.setDescription("Les bucherons sont en forme! ");
	Mine_6.setImg("./Ressources/Images/Bonus/Bois/sirop_derable.png");


	// --------------------BONUS Castors --------------------

	Mine_7 = new BonusMultiplicator(3000,18,"Castors");
	Mine_7.setName("Dentifirice");
	Mine_7.setDescription("Plus forte ,plus blanche : meilleurs dents! ");
	Mine_7.setImg("./Ressources/Images/Bonus/Bois/dentifrice.png");


	Mine_8 = new BonusMultiplicator(3000,18,"Castors");
	Mine_8.setName("Queue de fer");
	Mine_8.setDescription("Pas de sous entendu... ");
	Mine_8.setImg("./Ressources/Images/Bonus/Bois/queue_fer.png");


	// --------------------BONUS Castors --------------------

	Mine_9 = new BonusMultiplicator(4000,18,"Atelier");
	Mine_9.setName("Meule d'affutage");
	Mine_9.setDescription("Et que ca meule !");
	Mine_9.setImg("./Ressources/Images/Bonus/Bois/meule.png");


	Mine_10 = new BonusMultiplicator(4000,18,"Atelier");
	Mine_10.setName("Grosse soirée");
	Mine_10.setDescription("Party Hard ");
	Mine_10.setImg("./Ressources/Images/Bonus/Bois/boule_disco.png");


	// --------------------BONUS Curseurs --------------------

	Mine_11 = new BonusClick(1,4);
	Mine_11.setName("Main Caleuses");
	Mine_11.setDescription("Vos mains se sont habitués à couper");
	Mine_11.setImg("./Ressources/Images/Bonus/Bois/main.png");


	Mine_12 = new BonusClick(1800,5);
	Mine_12.setName("Fap fap fap fap...");
	Mine_12.setDescription("Fap");
	Mine_12.setImg("./Ressources/Images/Bonus/Bois/fap.png");

	// --------------------BONUS RPS --------------------



	this.BonusArray=[Mine_1,Mine_2,Mine_3,Mine_4,Mine_5,Mine_6,Mine_7,Mine_8,Mine_9,Mine_10,Mine_11,Mine_12];

}

BoutiqueBonus.prototype.Age2= function () {
	this.BonusArray;
	// ----------------------  BONUS Pioche ----------------
	Mine_13 = new BonusMultiplicator(5000,15,"Pioche");
	Mine_13.setName('Manche en Hickory');
	Mine_13.setDescription("Le même manche , mais en mieux");
	Mine_13.setImg("./Ressources/Images/Bonus/Pierre/manche_hickory.png");


	Mine_14 = new BonusMultiplicator(7500,18,"Pioche");
	Mine_14.setName('Affutage');
	Mine_14.setDescription("Ca rentre comme papa dans maman!");
	Mine_14.setImg("./Ressources/Images/Bonus/Pierre/pierre_afutage.png");


	

	
	// --------------------BONUS Sculpteur --------------------

	Mine_15 = new BonusMultiplicator(1000,15,"Sculpteur");
	Mine_15.setName('Gradine');
	Mine_15.setDescription("Précision digne d'un aimbot! ");
	Mine_15.setImg("./Ressources/Images/Bonus/Pierre/gradine.png");


	Mine_16 = new BonusMultiplicator(1800,18,"Sculpteur");
	Mine_16.setName("Bonne zik");
	Mine_16.setDescription("On se met bien ! ");
	Mine_16.setImg("./Ressources/Images/Bonus/Pierre/enceinte.png");


	// --------------------BONUS Racaillou --------------------

	Mine_17 = new BonusMultiplicator(3000,15,"Racaillou");
	Mine_17.setName("Centre Pokemon");
	Mine_17.setDescription("Voulez-vous les soigner? ");
	Mine_17.setImg("./Ressources/Images/Bonus/Pierre/centre_pokemon.png");


	Mine_18 = new BonusMultiplicator(3000,18,"Racaillou");
	Mine_18.setName("Pierre Feu");
	Mine_18.setDescription("Quoi ? On dirait que racaillou évolue ! ");
	Mine_18.setImg("./Ressources/Images/Bonus/Pierre/Pierre_feu.png");


	// --------------------BONUS Karateka --------------------

	Mine_19 = new BonusMultiplicator(1500,15,"Karateka");
	Mine_19.setName("Ceinture Noire");
	Mine_19.setDescription("Yamete Senpai!");
	Mine_19.setImg("./Ressources/Images/Bonus/Pierre/ceinture_noire.png");


	Mine_20 = new BonusMultiplicator(3000,18,"Karateka");
	Mine_20.setName("Concentration");
	Mine_20.setDescription("Ahhhhmmmmmmmmmmmmm");
	Mine_20.setImg("./Ressources/Images/Bonus/Pierre/concentration.png");

	// --------------------BONUS Carriere --------------------

	Mine_21 = new BonusMultiplicator(1500,15,"Carriere");
	Mine_21.setName("Brouette");
	Mine_21.setDescription("Et je parle pas de la position!");
	Mine_21.setImg("./Ressources/Images/Bonus/Pierre/brouette.png");


	Mine_22 = new BonusMultiplicator(4000,18,"Carriere");
	Mine_22.setName("Shoot de poudre");
	Mine_22.setDescription("Pas la pierre");
	Mine_22.setImg("./Ressources/Images/Bonus/Pierre/coc.png");

// --------------------BONUS Dojo --------------------

	Mine_23 = new BonusMultiplicator(1500,15,"Dojo");
	Mine_23.setName("Mannequin de bois");
	Mine_23.setDescription("Le karate coupant!");
	Mine_23.setImg("./Ressources/Images/Bonus/Pierre/mannequin-de-bois.png");


	Mine_24 = new BonusMultiplicator(4000,18,"Dojo");
	Mine_24.setName("Nunchaku");
	Mine_24.setDescription("Avec de l'equipement, ca va plus vite");
	Mine_24.setImg("./Ressources/Images/Bonus/Pierre/nunchaku.png");



	// --------------------BONUS Clique --------------------

	Mine_25= new BonusClick(10000,10);
	Mine_25.setName("Poing du dragon");
	Mine_25.setDescription("Vos mains sont en feu");
	Mine_25.setImg("./Ressources/Images/Bonus/Pierre/Shenron-Zenkai.png");


	Mine_26 = new BonusClick(15000,18);
	Mine_26.setName("Potion Magique");
	Mine_26.setDescription("Les Gaulois avait donc raison...");
	Mine_26.setImg("./Ressources/Images/Bonus/Pierre/potion_magique.png");

	// --------------------BONUS RPS --------------------
	this.BonusArray=[Mine_13,Mine_14,Mine_15,Mine_16,Mine_17,Mine_16,Mine_17,Mine_18,Mine_19,Mine_20,Mine_23,Mine_24];
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
