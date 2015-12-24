<!DOCTYPE html>

<head>
	
    <!-- **END** -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">

	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<link rel="canonical" href="http://www.alessioatzeni.com/wp-content/tutorials/jquery/simple-tooltip/index.html" />
	 
	<link href='Main.css' rel='stylesheet' type='text/css'>
	<link href='Ressources/includes/ProgressBar.css' rel='stylesheet' type='text/css'>
	<link href='Pages/Container.css' rel='stylesheet' type='text/css'>

	<!-- JQUERY -->
	<script src="Ressources/includes/jquery_min.js"type="text/javascript"></script>
	<script src="Ressources/includes/jquery_last.js" type="text/javascript" ></script>
    <script src="Ressources/includes/jquery_min_ui.js" type="text/javascript" ></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71245031-1', 'auto');
  ga('send', 'pageview');

</script>
	
	<link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/hover-min.css">


    


</head>

<body>



	<!--<video autoplay loop muted id="bgvid" >
	    <source src="Ressources/Videos/BackgroundMovie.webm" type="video/webm">
	    <source src="Ressources/Videos/BackgroundMovie.mp4" type="video/mp4">
	</video>-->
	<div class="achievement" style="display:none">
		testbbbbbbbbbbbbbbbbbbbbbbbbbb
	</div>

	<div id="accueil">
		
		<div class="Centerfake">
			<div class="texte-accueil">
				<h1> NIQUE LE ! </h1></br>
					<p>TES PARENTS SONT RENTRES DANS CETTE ARBRE  </br></p></br></br>

					<div class="ImageClickerfake" align="center">

						<i class="fa fa-arrow-left fa-4x"></i>
					</div>
			</div>
			
		</div>
		
	</div>
		<div id="fin">
			<img id="snoop" src="./Ressources/Images/gif/snoop_dogg.gif"></img>
			<img id="travolta" src="./Ressources/Images/gif/travolta.gif"></img>
			<img id="wow" src="./Ressources/Images/gif/wow.gif"></img>
			<img id="doritos" src="./Ressources/Images/gif/doritos.gif"></img>
			<h1> GG </h1>
			<div id="statsdisplay">
			<ul>
				
					<li><a id="Stats">Stats</a></li>				
  					<li><a id="Stats_achivements">Achievements</a></li>
  					
  				
  			</ul>
  			<div id="Stats_in">
				<h2> Stats </h2>
				<div id="Stats_in_cpt">
				</div>
			</div>

			<div id="Achivements_in">
  				
  				<div class="displayAchievements">
				</div>
  			</div>
  			
			</div>

		</div>
		<div id="Container">
			<div class="LeftContainer">

				<div class="Clicker">
						<!--  <progress id="progress"value="0" max="10000"></progress>  -->
						<div class="TitleContain">
									<div ><p> Gold : <span id="Gold"></span></p></div></br>
									<div ><p> Par secondes : <span id="Income"></span></p></div>
						</div>
						<div class="Center">
							
							<div class="AfficheClick">
							</div>
							<div id="leftAlert">
							</div>
							<div id="righttAlert">
							</div>
							<div class="ImageClickerPunch">
								
								<img id="image3" src="./Ressources/Images/Attaquants/Castor.png"></img>
								<img id="image4" src="./Ressources/Images/Attaquants/alien.png"></img>
								<img id="image5" src="./Ressources/Images/Attaquants/bruce-lee.png"></img>
								<img id="image6" src="./Ressources/Images/Attaquants/chuck.png"></img>
								<img id="image7" src="./Ressources/Images/Attaquants/cyclope.png"></img>	
								<img id="image8" src="./Ressources/Images/Attaquants/goku.png"></img>
								<img id="image9" src="./Ressources/Images/Attaquants/hulk.png"></img>
								<img id="image10" src="./Ressources/Images/Attaquants/jcvd.png"></img>
								<img id="image11" src="./Ressources/Images/Attaquants/ken.png"></img>
								<img id="image12" src="./Ressources/Images/Attaquants/lee sin.png"></img>
								<img id="image13" src="./Ressources/Images/Attaquants/Luffy.png"></img>
								<img id="image14" src="./Ressources/Images/Attaquants/raiden.png"></img>
								<img id="image15" src="./Ressources/Images/Attaquants/roulette_rider.png"></img>
								<img id="image16" src="./Ressources/Images/Attaquants/scorpion.gif"></img>
								<img id="image17" src="./Ressources/Images/Attaquants/subzero.gif"></img>

								<img id="image18" src="./Ressources/Images/Attaquants/optimus.png"></img>
								<img id="image19" src="./Ressources/Images/Attaquants/rocky.png"></img>
								<img id="image20" src="./Ressources/Images/Attaquants/IronMan.png"></img>
								<img id="image21" src="./Ressources/Images/Attaquants/luke.png"></img>
								<img id="image22" src="./Ressources/Images/Attaquants/saitama.png"></img>
								<img id="image23" src="./Ressources/Images/Attaquants/the rock.png"></img>
								<img id="image24" src="./Ressources/Images/Attaquants/vador.png"></img>
								
							</div>
							<div class="ImageClicker" align="center">

							</div>
						</div>
				</div>
			</div>
			<div class="MiddleWood">
			</div>
			<div class="RightContainer ">
				<div class="Menu">

					<h1 align="center"> EVOLUTION CLICKER </h1>
					

					
				</div>
				<div id="MenuPage">

					<div class="MenuPage_0 MenuPageContained" style="display:block;">
						<div class="histoire">

							<h2> LE BUT EST DE DETRUIRE CES PUTAINS DE RESSOURCES!
	 						</h2>	
						</div>
						<h2 align="center"> Regarde tous les putains d'achievements que t'as eu en éclatant cette salope de mère nature ! </h2>
						<div class="displayAchievements">
						</div>

						<div class="contacts">
							<h2>Nous contacter :  </h2></br>
								<div class="logos" align="center">
								<a class="hvr-float" href="mailto:evolutionclicker@gmail.com " style="text-decoration: none; color: inherit; " target="_new"><i class="fa fa-envelope-square fa-3x"></i></a>

								<a class="hvr-float" href="https://www.facebook.com/evolutionclicker?hc_location=ufi" target="_new" style="text-decoration: none; color: inherit; "><i class="fa fa-facebook-official fa-3x"></i></a>

								<a class="hvr-float" href="https://twitter.com/evoclicker" target="_new" style="text-decoration: none; color: inherit; "><i class="fa fa-twitter fa-3x"></i></a>
								</div>
					    </div>

					</div>
				</div>
			</div>
			<div class="FullRightContainer">
				<div class="StoreText">
					<h2 align="center"> Boutique : </h2>
				</div>
					<div class="Bonus">
						
					</div>
						<div class="Boutique">
							<div id="ItemSelling" style="color:white;">

							</div>
						</div>

					</div>
			</div>	
			</div>
		</div>		
</body>



<!-- *******PRELOADER********** -->


    <!-- *******CompileInclude********** -->
    <?php include 'CompileIncludesScripts.php';?>
    <script src="Ressources/Scripts/Main.js" type="text/javascript"></script>