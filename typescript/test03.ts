enum gender {male,female};

type myname = string;
type mail = string;
type age = number;

let person:[myname,mail,gender,age];
person = ['taro','taro@yamada',gender.male,23];

document.write('<p>今の季節を表示</p>');
document.write('<p>'+person+'</p>');