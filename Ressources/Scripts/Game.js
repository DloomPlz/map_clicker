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
achievementM.defineProperty("clickx500", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 500, "click 500x!");
achievementM.defineProperty("clickx1000", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 1000, "click 1000x!");
achievementM.defineProperty("clickx5000", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 5000, "click 5000x!");
achievementM.defineProperty("clickx10000", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 10000, "click 10000x!") ;
achievementM.defineProperty("clickx50000", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 50000, "click 50000x!") ;

achievementM.defineProperty("clickx99999", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 99999, "click 99999x!");
// achievementM.defineProperty("clickx999999", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 999999, "click 999999x!");
achievementM.defineAchievement("Ton premier click <3 !", ["click"]);
achievementM.defineAchievement("Keep it up! Click = 10", ["clickx10"]);
achievementM.defineAchievement("Ca avance! Click = 100", ["clickx100"]);
achievementM.defineAchievement("Ca avance encore! Click = 200", ["clickx200"]);
achievementM.defineAchievement("Gotta go fast Click = 500", ["clickx500"]);
achievementM.defineAchievement("Wut!  Click = 1000", ["clickx1000"]);
achievementM.defineAchievement("PGM!  Click = 5000", ["clickx5000"]);
achievementM.defineAchievement("Tu hack? Click = 10000", ["clickx10000"]);
achievementM.defineAchievement("Well that escalated quickly? Click = 50000", ["clickx50000"]);
achievementM.defineAchievement("T'es un Dieu ( ou un Hacker ) click 99999x!", ["clickx99999"]);
// achievementM.defineAchievement("Ton premier click <3 ! Oh wait", ["clickx999999"]);



