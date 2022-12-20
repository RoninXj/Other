$prefs.setValueForKey($request.headers.token, 'mytoken');

if (typeof $prefs.valueForKey('mytoken') !== "undefined"){
    $notify('传淇小程序', mytoken 获取成功,数据已存储!, $request['headers']['token']);
}

$done();
