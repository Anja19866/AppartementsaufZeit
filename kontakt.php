<?php

//Sorgt dafür, dass Umlaute im Nachrichtentext korrekt dargestellt werden
header('Content-type: text/html; charset=UTF-8');


//Definition der Variablen
$salut = $_POST ['salut'];
$lname = $_POST ['lname'];
$fname = $_POST ['fname'];
$street = $_POST ['street'];
$adresse = $_POST ['adresse'];
$email = $_POST ['email'];
$phone = $_POST ['phone'];
$date = $_POST ['date'];
$message = $_POST ['message'];

//Definition der Variablen für das Ausfüllen der Emailfelder
// \n gleich Zeilenumbruch

$an = 'anjakraus@email.de';
$betreff = "Anfrage von Wohnen auf Zeit Kontaktformular";
$nachricht = "Nachricht von: \n";
$nachricht .= $salut . " " . $lname . "," . $fname . "\n";
$nachricht .= $street . "\n";
$nachricht .= $adresse . "\n";
$nachricht .= $email . "\n";
$nachricht .= $phone . "\n";
$nachricht .= "Eventueller Zeitraum: ";
$nachricht .= $date  . "\n";
$nachricht .= $message;


//hier folgt der eigenliche Hauptbefehl, d.h. der Inhalt wird vom Webserver gesendet
mail ($an, $betreff, $nachricht, 'from:' . $email);

//Rückmeldetext, an den Besucher, dass er das Formular abgeschickt hat.
echo 'Ihre Nachricht ist bei uns eingegangen. Sie werden baldm&ouml;glichst eine Antwort erhalten
<a href="/">Zur&uuml;ck...</a>';