///////////////////////ACHIEVEMENT ACHAT/////////////////////////////
achievementM.defineProperty("Hache", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Hache");
achievementM.defineProperty("Bucheron", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Bucheron");
achievementM.defineProperty("Atelier", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO,0 , "Atelier");
achievementM.defineProperty("Poing", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Poing");
achievementM.defineProperty("Castors", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Castors");
achievementM.defineAchievement("Hache", ["Hache"]);
achievementM.defineAchievement("Bucheron", ["Bucheron"]);
achievementM.defineAchievement("Atelier", ["Atelier"]);
achievementM.defineAchievement("Poing", ["Poing"]);
achievementM.defineAchievement("Castors", ["Castors"]);
achievementM.defineAchievement("Age 1 : Tout les items ! GG ", ["Hache","Bucheron","Atelier","Poing","Castors"]);

achievementM.defineProperty("Karateka", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Karateka");
achievementM.defineProperty("Dojo", 0, AchievementManager.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO, 0, "Dojo");


achievementM.defineAchievement("Karateka", ["Karateka"]);
achievementM.defineAchievement("Dojo", ["Dojo"]);
achievementM.defineAchievement("Age 2 : Tout les items ! GG*2 ", ["Karateka","Dojo"]);

//console.log(achievementM.mAchievements[0]);

Game.Acheter=function(achat){
	if(Game.MonGold.getGold()>=Game.MaBoutique.getItem(achat).getCost())
	{
		

		Game.MonGold.RemoveGold(Game.MaBoutique.getItem(achat).getCost());
		var ItemAchete = Game.MaBoutique.getItem(achat);
		Game.MonInventaire.AddItem(ItemAchete);
		Game.MaBoutique.getItem(achat).setCost(Game.MaBoutique.getItem(achat).getCost()*1.25);
		//console.log(ItemAchete.getName());
		ItemAchete.Increment();
		Game.MaBoutique.Afficher();

		
		if ((ItemAchete.getName() == "Atelier"))
		{
		
			if(Game.MaBoutique.nbr_Atelier >=4){
				
				Game.MaBoutique.Age2();
				Game.MaBoutiqueBonus.Age2();
				Game.MaBoutiqueBonus.Afficher();
				Game.MaBoutique.Afficher();
				
				Game.UpAge();
			}
			
			Game.MaBoutique.nbr_Atelier++;
		}

		if ((ItemAchete.getName() == "Dojo"))
		{
		
			if(Game.MaBoutique.nbr_Dojo >=9){
				
				Game.MaBoutique.Age3();
				Game.MaBoutiqueBonus.Age3();
				Game.MaBoutiqueBonus.Afficher();
				Game.MaBoutique.Afficher();
				
				Game.UpAge();
			}
			
			Game.MaBoutique.nbr_Dojo++;
		}

		if ((ItemAchete.getName() == "Transformer"))
			{
		
			if(Game.MaBoutique.nbr_Transformer >=19){
				
				Game.MaBoutique.Age4();
				Game.MaBoutiqueBonus.Age4();
				Game.MaBoutiqueBonus.Afficher();
				Game.MaBoutique.Afficher();
				
				Game.UpAge();
			}
			
			Game.MaBoutique.nbr_Transformer++;
		}

		if ((ItemAchete.getName() == "Jésus (resurrection)"))
			{
		
			if(Game.MaBoutique.nbr_Jesus >=19){
				
				Game.MaBoutique.Age4();
				Game.MaBoutiqueBonus.Age4();
				Game.MaBoutiqueBonus.Afficher();
				Game.MaBoutique.Afficher();
				
				Game.UpAge();
			}
			
			Game.MaBoutique.nbr_Jesus++;
		}



		achievementM.addValue([ItemAchete.getName()],1);
		achievementM.addValue(["La Totale"],0);
		


	}
	
}

Game.UpAge = function(){
	//TODO lance dans le start
	Game.MonAge++;
	switch(Game.MonAge){
		case 1 :

			$('#Container').css("background-image", "url('./Ressources/Images/Fond_Site/FondRock.jpg')");
			$('.ImageClicker').css("background-image", "url('./Ressources/Images/Ressources_Cliquables/pierre.png')");


		break;

		case 2 :
			$('#Container').css("background-image", "url('./Ressources/Images/Fond_Site/FondActuel.jpg')");
			$('.ImageClicker').css("background-image", "url('./Ressources/Images/Ressources_Cliquables/baril.png')");
			$('.MiddleWood').css("background-image", "url('./Ressources/Images/Fond_Site/bordure_metalv.png')");

			$('#Container .RightContainer').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalv.png') 42 round stretch");
	
			$('.TitleContain').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
			$('#displayAchievements').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
			$('.Bonus').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
			$('.Menu').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");

		case 3:
			$('#Container').css("background-image", "url('./Ressources/Images/Fond_Site/background_futur.jpg')");
			$('.ImageClicker').css("background-image", "url('./Ressources/Images/Ressources_Cliquables/baril.png')");
			$('.MiddleWood').css("background-image", "url('./Ressources/Images/Fond_Site/bordure_metalv.png')");

			$('#Container .RightContainer').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalv.png') 42 round stretch");
	
			$('.TitleContain').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
			$('#displayAchievements').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
			$('.Bonus').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
			$('.Menu').css("border-image", "url('./Ressources/Images/Fond_Site/bordure_metalh.png') 42 round stretch");
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

		var arrondie = arrondirBonus(Game.MonInventaire.getIncome());
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

Game.Save=function()
{
	
}


Game.run = function() {
	Game.MonInventaire.UseItems();
};

Game.Start();
// Start the game loop



// To stop the game, use the following:
//clearInterval(Game._intervalId);

function arrondirBonus(resultat) {
        
      resultat2 = resultat*100;
	  resultat2 = Math.round(resultat2); 
	  resultat2 = resultat2/ 100;

      return resultat2;
}

function arrondir(resultat) {
        

	  resultat2 = Math.round(resultat); 


      return resultat2;
}

function formatMillier( nombre){
  nombre += '';
  var sep = ' ';
  var reg = /(\d+)(\d{3})/;
  while( reg.test( nombre)) {
    nombre = nombre.replace( reg, '$1' +sep +'$2');
  }
  return nombre;
}