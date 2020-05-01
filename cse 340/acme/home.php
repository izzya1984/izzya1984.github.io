<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>ACME | Home</title>

	<link rel="stylesheet" media="screen" href="css/styles.css">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Itzel Aguilar">
	<meta name="description" content="A recap of CIT 230, meep meep">


	
</head>
<body >
    <div class="acme">
    <header>
    <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/header.php'; ?>
        </header>
    <nav>
    <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/nav.php'; ?>
    
      </nav>
    <main>
        <div class="hero">
            <h1>
                Welcome to Acme!</h1>
        <!--Insert hero img-->
        <div class="hero-rocket">
        <img  src="images/site/rocketfeature.jpg" alt="hero image-coyote on rocket">
        </div>
        <div class="acme-rocket">
        <ul>
            <li><h2>Acme Rocket</h2></li>
            <li>Quick lighting fuse</li>
            <li>NHTSA approved seat belts</li>
            <li>Mobile launch stand included</li>
            <li class="button"><a href="#"><img id="actionbtn" alt="Add to cart button" src="images/site/iwantit.gif"></a></li>
            
        </ul>
        </div>
        </div>
        <div class="main-grid">
            <div class= "reviews">
                <h2>Acme Rocket Reviews</h2>
                <ul>
                    <li>"I don't know how I ever caught roadrunners before this." (4/5)</li>
                    <li>"That thing was fast!" (4/5)</li>
                    <li>"Talk about fast delivery." (5/5)</li>
                    <li>"I didn't even have to pull the meat apart." (4.5/5)</li>
                    <li>"I'm on my thirtieth one. I love these things!" (5/5)</li>
                  </ul>
                 
            </div>
            <div class="recipees">
                <h2>Featured Recipees</h2>
                <ul>
                    <li><a href="#"><img src="images/recipes/bbqsand.jpg" alt="BBQ Sandwich">  <p class="caption">Pulled Roadrunner BBQ </p> </a></li>
                    <li><a href="#"><img src="images/recipes/potpie.jpg" alt="Pot Pie"> <p class="caption">Roadrunner Pot Pie </p> </a></li>
                    
                    <li><a href="#"><img src="images/recipes/soup.jpg" alt=" Soup"> <p class="caption">Roadrunner Soup </p> </a></li>
                    <li><a href="#"><img src="images/recipes/taco.jpg" alt="tacos"><p class="caption"> Roadrunner Tacos </p> </a></li>
                    
                </ul>
               
  
            </div>
          
        </div>
    </main>
    <footer>
      
    <?php include $_SERVER['DOCUMENT_ROOT'].'/acme/common/footer.php'; ?>
    </footer>
    </div>
</body>

</html>