//créate game instance and param it
var Game = { };
paramgame(100000,100,5);


//def game functions
function paramgame(goldstart,pricestart,incomestart){
	resetgame();
	Game.MaBoutique = new Boutique();
	Game.MonInventaire= new Inventaire();
	Game.MonGold= new Gold();

	Game.MonGold.AddGold(goldstart);

	Game.Map=new MapRenderer("Map",MapArray_1);
}

function resetgame(){
	golden=false;
	happy=false;
	carla=false;
	easteregg=false;

}


///////////////////////////////////////////////////////////////////////////////////

//testachievements
var a = new AchievementManager();
a.defineProperty("nb click", 0, AchievementManager.ACTIVE_IF_GREATER_THAN, 1, "10 click");
a.defineAchievement("clicks", ["nb click"]);
console.log(a.mAchievements[0]);

Game.Acheter=function(achat){
	if(Game.MonGold.getGold()>=Game.MaBoutique.getItem(achat).getCost())
	{
		

		Game.MonGold.RemoveGold(Game.MaBoutique.getItem(achat).getCost());
		var ItemAchete = Game.MaBoutique.getItem(achat);
		Game.MonInventaire.AddItem(ItemAchete);
		//Game.MaBoutique.RemoveItem(achat);
		Game.MaBoutique.getItem(achat).setCost(Game.MaBoutique.getItem(achat).getCost()*1.13);

		
	}
	Game.Update();
}

Game.Start=function(){
	Game.Update();
	Game.Map.DrawBackground();
	Game._intervalId = setInterval(Game.run, 1000 );
}

Game.Update=function(){	
	Game.MaBoutique.Afficher();
	Game.MonInventaire.Afficher();
	Game.MonGold.Afficher();
	$("#ItemSelling").children().each(function() {
		
		$(this).on("click", function() {
			Game.Acheter($(this).attr("value"));
		})
	});
	console.log(Game.MonGold.getTotalGold());
}



Game.run = function() {
	Game.MonInventaire.UseItems();
};

Game.Start();
// Start the game loop



// To stop the game, use the following:
//clearInterval(Game._intervalId);

