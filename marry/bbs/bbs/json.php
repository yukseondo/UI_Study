<?php
include_once('./_common.php');

header('Content-type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');

$json_result = array ();

$sql = "select wr_id, wr_content, wr_name, wr_datetime from g5_write_guest where wr_is_comment = 0 order by wr_datetime desc limit 0, 30";
$result = sql_query($sql);

for ($i=0; $row=sql_fetch_array($result); $i++) {
    $json_result['data'][$i] = $row;
}

echo json_encode($json_result);
?>