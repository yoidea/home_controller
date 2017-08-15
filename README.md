# home_controller
Webブラウザから家電にHTTPリクエストを簡単に送信するためのJavascriptライブラリ。現段階ではPhilips Hueとirkitに対応している。

## 動作環境
JQueryが使える環境が必要。HTMLファイルから必要な機能に合わせてファイルを読み込む。
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="hue_recipes.js"></script>
<script src="irkit_recipes.js"></script>
<script src="hue.js"></script> 
<script src="irkit.js"></script>
```

## 機能
### Philips Hue
#### レシピから一括操作
引数にレシピ名を渡すして実行するとレシピ通りに照明を操作できる。
```javascript
hue("レシピ名");
```

（例）"bright"というレシピを適用する。
```javascript
hue("bright");
```

レシピは~~JSON~~ではなくJavascripオブジェクトとして以下のような形式でファイルを作成しておく。（JSONだとクロスオリジン要求がブロックされたとかなんとかで面倒だったため）
```javascript
var hueRecipes = {
    "レシピ名": {
        "ライト番号": {
            "on": 真偽値,
            "bri": 数値,
            "hue": 数値,
            "sat": 数値
        }
    }
}
```

（例）
```javascript
var hueRecipes = {
    "bright": {
        "1": {
            "on": true,
            "bri": 254,
            "hue": 14974,
            "sat": 140
        },
        "2": {
            "on": true,
            "bri": 254,
            "hue": 14974,
            "sat": 140
        }
    }
}
```

#### 個別に操作
ライト番号、起動状態（真偽値）、明度（数値）、色相（数値）、彩度（数値）の順で引数を与えて照明を個別に操作することもできる。
```javascript
hueRequest(ライト番号, 起動状態, 明度, 色相, 彩度);
```

（例）ライト1を明度254、色相14974、彩度140にする。
```javascript
hueRequest(1, true, 254, 14974, 140);
```

### irkit
引数にレシピ名を渡すして実行するとレシピ通りに照明を操作できる。
```javascript
irkit("レシピ名");
```

（例）"fanOnOff"というレシピを適用する。
```javascript
irkit("fanOnOff");
```

レシピは例によってJavascripオブジェクトとして以下のような形式でファイルを作成しておく。
```javascript
var irkitRecipes = {
    "レシピ名": {
        "format": "raw",
        "freq": 数値,
        "data": [配列]
    }
}
```

（例）
```javascript
var irkitRecipes = {
    "fanOnOff": {
        "format": "raw",
        "freq": 38,
        "data": [1234, 5678, 9012, 3456, ...]
    }
}
```