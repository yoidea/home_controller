function irkit(name){
	// 要求先の設定
	const ip = 'IP Address'; // irkitのIPアドレス
	const uri = 'messages';
	const key = 'PASSWORD'; // irkitのパスワード
	// Recipesからシグナルを参照
	var toData = irkitRecipes[name];
	toData = JSON.stringify(toData);
	// 先頭にPASSWORDを付ける必要あり
	toData = toData.replace('{', '{"password":"' + key + '",');
	console.log(toData);
	// Ajaxリクエスト作成
	var settings = {
		type: 'POST',
		url: 'http://' + ip + '/' + uri,
		data: toData,
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