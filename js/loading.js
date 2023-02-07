//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(loading_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#023a69',
	trailWidth: 0.1,
	trailColor: '#aaa',
	text: {				
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#023a69',
		},
		autoStyleContainer: false 
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); 
	}
});

//アニメーションスタート
bar.animate(1.0, function () {
	$("#loading").delay(500).fadeOut(800);
});  
