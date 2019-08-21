/*
2017/05/30
common.js
概要：全てのページにおいて最低限必要なjsファイルを呼び出す。
*/

var rootPath = getRootPath();
var pagePath = window.location.pathname;
var aptDemoPath = "/aptware/"
var aptDemoIndexPath = aptDemoPath + "index.html"


// 前提(ライブラリ)
document.write('<script type="text/javascript" src="' + rootPath + 'scripts/jquery-1.11.1.min.js"></script>');
document.write('<script type="text/javascript" src="' + rootPath + 'scripts/jquery-ui-1.10.4.min.js"></script>');
document.write('<script type="text/javascript" src="' + rootPath + 'scripts/js.cookie-2.0.2.min.js"></script>');


document.write('<script type="text/javascript" src="' + rootPath + 'scripts/jquery.ui.js"></script>');



// フッター等の共通パーツ呼び出し&デザイン
document.write('<script type="text/javascript" src="' + rootPath + 'scripts/parts.js"></script>');
document.write('<script type="text/javascript" src="' + rootPath + 'scripts/respond.min.js"></script>');


/*
getRootPath
概要：フォルダの参照の基準をall.jsがある階層ではなくrootにする。
引数：なし
戻り値：ルートディレクトリのパス
備考：なし
*/
function getRootPath(){
	var hoge = function()
	{
		var f = function(e)
		{
			var name = e.tagName;
			if( !!name && name.toUpperCase() == "SCRIPT" )
			{
				return e;
			}
			var c = e.lastChild;
			return (!!c)?f(c):null;
		};
		var es = f(document);
		if(!es)
		{
			return window.location;
		}
		return es.getAttribute("src") || window.location;
	}
	var path = hoge();

	if( "object" == typeof(path) )
	{
		path = path.href;
	}
	var array = path.split("/");
	array.splice(array.length - 2, 2);

	path = "";
	for(var y = 0, cnt = array.length; y < cnt; y++)
	{
		path+= array[y] + "/";
	}
	return path;
}