
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Boutique() {
	

	
	this.nbr_Atelier =0;
	
	this.nbr_Dojo = 0;

	this.nbr_Transformer=0;

	this.nbrJesus=0;


	

	this.ItemArray;
}
Boutique.prototype.Age1= function () {



	Mine_1 = new ItemMine(75,0.2);
	Mine_1.setName('Hache');
	Mine_1.setDescription('Un truc qui coupe');
	Mine_1.setImg("./Ressources/Images/Items/Age_bois/hache_bois.png");

	Mine_2 = new ItemMine(250,0.3);
	Mine_2.setName('Bucheron');
	Mine_2.setDescription('Un peu bête, mais productif !');
	Mine_2.setImg("./Ressources/Images/Items/Age_bois/bucheron.png");

	Mine_3 = new ItemMine(500,0.5);
	Mine_3.setName('Castors');
	Mine_3.setDescription("Des animaux dociles");
	Mine_3.setImg("./Ressources/Images/Items/Age_bois/Castor.png");

	Mine_4 = new ItemMine(1000,1);
	Mine_4.setName('Atelier');
	Mine_4.setDescription("L'usine type de l'âge de pierre (ACHETER EN 5 POUR PASSER D'AGE)");
	Mine_4.setImg("./Ressources/Images/Enseigne/hache.png");

	Mine_5 = new ItemMine(25,0.1);
	Mine_5.setName('Poing');
	Mine_5.setDescription('Ca fait mal mais ça marche');
	Mine_5.setImg("./Ressources/Images/Items/Age_bois/poing.png");

	this.ItemArray=[Mine_5,Mine_1, Mine_2, Mine_3, Mine_4];

}

Boutique.prototype.Age2= function () {
	

	Mine_5.setName('Tranche');
	Mine_5.setDescription("Technique Ancestrale!");
	Mine_5.setImg("./Ressources/Images/Items/Age_Pierre/karate_chop.png");

	Mine_1.setName('Pioche');
	Mine_1.setDescription('Pique et fends');
	Mine_1.setImg("./Ressources/Images/Items/Age_Pierre/pioche.png");

	Mine_2.setName('Sculpteur');
	Mine_2.setDescription('Artiste incompris mais productifs!');
	Mine_2.setImg("./Ressources/Images/Items/Age_Pierre/marteau.png");


	Mine_3.setName('Racaillou');
	Mine_3.setDescription("Pika pika");
	Mine_3.setImg("./Ressources/Images/Items/Age_Pierre/racaillou.png");

	Mine_4.setName('Carriere');
	Mine_4.setDescription("De grandes idées naissent de la pierre");
	Mine_4.setImg("./Ressources/Images/Items/Age_Pierre/mine.png");

	Mine_6 = new ItemMine(5000,2);
	Mine_6.setName('Karateka');
	Mine_6.setDescription("Wataaaa!");
	Mine_6.setImg("./Ressources/Images/Items/Age_Pierre/ryu.png");

	Mine_7 = new ItemMine(7500,5);
	Mine_7.setName('Dojo');
	Mine_7.setDescription("Hadjime (ACHETER EN 10 POUR PASSER D'AGE)");
	Mine_7.setImg("./Ressources/Images/Items/Age_Pierre/dojo.png");
	this.ItemArray=[Mine_5,Mine_1, Mine_2, Mine_3, Mine_4,,Mine_6,Mine_7];
}


Boutique.prototype.Age3= function () {
	Mine_5.setName('Baffe');
	Mine_5.setDescription("La fameuse!");
	Mine_5.setImg("./Ressources/Images/Items/Age_petrole/paume.png");

	Mine_1.setName('Foreuse');
	Mine_1.setDescription('Ca creuse');
	Mine_1.setImg("./Ressources/Images/Items/Age_petrole/foreuse.png");

	Mine_2.setName('Soudeur');
	Mine_2.setDescription('Un homme avec un gros briquet');
	Mine_2.setImg("./Ressources/Images/Items/Age_petrole/soudeur.png");


	Mine_3.setName('Chat');
	Mine_3.setDescription("Wouf");
	Mine_3.setImg("./Ressources/Images/Items/Age_petrole/chat3.png");

	Mine_4.setName('Monsanto');
	Mine_4.setDescription("La force obscure monétisée");
	Mine_4.setImg("./Ressources/Images/Items/Age_petrole/monsanto.png");


	Mine_6.setName('IronMan');
	Mine_6.setDescription("Wataaaa!");
	Mine_6.setImg("./Ressources/Images/Items/Age_petrole/IronMan.png");


	Mine_7.setName('FitnessPark');
	Mine_7.setDescription("Allez on squat les filles");
	Mine_7.setImg("./Ressources/Images/Items/Age_petrole/muscu.png");

	Mine_8 = new ItemMine(12000,6);
	Mine_8.setName('Internet');
	Mine_8.setDescription("un petit pas pour l'homme...");
	Mine_8.setImg("./Ressources/Images/Items/Age_petrole/ie_troll.png");

	Mine_9 = new ItemMine(25000,10);
	Mine_9.setName('Transformer');
	Mine_9.setDescription("Decepticon en avant (ACHETER EN 20 POUR PASSER D'AGE)");
	Mine_9.setImg("./Ressources/Images/Items/Age_petrole/optimus.png");
	this.ItemArray=[Mine_5,Mine_1, Mine_2, Mine_3, Mine_4,,Mine_6,Mine_7,Mine_8,Mine_9];
}

