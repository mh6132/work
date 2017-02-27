<php
header('Content-Type: application/json;charset=UTF-8');
$data={
      "errcode":0,
      "errmsg":"OK",
      "msgid":0,
      "errmsgChinese":"成功",
      "data":{
      	    "time":[{"name":"一周内","id:":1}],
            "task":[{"name":"店铺陈列","id:":1}],
            "activity":[{"name":"红包活动","id:":1}],
            "user":[{"name":"李宁","id:":1}]
      }
};
echo $data;