<?php
include_once('./_common.php');

$request_body = file_get_contents('php://input');
$info = json_decode(stripcslashes($request_body), true);

header('Content-type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');

$wrName = $info['wr_name'];
$wrContent = $info['wr_content'];
$wrDatetime = G5_TIME_YMDHIS;



if ( !$wrName || !$wrContent ) {
    $json_result = array(
        'status' => 'fail',
        'data' => array(
            'wr_name' => $wrName,
            'wr_content' => $wrContent,
        ),
        'result' => "값이 넘어오지 않음"
    );

    echo json_encode($json_result);
    return flase;
}

$sql = " insert into g5_write_guest
            set wr_name = '$wrName',
                 wr_content = '$wrContent',
                 wr_datetime = '".G5_TIME_YMDHIS."'
        ";
sql_query($sql);

$json_result = array(
    'status' => 'success',
    'result' => "게시물이 등록되었습니다."
);

echo json_encode($json_result);
?>
