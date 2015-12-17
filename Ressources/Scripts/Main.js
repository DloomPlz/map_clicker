
var ClickAdd=1;
/////////////////////////////////////////////////

var clicked = 0;
function avancerprogress(){
	$('#progress').attr("value", Game.MonGold.getTotalGold());
}
//////////TEST CLASS\\\\\\\\\\\\\\\\\d
// monIncom=new ItemIncome(100,10);
// alert(monIncom.getIncomeAmount());
// alert(monIncom.getCost());
function AnimetCoockie() {
  //     $(".ImageClicker").effect(
  //       "transfer",
  //       { to: $( "#Gold" )});
       
  // cancelAnimationFrame(globalID);
}

$(".ImageClickerfake").on("click", function() {

	avancerprogress();

	Game.MonGold.AddGold(ClickAdd);

	Game.MonGold.Afficher();

	globalID = requestAnimationFrame(AnimetCoockie);

	$("#accueil").hide();


	
})





$(".ImageClicker").on("click", function() {


	achievementM.addValue(["click","clickx10","clickx100","clickx200"],1);
	avancerprogress();

	Game.MonGold.AddGold(ClickAdd);

	Game.MonGold.Afficher();

	globalID = requestAnimationFrame(AnimetCoockie);

	show();	
})

$(".Bonus").hover(function()
{
	nb_bonusSelling=$(".BonusSelling").length;
	$(".Bonus").height((1 + (nb_bonusSelling / 5 ))* $(".BonusSelling").height());

})

$(".Bonus").on("mouseleave", function()
{
	
	$(".Bonus").css("height", "5.7vw");

})


	function show() {
		var rand = randomImg1();
		
		document.getElementById(rand).style.display="block";

		setTimeout(function() { hide(rand); }, 200);  // 5 seconds
	}

	function hide(rand) {
		document.getElementById(rand).style.display="none";
	}

function randomImg1() {

	var ImageClicker = new Array ();
      ImageClicker[1] = "image1";
      ImageClicker[2] = "image2";
      ImageClicker[3] = "image3";
      ImageClicker[4] = "image4";
      ImageClicker[5] = "image5";
      ImageClicker[6] = "image6";
      ImageClicker[7] = "image7";
      ImageClicker[8] = "image8";
      ImageClicker[9] = "image9";
      ImageClicker[10] = "image10";
      ImageClicker[11] = "image11";
      ImageClicker[12] = "image12";
      ImageClicker[13] = "image13";
      ImageClicker[14] = "image14";
      ImageClicker[15] = "image15";
      ImageClicker[16] = "image16";
      ImageClicker[17] = "image17";

      var rnd = Math.floor( Math.random() * ImageClicker.length );
      if( rnd == 0 ) {
        rnd =1;
      }


      return ImageClicker[rnd];
    }






$("#ImageClicker").click(function() {

	$(".ImageClicker").css("-moz-transform:","scale(0.9)");
});


////////////////////Menu JS////////////////////////
$(".Menu").children().each(function() {
	$(this).on("click", function() {
		hideContent("#MenuPage");
		showContent(".MenuPage_"+$(this).attr("value"));
	})
});

function hideContent(div){
  $(div).children().each(function(){
		$(this).hide();
	});
}

function showContent(div){
	$(div).show();
}




