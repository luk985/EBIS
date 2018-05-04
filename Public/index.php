<?php
$Date=date("h.i.sa");
$MainPage="/EBIS/Public/B/home.html?D=".$Date;
header("Location: $MainPage");
?>