<?php
$connection = @mysql_connect("db_domain", "dbase_name", "password") or die("Could not connect to MySQL server!");     // ïðèâîåíèå è ïîäêëþ÷åíèå ê ñåðâåðó
$db = @mysql_select_db("2117918_dbase") or die("Could not select company database!");                                          // ïðèâîåíèå è ïîäëþ÷åíèå ê áàçå äàííèõ
mysql_set_charset('utf8');                                              //êîäèðîâêà, äëÿ âèâîäà òåêñòà

if (!$connection || !$db)
{   
    exit(mysql_error());                            // óñëîâèå(åñëè íå ïîäêëþ÷èëîñü ='exit(mysql_error());'
}



?>


