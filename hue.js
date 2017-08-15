function hueRequest(lights, on, bri, sat, hue){
	// 要求先の設定
	const ip = 'IP Address'; // HueのIPアドレス
	const uri = 'api';
	const key = 'API Key'; // HueのAPIキー
	var toData;
	if (on){
		toData = '{"on":true, ';
		toData += '"bri":' + bri + ',';
		toData += '"sat":' + sat + ',';
		toData += '"hue":' + hue + '}';
	} else {
		toData = '{"on":false}';
	}
	// Ajaxリクエスト作成
	var settings = {
		type: 'PUT',
		url: 'http://' + ip + '/' + uri + '/' + key + '/lights/' + lights + '/state',
		data: toData,
		dataType: 'json',
		success: function(response){
			console.log(response);
		},
		error: function(req, err){
			console.log(err);
		}
	};
	// Ajaxリクエスト送信
	$.ajax(settings);
}

function hue(name){
	// Recipesから個別のライト設定を参照
	for (var i in hueRecipes[name]){
		if (hueRecipes[name][i].on){
			hueRequest(i, true, hueRecipes[name][i].bri, hueRecipes[name][i].sat, hueRecipes[name][i].hue);
		} else {
			hueRequest(i, false);
		}
	}
}