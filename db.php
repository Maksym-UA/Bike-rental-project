<?php
$connection = @mysql_connect("fdb5.biz.ht", "2117918_dbase", "bb3565bc") or die("Could not connect to MySQL server!");     // привоение и подключение к серверу
$db = @mysql_select_db("2117918_dbase") or die("Could not select company database!");                                          // привоение и подлючение к базе данних
mysql_set_charset('utf8');                                              //кодировка, для вивода текста

if (!$connection || !$db)
{   
    exit(mysql_error());                            // условие(если не подключилось ='exit(mysql_error());'
}



?>


