<?php
$Date=date("h.i.sa");
$MainPage="/EBIS/Public/B/Site/home.html?D=".$Date;
header("Location: $MainPage");
?>