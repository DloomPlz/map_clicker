

/////////////////////////////////////////////////
function avancerprogress(){
	$('#progress').attr("value", Game.MonGold.getTotalGold());
}
//////////TEST CLASS\\\\\\\\\\\\\\\\\d
// monIncom=new ItemIncome(100,10);
// alert(monIncom.getIncomeAmount());
// alert(monIncom.getCost());
function AnimetCoockie() {
      $(".ImageClicker").effect(
        "transfer",
        { to: $( "#Gold" )}
      )
  cancelAnimationFrame(globalID);
}



$(".ImageClicker").on("click", function() {
	avancerprogress();

	Game.MonGold.IncrementGold();

	Game.MonGold.Afficher();

	globalID = requestAnimationFrame(AnimetCoockie);
})


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




