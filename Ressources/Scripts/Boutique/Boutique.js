
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Boutique() {
	Mine_1 = new ItemMine(25,0.1);
	Mine_1.setName('Hache');
	Mine_1.setDescription('Un truc qui coupe');
	Mine_1.setImg("./Ressources/Images/Items/Age_bois/hache_bois.png");

	Mine_2 = new ItemMine(200,0.2);
	Mine_2.setName('Bucheron');
	Mine_2.setDescription('Un peu bête, mais productif !');
	Mine_2.setImg("./Ressources/Images/Enseigne/hache.png");

	Mine_3 = new ItemMine(600,0.5);
	Mine_3.setName('Atelier');
	Mine_3.setDescription("L'usine type de l'âge de pierre");
	Mine_3.setImg("./Ressources/Images/Enseigne/pioche.png");

	var nbr_Hache = 0;
	var nbr_Burcheron = 0;
	var nbr_Atelier =0;

	

	this.ItemArray=[Mine_1, Mine_2, Mine_3];
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
