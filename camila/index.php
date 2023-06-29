<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Camila Cañeque - Bach, Bachata">
    <meta name="author" content="Camila Cañeque">
    <title>Bach, Bachata</title>
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<?php
		require_once("inc/db_poem.php");
		$max_poem=(count($array_poem)-1);
		$max_w=80;
		$max_h=980;
        $i=1;

        $num_track=rand(1,3);
        $nom_track="demo_track_".$num_track.".mp3";
	?>

	<!-- ############################################################################################## -->
	<!-- ############################################################################################## -->

	<div id="main_wrapper">
		<?php
			$i=1;
			for ($x==0;$x<=$max_poem;$x++){
				if ($array_poem[$x]["frase"] != ""){
					$left=rand(0,$max_w);
	            	$top=rand(0,$max_h);
					echo "<div id='frase-".$i."' class='sentence' style='top:".$top."px;left:".$left."%;'>";
						echo '<span class="">'.$array_poem[$x]["frase"].'</span>';
					echo '</div>';
				}
				$i++;
			}
		?>
	</div>

	<!-- ############################################################################################## -->
	<!-- ############################################################################################## -->

	<div id="audio_wrapper">
		<audio src="tracks/<?php echo $nom_track; ?>" autoplay loop></audio>
	</div>

	<!-- ############################################################################################## -->
	<!-- ############################################################################################## -->

	<script type="text/javascript">
		addEventListener("click", function() {
  			window.location.reload();
		});
	</script>
</body>
</html>




