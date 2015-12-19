//créate game instance and param it
var Game = { };
paramgame(0,100,5);


//def game functions
function paramgame(goldstart,pricestart,incomestart){
	Game.MonAge=0;
	resetgame();
	Game.MaBoutique = new Boutique();
	Game.MaBoutiqueBonus = new BoutiqueBonus();
	Game.MaBoutiqueBonus.Age1();
	Game.MaBoutique.Age1();
	Game.MonInventaire= new Inventaire();
	Game.MonGold= new Gold();
	Game.MonGold.AddGold(goldstart);

}

function resetgame(){
	golden=false;
	happy=false;
	carla=false;
	easteregg=false;

}
///////////////////////////////////////////////////////////////////////////////////

//testachievements
var achievementM = new AchievementManager();
//////////////////// ACHIEVEMENT CLICKS/////////////////////////
achievementM.defineProperty("click", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "click !");
achievementM.defineProperty("clickx10", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 10, "click 10x!");
achievementM.defineProperty("clickx100", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 100, "click 100x!")
achievementM.defineProperty("clickx200", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 200, "click 200x!")
achievementM.defineAchievement("click", ["click"]);
achievementM.defineAchievement("clickx10", ["clickx10"]);
achievementM.defineAchievement("clickx100", ["clickx100"]);
achievementM.defineAchievement("clickx200", ["clickx200"]);


///////////////////////ACHIEVEMENT NB_ACHAT/////////////////////////////
achievementM.defineProperty("achat", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "un achat !");
achievementM.defineProperty("achatx5", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 5, "un petit village");
achievementM.defineProperty("achatx10", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 10, "une petite ville");
achievementM.defineProperty("achatx15", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 15, "CAPITAL ! Bravo !");
achievementM.defineAchievement("achat", ["achat"]);
achievementM.defineAchievement("achatx5", ["achatx5"]);
achievementM.defineAchievement("achatx10", ["achatx10"]);
achievementM.defineAchievement("achachatx15", ["achatx15"]);

///////////////////////ACHIEVEMENT ACHAT/////////////////////////////
achievementM.defineProperty("Hache", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Hache");
achievementM.defineProperty("Bucheron", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Bucheron");
achievementM.defineProperty("Atelier", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO,0 , "Atelier");
achievementM.defineProperty("income", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "income");
achievementM.defineAchievement("Hache", ["Hache"]);
achievementM.defineAchievement("Bucheron", ["Bucheron"]);
achievementM.defineAchievement("Atelier", ["Atelier"]);
achievementM.defineAchievement("income", ["income"]);
achievementM.defineAchievement("La Totale", ["Hache","Bucheron","Atelier",]);


//console.log(achievementM.mAchievements[0]);

Game.Acheter=function(achat){
	if(Game.MonGold.getGold()>=Game.MaBoutique.getItem(achat).getCost())
	{
		

		Game.MonGold.RemoveGold(Game.MaBoutique.getItem(achat).getCost());
		var ItemAchete = Game.MaBoutique.getItem(achat);
		Game.MonInventaire.AddItem(ItemAchete);
		Game.MaBoutique.getItem(achat).setCost(Game.MaBoutique.getItem(achat).getCost()*1.13);
		//console.log(ItemAchete.getName());
		ItemAchete.Increment();
		Game.MaBoutique.Afficher();

		
		if ((ItemAchete.getName() == "Atelier"))
		{
		
			if(Game.MaBoutique.nbr_Atelier >=5){
				
				Game.MaBoutique.Age2();
				Game.MaBoutiqueBonus.Age2();
				Game.MaBoutiqueBonus.Afficher();
				Game.MaBoutique.Afficher();
				
				Game.UpAge();
			}
			
			Game.MaBoutique.nbr_Atelier++;
		}

		achievementM.addValue([ItemAchete.getName()],1);
		achievementM.addValue(["La Totale"],0);
		achievementM.addValue(["achat","achatx5","achatx10","achatx15"],1);


	}
	
}

Game.UpAge = function(){
	//TODO lance dans le start
	Game.MonAge++;
	switch(Game.MonAge){
		case 1 :
			console.log("age de pierre");
			$('#Container').css("background-image", "url('./Ressources/Images/Fond_Site/FondRock.jpg')");
			$('.ImageClicker').css("background-image", "url('./Ressources/Images/Ressources_Cliquables/pierre.png')");
		break;

		case 2 :
			$('#Container').css("background-image", "url('./Ressources/Images/Fond_Site/FondRock.jpg')");
			$('.ImageClicker').css("background-image", "url('./Ressources/Images/Ressources_Cliquables/baril.png')");
		break;
	}
}

Game.AcheterBonus=function(achat){
	console.log(achat);
	if(Game.MonGold.getGold()>=Game.MaBoutiqueBonus.getBonus(achat).getCost())
	{
		Game.MonGold.RemoveGold(Game.MaBoutiqueBonus.getBonus(achat).getCost());
		var ItemAchete = Game.MaBoutiqueBonus.getBonus(achat);
		ItemAchete.Action();
		Game.MaBoutiqueBonus.RemoveBonus(achat);	
	}
	$(".Bonus").children().each(function() {
		
		$(this).on("click", function() {
			Game.AcheterBonus($(this).attr("value"));
		})
	});
	Game.MaBoutiqueBonus.Afficher();
}

Game.Start=function(){
	Game.Update();
	Game.MaBoutiqueBonus.Afficher();
	Game.MaBoutique.Afficher();
	Game._intervalId = setInterval(Game.run, 1000 );
}

Game.AfficherIncome=function()
{

		var arrondie = arrondir(Game.MonInventaire.getIncome());
	    $('#Income').html(arrondie);
		
}

Game.Update=function(){	
	
	achievementM.Afficher();
	Game.MonGold.Afficher();
	Game.AfficherIncome();
	
	$("#ItemSelling").children().each(function() {
		
		$(this).on("click", function() {
			Game.Acheter($(this).attr("value"));
		})
	});

	


}



Game.run = function() {
	Game.MonInventaire.UseItems();
};

Game.Start();
// Start the game loop



// To stop the game, use the following:
//clearInterval(Game._intervalId);

function arrondir(resultat) {
        
      resultat2 = resultat*100;
	  resultat2 = Math.round(resultat2); 
	  resultat2 = resultat2/ 100;

      return resultat2;
}