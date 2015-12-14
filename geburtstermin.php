<?php
/*
Plugin Name: Geburtsterminrechner
Plugin URI: http://dev.fischer.marketing
Description: Ein Plugin, das einen Geburtsterminrechner auf Javascript-Basis bereitstellt
Author: Jens Fischer
Author URI: http://fischer.marketing
version: 1.1
*/

add_action('wp_enqueue_scripts','geburtstermin_init');

function geburtstermin_init() {
    wp_enqueue_script( 'geburtstermin-js', plugins_url( '/js/geburtstermin.js', __FILE__ ));
}

function form_create(){


$content .='<div>
<form>
 <p>Ihr berechneter Geburtstermin: <span id="outdate"></span></p>
 <p>Ihre Schwangerschaftswoche: <span id="outssw"></span></p>
   
<p>Bitte wählen Sie den letzten Tag Ihrer letzten Periode aus:<input class="avia_datepicker" id="inpdate" required min="2015-01-01" type="date"></p>
 <p><a class="button" id="btndate" onclick="calculateConception()">Berechnen!</a></p>
        
</form>
    </div>';
return $content;
}
add_shortcode('geburtstermin', 'form_create');
?>
