<?php
    header('Content-Type: text/xml');
	sleep(5);
	echo "<?xml version=\"1.0\" ?><reloj><tiempoactual>".date(DATE_RFC822)."</tiempoactual></reloj>";
	
	//echo date(DATE_RFC822);     date('H:i:s')
?>
