<?php
include_once('./_common.php');

$request_body = file_get_contents('php://input');
$info = json_decode(stripcslashes($request_body), true);

$post_paging = ( $info['paging'] ) ? $info['paging'] : 0;
$paging = 0;

if ( $post_paging !== 0 ) {
    $paging = ( $post_paging * 10 );
}


header('Content-type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');

$json_result = array ();

$sql = "select wr_id, wr_content, wr_name, wr_datetime from g5_write_guest where wr_is_comment = 0 order by wr_datetime desc limit {$paging}, 10";
$result = sql_query($sql);

for ($i=0; $row=sql_fetch_array($result); $i++) {
    $json_result['data'][$i] = $row;
}

echo json_encode($json_result);
?>