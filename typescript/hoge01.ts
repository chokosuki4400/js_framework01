function playOmikuji(age : number, name: string ) : string {
  var kuji : string = '';
  if (age === 17) {
    kuji = "大吉";
  }else{
    kuji ="凶";
  }
  return name + "さんの運勢は" + kuji + "です";
}

var age : number = 17;
var name : string = "慧";

var unsei : string = playOmikuji(age,name);