Boutique.prototype.Age4= function () {
	Mine_5.setName('Biffle');
	Mine_5.setDescription("Le phallus de la vérité!");
	Mine_5.setImg("./Ressources/Images/Items/Age_futur/penis.png");

	Mine_1.setName('Sabre Laser');
	Mine_1.setDescription('Briquet du futur');
	Mine_1.setImg("./Ressources/Images/Items/Age_futur/sabre_laser.png");

	Mine_2.setName('Terminator');
	Mine_2.setDescription("La douleur n'est qu'une simple information");
	Mine_2.setImg("./Ressources/Images/Items/Age_futur/terminator.png");


	Mine_3.setName('Alien');
	Mine_3.setDescription("Miaou ??..");
	Mine_3.setImg("./Ressources/Images/Items/Age_futur/alien.png");

	Mine_4.setName('Aperture Science');
	Mine_4.setDescription("Come eat a piece of cake");
	Mine_4.setImg("./Ressources/Images/Items/Age_futur/aperture_science.png");


	Mine_6.setName('Neo');
	Mine_6.setDescription("La cuillere n'existe pas");
	Mine_6.setImg("./Ressources/Images/Items/Age_futur/neo.png");


	Mine_7.setName('Salle du temps');
	Mine_7.setDescription("Entraine des Super Saiyans");
	Mine_7.setImg("./Ressources/Images/Items/Age_futur/salle_temps.png");

	
	Mine_8.setName('Cerebro');
	Mine_8.setDescription("C'est gros , c'est rond , tout ce que j'aime!");
	Mine_8.setImg("./Ressources/Images/Items/Age_futur/cerebro.png");

	Mine_9.setName('DeLorean');
	Mine_9.setDescription("Autant prendre une caisse qui a d'la gueule");
	Mine_9.setImg("./Ressources/Images/Items/Age_futur/delorean.png");

	Mine_10 = new ItemMine(50000,50);
	Mine_10.setName('Trou Noir');
	Mine_10.setDescription("un petit pas pour l'homme...");
	Mine_10.setImg("./Ressources/Images/Items/Age_futur/trou_noir.png");

	Mine_11 = new ItemMine(70000,100);
	Mine_11.setName('Jésus (résurrection)');
	Mine_11.setDescription("Alléluia (ACHETER EN 20 POUR FINIR)");
	Mine_11.setImg("./Ressources/Images/Items/Age_futur/jesus_christ.png");
	this.ItemArray=[Mine_5,Mine_1, Mine_2, Mine_3, Mine_4,,Mine_6,Mine_7,Mine_8,Mine_9,Mine_10,Mine_11];


}



Boutique.prototype.Afficher= function (div) {
	$('#ItemSelling').html("");
	var nb = 0;
	this.ItemArray.forEach(function(index,nb){
		$('#ItemSelling').append(index.Afficher(null,nb));
		nb++;
	});

}


Boutique.prototype.RemoveItem=function(ind){
	
	//this.UpgradeAchat(ind);
	return this.ItemArray.splice(ind,1);
}

Boutique.prototype.UpgradeAchat=function(ind){
	var OldItem =this.ItemArray[ind];
	var NewItem;
	if (this.ItemArray[ind].constructor.name=="ItemIncome")
	{

		NewItem = new ItemIncome(parseInt(OldItem.getCost()*1.5+10),OldItem.getIncomeAmount()*2);
	}
	 
	this.ItemArray.push(NewItem);
}

Boutique.prototype.getItem=function(nb){
	return this.ItemArray[nb];
}

Boutique.prototype.RefreshItem=function(LastAchat){
	alert(LastAchat.constructor.name);
	return;
}
