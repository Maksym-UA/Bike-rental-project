<?php
$connection = @mysql_connect("fdb5.biz.ht", "2117918_dbase", "bb3565bc") or die("Could not connect to MySQL server!");     // ��������� � ����������� � �������
$db = @mysql_select_db("2117918_dbase") or die("Could not select company database!");                                          // ��������� � ���������� � ���� ������
mysql_set_charset('utf8');                                              //���������, ��� ������ ������

if (!$connection || !$db)
{   
    exit(mysql_error());                            // �������(���� �� ������������ ='exit(mysql_error());'
}



?>


