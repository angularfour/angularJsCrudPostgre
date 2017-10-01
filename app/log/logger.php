<?php 
    function logToFile($msg){
        logToFileNamed("C:\git\angularJsCrud\app\log\output.log", $msg);
    }
    function logToFileNamed($filename, $msg) 
    {  
        $str = "[" . date("Y/m/d h:i:s", time()) . "] " . $msg;  
        // open file 
        $fd = fopen($filename, "a"); 
        // write string 
        fwrite($fd, $str . "\r\n"); 
        // close file 
        fclose($fd); 
    }
?>