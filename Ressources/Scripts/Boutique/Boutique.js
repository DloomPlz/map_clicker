
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Boutique() {
	

	var nbr_Hache = 0;
	var nbr_Burcheron = 0;
	var nbr_Castor = 0 ;
	this.nbr_Atelier =0;
	var nbr_Pioche = 0;
	var nbr_Sculpteur = 0;
	var nbr_Racaillou = 0;
	var nbr_Carriere = 0;
	var nbr_Karateka = 0;
	var nbr_Dojo = 0;

	

	this.ItemArray;
}
Boutique.prototype.Age1= function () {

	Mine_1 = new ItemMine(25,0.1);
	Mine_1.setName('Hache');
	Mine_1.setDescription('Un truc qui coupe');
	Mine_1.setImg("./Ressources/Images/Items/Age_bois/hache_bois.png");

	Mine_2 = new ItemMine(100,0.2);
	Mine_2.setName('Bucheron');
	Mine_2.setDescription('Un peu bête, mais productif !');
	Mine_2.setImg("./Ressources/Images/Items/Age_bois/bucheron.png");

	Mine_3 = new ItemMine(350,0.35);
	Mine_3.setName('Castors');
	Mine_3.setDescription("L'usine type de l'âge de pierre");
	Mine_3.setImg("./Ressources/Images/Items/Age_bois/Castor.png");

	Mine_4 = new ItemMine(500,0.5);
	Mine_4.setName('Atelier');
	Mine_4.setDescription("L'usine type de l'âge de pierre");
	Mine_4.setImg("./Ressources/Images/Enseigne/hache.png");

	this.ItemArray=[Mine_1, Mine_2, Mine_3, Mine_4];

}

Boutique.prototype.Age2= function () {
	

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

	Mine_5 = new ItemMine(2000,2);
	Mine_5.setName('Karateka');
	Mine_5.setDescription("Wataaaa!");
	Mine_5.setImg("./Ressources/Images/Items/Age_Pierre/ryu.png");

	Mine_6 = new ItemMine(5000,5);
	Mine_6.setName('Dojo');
	Mine_6.setDescription("Hadjime");
	Mine_6.setImg("./Ressources/Images/Items/Age_Pierre/dojo.png");
	this.ItemArray=[Mine_1, Mine_2, Mine_3, Mine_4,Mine_5,Mine_6];
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
