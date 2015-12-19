
var ClickAdd=1;
/////////////////////////////////////////////////

var clicked = 0;
function avancerprogress(){
	var LeftImages = new Array ();
      LeftImages[0] = "1_hit_combo.png";
      LeftImages[1] = "2_hit_combo.png";
      LeftImages[2] = "3_hit_combo.png";
      LeftImages[3] = "4_hit_combo.png";
      LeftImages[4] = "5_hit_combo.png";
      LeftImages[5] = "6_hit_combo.png";
      LeftImages[6] = "7_hit_combo.png";
      LeftImages[7] = "8_hit_combo.png";
      LeftImages[8] = "9_hit_combo.png";
      LeftImages[9] = "10_hit_combo.png";
      LeftImages[10] = "11_hit_combo.png";
      LeftImages[11] = "12_hit_combo.png";
      LeftImages[12] = "attaque_imparable.png";
      LeftImages[13] = "brise_garde.png";
      LeftImages[14] = "coup_critique.png";
      LeftImages[15] = "fatality.png";
      LeftImages[16]= "finish_him.png";
      LeftImages[17]= "wasted.png";


  var RightText = new Array ();
      RightText[0] = "Frappe-moi !";
      RightText[1] = "T'es nul putain ! ";
      RightText[2] = "Aie !";
      RightText[3] = "Je me fais chier là ! ";
      RightText[4] = "En**ler !";
      RightText[5] = "T'es sur de pas vouloir arréter ?";
      RightText[6] = "C'est l'heure du DUEL ";
      RightText[7] = " Tu peux le faire !"; 



	 var rnd = Math.floor( Math.random() * 5 );
      if( rnd == 0 ) {
      $('#leftAlert').finish();
      //afficher left
      var Imagernd = Math.floor( Math.random() * LeftImages.length );
      $('#leftAlert').css("background-image", "url('./Ressources/Images/FightAlert/"+LeftImages[Imagernd]+"')");

      $('#leftAlert').show();
      var animation = $('#leftAlert').hide(4000);
    }
    var rnd = Math.floor( Math.random() * 20 );
    if( rnd == 0 ) {
      //afficher right
      var Textrnd = Math.floor( Math.random() * RightText.length );
      $('#righttAlert').html(RightText[Textrnd]);
      //alert(RightText[Textrnd]);
  }
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




function incrementnbr(){
  nbr_click=+1;
  console.log(nbr_click);
  
}



$(".ImageClicker").on("click", function() {


	achievementM.addValue(["click","clickx10","clickx100","clickx200"],1);
	avancerprogress();

	Game.MonGold.AddGold(ClickAdd);

	Game.MonGold.Afficher();

	globalID = requestAnimationFrame(AnimetCoockie);

	showImg();	
  var nb = Math.floor(Math.random() * 25);
  
  if (nb==5)
  {
    showFrappe();

  }
  
})



$(".Bonus").hover(function()
{
	nb_bonusSelling=$(".BonusSelling").length;
	$(".Bonus").height((1 + (nb_bonusSelling / 5 ))* $(".BonusSelling").height() + $(".BonusHover").height() + 20);

})

$(".Bonus").on("mouseleave", function()
{
	
	$(".Bonus").css("height", "10%");

})


	function showImg() {
		var rand = randomImg1();
		
		document.getElementById(rand).style.display="block";

  setTimeout(function() { hideImg(rand); }, 200);  // 5 seconds
	}

  function showFrappe() {
    var rand = randomFrappe();
    
    document.getElementById(rand).style.display="block";

  setTimeout(function() { hideFrappe(rand); }, 500);  // 5 seconds
  }

function hideFrappe(rand) {
    document.getElementById(rand).style.display="none";
  }

	function hideImg(rand) {
		document.getElementById(rand).style.display="none";
	}

function randomFrappe() {

  var Frappe = new Array ();
        Frappe[1] = "Frappe1";
        Frappe[2] = "Frappe2";
        Frappe[3] = "Frappe3";
        Frappe[4] = "Frappe4";
        Frappe[5] = "Frappe5";
        Frappe[6] = "Frappe6";
        Frappe[7] = "Frappe7";


      

      var rnd = Math.floor( Math.random() * Frappe.length );
      if( rnd == 0 ) {
        rnd =1;
      }


      return Frappe[rnd];
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
      ImageClicker[18] = "image18";
      ImageClicker[19] = "image19";
      ImageClicker[20] = "image20";
      ImageClicker[21] = "image21";
      ImageClicker[22] = "image22";
      ImageClicker[23] = "image23";
      ImageClicker[24] = "image24";


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





