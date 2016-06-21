<?php
/**
 * Created by PhpStorm.
 * User: QYJ
 * Date: 2016-06-21
 * Time: 18:57
 */

header('Content-type: text/json');
/**
 * @param $messge 要提示的信息框
 * @param $isOK 操作是否正确
 * @param $data 操作数据
 */
function messBox($messge,$isOK,$data){
   echo json_encode(array(
       'info'=>$messge,
       'isOK'=>$isOK,
       'data'=>$data
   ));
}