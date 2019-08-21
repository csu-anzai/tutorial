var elems = document.querySelectorAll('.picture-box')
var disp = KUTE.allFromTo(
	//対象
	elems,
	{
		//開始時スタイル
		opacity: 0,
		translateX: 0,
		rotateX: 0,
		rotateY: 0,
		rotateZ: 0
	}, {
		//終了時スタイル
		opacity: 1,
		translateX: 0,						// X軸の位置
		rotateX: 360,						// X軸を基準に360度回転
		rotateY: -15,						// Y軸を基準に-15度回転
		rotateZ: 5							// Z軸を基準に5度回転
	}, {
		//オプション
		perspective: 400,					// 奥行きの深さ
		perspectiveOrigin: 'center top',	// 奥行きに対する視点の位置
		duration: 1600,						// アニメーション時間
		offset: 200,						// 要素間のアニメーション遅延時間
		easing: 'easingCubicInOut',			// イージングのパターン
		repeat: 0							// リピート数
	}
);

window.onload = function(){
    disp.start();
};