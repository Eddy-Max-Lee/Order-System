<?php
//接受用戶請求數據
$phone = $_POST["phone"];
$food = $_POST["food"];
//打開要寫入的文件
$myfile = fopen("order.txt","a");
//要寫入的文字
$txt =  "【手機號】{$phone}\r\n【點的菜】{$food}\r\n*********\r\n";
//寫入，往myfile中，寫入$txt文本
fwrite($my, $txt);
//關閉文件
fclose($myfile);

echo "1";
?>