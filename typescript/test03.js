var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
;
var person;
person = ['taro', 'taro@yamada', gender.male, 23];
document.write('<p>今の季節を表示</p>');
document.write('<p>' + person + '</p>');
