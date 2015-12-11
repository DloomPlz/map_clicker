

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

	Game.MonGold.IncrementGold();

	Game.MonGold.Afficher();

	globalID = requestAnimationFrame(AnimetCoockie);

	$("#accueil").hide();


	
})





$(".ImageClicker").on("click", function() {

	achievementM.addValue(["click","clickx10","clickx100","clickx200"],1);
	avancerprogress();

	Game.MonGold.IncrementGold();

	Game.MonGold.Afficher();

	globalID = requestAnimationFrame(AnimetCoockie);

	show();


	function show() {

	document.getElementById(randomImg1()).style.display="block";

	setTimeout(function() { hide(); }, 100);  // 5 seconds
	}

	function hide() {
	document.getElementById(randomImg1()).style.display="none";
	}

	
})

function randomImg1() {
      var myImages1 = new Array ();
      myImages1[1] = "image1";
      myImages1[2] = "image2";
      myImages1[3] = "image3";
      var rnd = Math.floor( Math.random() * myImages1.length );
      if( rnd == 0 ) {
        rnd =1;
      }
      return myImages1[rnd];
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




