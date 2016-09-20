enum Season {spring,summer,autum,winter};

let s:Season = Season.summer;

switch(s){
	case Season.spring:
	document.write('<h1>01</h1>');
	break;

	case Season.summer:
	document.write('<h1>02</h1>');
	break;

	case Season.autum:
	document.write('<h1>03</h1>');
	break;

	case Season.winter:
	document.write('<h1>04</h1>');
	break;
}

document.write('<p>今の季節を表示</p>');