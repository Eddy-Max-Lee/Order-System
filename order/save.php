<?php
//打開要寫入的文件
$myfile = fopen("order.txt","a");
//要寫入的文字
$txt =  "幹\r\n";
//寫入，往myfile中，寫入$txt文本
fwrite($my, $txt);
//關閉文件
fclose($myfile);
?>