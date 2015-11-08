//////CLASS_Inventaire\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function Inventaire() {
	this.ItemArray=[];
}

Inventaire.prototype.Afficher= function (div) {
	$('#ItemInventory').html("");
	this.ItemArray.forEach(function(index){
		$('#ItemInventory').append(index.Afficher(index));
	})
}

Inventaire.prototype.RemoveItem=function(ind){
	return this.ItemArray.splice(ind,1);
}

Inventaire.prototype.AddItem=function(NouveauItem){
	this.ItemArray.push(NouveauItem);
	NouveauItem.Upgrade();
}

Inventaire.prototype.UseItems=function(){
	this.ItemArray.forEach(function(index){
		index.Action();
	})
	Game.Update();
}
