function hue(name){
	// 要求先の設定
	const ip = 'IP Address'; // HueのIPアドレス
	const uri = 'api';
	const key = 'API Key'; // HueのAPIキー
	// Recipesから個別のライト設定を参照
	for (var i in hueRecipes[name]){
		var toData;
		if (hueRecipes[name][i].on){
			toData = '{"on":true, ';
			toData += '"bri":' + hueRecipes[name][i].bri + ',';
			toData += '"sat":' + hueRecipes[name][i].sat + ',';
			toData += '"hue":' + hueRecipes[name][i].hue + '}';
		} else {
			toData = '{"on":false}';
		}
		// Ajaxリクエスト作成
		var settings = {
			type: 'PUT',
			url: 'http://' + ip + '/' + uri + '/' + key + '/lights/' + i + '/state',
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
}