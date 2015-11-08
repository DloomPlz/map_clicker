
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Boutique() {
	Mine_1 = new ItemMine(100,1);
	Mine_1.setName('Mine de gimli');
	Mine_1.setDescription('La mine ayant autrefois appartenu a maitre Gimli');

	Mine_2 = new ItemMine(100,1);
	Mine_2.setName('Mine K3');
	Mine_2.setDescription('Attention !!');

	Mine_3 = new ItemMine(100,1);
	Mine_3.setName('Le puy en volley');
	Mine_3.setDescription('Une mine avec un nom stupide');

	Mine_4 = new ItemMine(100,1);
	Mine_4.setName('Mord');
	Mine_4.setDescription('mord mord MOOOORRRRDDDD!!!!!!!!!!!!!!');

	this.ItemArray=[new ItemIncome(100,1),Mine_1, Mine_2, Mine_3, Mine_4];
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
