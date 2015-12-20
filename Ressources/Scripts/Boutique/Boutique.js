
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Boutique() {
	

	
	this.nbr_Atelier =0;
	
	this.nbr_Dojo = 0;

	this.nbrTransformer=0;


	

	this.ItemArray;
}
Boutique.prototype.Age1= function () {



	Mine_1 = new ItemMine(100,0.15);
	Mine_1.setName('Hache');
	Mine_1.setDescription('Un truc qui coupe');
	Mine_1.setImg("./Ressources/Images/Items/Age_bois/hache_bois.png");

	Mine_2 = new ItemMine(250,0.2);
	Mine_2.setName('Bucheron');
	Mine_2.setDescription('Un peu bête, mais productif !');
	Mine_2.setImg("./Ressources/Images/Items/Age_bois/bucheron.png");

	Mine_3 = new ItemMine(500,0.3);
	Mine_3.setName('Castors');
	Mine_3.setDescription("L'usine type de l'âge de pierre");
	Mine_3.setImg("./Ressources/Images/Items/Age_bois/Castor.png");

	Mine_4 = new ItemMine(1000,0.5);
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
	Mine_5.setImg("./Ressources/Images/Items/Age_Pierre/ryu.png");

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

	Mine_7 = new ItemMine(10000,5);
	Mine_7.setName('Dojo');
	Mine_7.setDescription("Hadjime (ACHETER EN 10 POUR PASSER D'AGE)");
	Mine_7.setImg("./Ressources/Images/Items/Age_Pierre/dojo.png");
	this.ItemArray=[Mine_5,Mine_1, Mine_2, Mine_3, Mine_4,,Mine_6,Mine_7];
}


Boutique.prototype.Age3= function () {
	Mine_5.setName('Baffe');
	Mine_5.setDescription("La fameuse!");
	Mine_5.setImg("./Ressources/Images/Items/Age_Pierre/paume.png");

	Mine_1.setName('Foreuse');
	Mine_1.setDescription('Ca creuse');
	Mine_1.setImg("./Ressources/Images/Items/Age_Pierre/pioche.png");

	Mine_2.setName('Soudeur');
	Mine_2.setDescription('Un homme avec un gros briquet');
	Mine_2.setImg("./Ressources/Images/Items/Age_Pierre/nitro.png");


	Mine_3.setName('Chat');
	Mine_3.setDescription("Wouf");
	Mine_3.setImg("./Ressources/Images/Items/Age_Pierre/racaillou.png");

	Mine_4.setName('Monsanto');
	Mine_4.setDescription("olé");
	Mine_4.setImg("./Ressources/Images/Items/Age_Pierre/mine.png");


	Mine_6.setName('IronMan');
	Mine_6.setDescription("Wataaaa!");
	Mine_6.setImg("./Ressources/Images/Items/Age_Pierre/ryu.png");


	Mine_7.setName('Salle de Muscu');
	Mine_7.setDescription("Allez on squat les filles");
	Mine_7.setImg("./Ressources/Images/Items/Age_Pierre/dojo.png");

	Mine_8 = new ItemMine(125000,2.5);
	Mine_8.setName('Internet');
	Mine_8.setDescription("Le boss du XXI siecle");
	Mine_8.setImg("./Ressources/Images/Items/Age_Pierre/dojo.png");

	Mine_9 = new ItemMine(150000,5);
	Mine_9.setName('Transformer');
	Mine_9.setDescription("Decepticon en avant (ACHETER EN 20 POUR PASSER D'AGE)");
	Mine_9.setImg("./Ressources/Images/Items/Age_Pierre/optimus.png");
	this.ItemArray=[Mine_5,Mine_1, Mine_2, Mine_3, Mine_4,,Mine_6,Mine_7,Mine_8,Mine_9];
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
