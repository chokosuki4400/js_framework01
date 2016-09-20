var Season;
(function (Season) {
    Season[Season["spring"] = 0] = "spring";
    Season[Season["summer"] = 1] = "summer";
    Season[Season["autum"] = 2] = "autum";
    Season[Season["winter"] = 3] = "winter";
})(Season || (Season = {}));
;
var s = Season.summer;
switch (s) {
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
