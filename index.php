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
	<link rel="stylesheet" href="css/bootstrap/css/bootstrap-min.js">

    


</head>

<body>



	<!--<video autoplay loop muted id="bgvid" >
	    <source src="Ressources/Videos/BackgroundMovie.webm" type="video/webm">
	    <source src="Ressources/Videos/BackgroundMovie.mp4" type="video/mp4">
	</video>-->


	<div id="Container">
		<div class="LeftContainer">
			<div class="Clicker">
				<!--  <progress id="progress"value="0" max="10000"></progress>  -->
				<div class="TitleContain">
							<div > Gold :<span id="Gold"></span></div>
							<div > Bonus :<span id="bonus"></span></div>
				</div>
				<div class="Center">
					<div class="ImageClicker col-lg-12 col-md-12 col-xs-12 col-sm-12" align="center">

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
					<h1 align="middle">Home : </h1></br></br>
					<h2>Histoire : </h2></br>
					<p> Ecire histoire ici ... </p>	
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

					<div class="Inventaire">
						
						<div id="ItemInventory">
								
						</div>
						
						
						
					</div>

					<div class="Boutique">
						<div id="ItemSelling">

						</div>
					</div>

				</div>
				<div class="MenuPage_2 MenuPageContained" style="display:none;">
					<div class="Map">
						<canvas id="Map"  style="border: 2px solid rgb(250,250,250)">
							This text is displayed if your browser does not support HTML5 Canvas.
						</canvas> 
					</div>
					<div class="TileDescri">
						<div class="Tile col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
							<u class="nom">
									<p>Mine sans fond</p>
							</u>
							<div class="caracteristiques">
									<p><u>caracteristiques :</u> <br>
									+1 : fer <br>
									+5 : pierre</p>
							</div>
							<div class="description">
									<p><u>description :</u> <br>
									une mine raportant de la pierre et un peu de fer ayant autrefois appartenue a Mr Gimli</p>
							</div>
							<div class="Upgrade">
									<p><button> UP :</button> 5 Bois 10 Pierre 100 Argent </p>
							</div>
						</div>

					</div>

				</div>
				<div class="MenuPage_3 MenuPageContained" style="display:none;">
					<div class="Ages">
							<div class="Age 1">
								<h2>Liste des Items : </h2>
								<div id="ItemInventory">
								
								</div>
							</div>

							<div class="Age 2">

							</div>

							<div class="Age 3">

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
