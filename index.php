<!DOCTYPE html>

<head>
	
    <!-- **END** -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">

	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	 
	<link href='Main.css' rel='stylesheet' type='text/css'>
	<link href='Ressources/includes/ProgressBar.css' rel='stylesheet' type='text/css'>
	<link href='Pages/Container.css' rel='stylesheet' type='text/css'>

	<!-- JQUERY -->
	<script src="Ressources/includes/jquery_min.js"type="text/javascript"></script>
	<script src="Ressources/includes/jquery_last.js" type="text/javascript" ></script>
    <script src="Ressources/includes/jquery_min_ui.js" type="text/javascript" ></script>

	
	<link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/hover-min.css">
	<link rel="stylesheet" href="css/bootstrap/css/bootstrap-min.css">
	<link rel="stylesheet" href="css/bootstrap/js/bootstrap-min.js">

    


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
				<h1> BIENVENUE SUR NOTRE SITE !</h1></br>
					<p>Vous pouvez cliquer sur l'arbre afin de commencer l'aventure  !</br></p></br></br>
					<div class="ImageClickerfake" align="center">
						<i class="fa fa-arrow-left fa-4x"></i>
					</div>
			</div>
			
		</div>
		
	</div>
		<div id="Container">
			<div class="LeftContainer">

				<div class="Clicker">
						<!--  <progress id="progress"value="0" max="10000"></progress>  -->
						<div class="TitleContain">
									<div ><p> Gold : <span id="Gold"></span></p></div>
									<div > <p>Bonus : <span id="bonus"></span></p></div>
						</div>
						<div class="Center">
							<div class="ImageClicker" align="center">

							</div>
						</div>
				</div>
			</div>
			<div class="RightContainer ">
				<div class="Menu">
					<div class="button" value="0" >
						<p>Home</p>
					</div>
					<div class="button " value="1">
						<p>Boutique</p>
					</div>
					<div class="button " value="2">
						<p>Map</p>
					</div>
					<div class="button " value="3">
						<p>Inventaire</p>
					</div>
				</div>
				<div id="MenuPage">

					<div class="MenuPage_0 MenuPageContained" style="display:block;">
						<div class="histoire">
						<h1 align="middle">Home : </h1></br>
						<h3>Histoire : </h3></br>
						<p> « Bienvenue à Evo, la planète des vrais bonhommes ! Votre objectif soldat : CLIQUER !
Vous avez été engagé pour conquérir notre planète à travers le temps et l’espace !
Pour cela il faudra cliquer afin d’acquérir le maximum de ressources. Vous pourrez ainsi acheter, voir prendre par la force les différentes zones de la Map ! Vous devrez aussi évoluer à travers les Ages car c’est connu : l’ennemi qui a la plus GROSSE technologie ne peut être vaincu !
Comme tous les bleus, vous commencerez à la base : le bois et la pierre seront vos ressources de base. Sachez utiliser vos ressources à bon escient. 
Pour ce faire, la boutique (des vrais bonhommes !) est à votre disposition : acheter des items vous rendras plus fort et plus productif ! A vous de les utiliser judicieusement pour conquérir le monde !
Attention, pas de place pour les poussent cailloux dans notre section ! Le soldat qui ne se pointera pas à l’heure tous les jours sera sévèrement puni !... »
 </p>	
						</div>
						<div id="displayAchievements">
						</div>

						<div class="contacts">
							<h2>Nous contacter :  </h2></br>
								<div class="logos">
								<a class="hvr-float" href="mailto:evolutionclicker@gmail.com " style="text-decoration: none; color: inherit; " target="_new"><i class="fa fa-envelope-square fa-3x"></i></a>

								<a class="hvr-float" href="https://www.facebook.com/evolutionclicker?hc_location=ufi" target="_new" style="text-decoration: none; color: inherit; "><i class="fa fa-facebook-official fa-3x"></i></a>

								<a class="hvr-float" href="https://twitter.com/evoclicker" target="_new" style="text-decoration: none; color: inherit; "><i class="fa fa-twitter fa-3x"></i></a>
								</div>
					    </div>

					</div>
					<div class="MenuPage_1 MenuPageContained" style="display:none;">

						
							
							
							
						
						<div class="Boutique">
							<div id="ItemSelling" style="color:white;">

							</div>
						</div>

					</div>
					<div class="MenuPage_2 MenuPageContained" style="display:none;">
						<div class="Map">
							<canvas id="Map" width="200" height="150"  style="border: 2px solid rgb(250,250,250)">
								This text is displayed if your browser does not support HTML5 Canvas.
							</canvas> 
						</div>
						<div class="TileDescri">
							<div class="Tile" style="color:white;">
								<u class="nom">
										<p>Item</p>
								</u>
								<div class="caracteristiques">
										<p><u>caracteristiques :</u> <br>
										</p>
								</div>
								<div class="description">
										<p><u>description :</u> <br>
										</p>
								</div>
								
							</div>

						</div>

					</div>
					<div class="MenuPage_3 MenuPageContained" style="display:none;">
						<div class="Ages">
								
									<h2>Liste des Items : </h2>
									<div class="Inventaire" style="color:white; ">
							
										<div id="ItemInventory">
										
										</div>
									</div>
						</div>
						<div class="Bonus">
							<h2> Liste des Bonus : </h2>
							<div id="BonusInventory">

							</div>
						</div>
								

								
					</div>
					
					<div class="MenuPage_4 MenuPageContained" style="display:none;">
						4
					</div>
					<div class="MenuPage_5 MenuPageContained" style="display:none;">
						<button class="mute-video"></button>
					</div>
				</div>
			</div>
		</div>	
	
	
	
</body>



<!-- *******PRELOADER********** -->


    <!-- *******CompileInclude********** -->
    <?php include 'CompileIncludesScripts.php';?>
    <script src="Ressources/Scripts/Main.js" type="text/javascript"></script>
	<!-- BackgroundMovie -->
	<link href='Ressources/Videos/BackgroundMovie.css' rel='stylesheet' type='text/css'>
	<script src="Ressources/Videos/BackgroundMovie.js"type="text/javascript"></script>
