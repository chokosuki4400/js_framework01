function getBMI(weight, tall) {
    return weight / (tall * tall);
}
var b = getBMI("a", "b"); // 結果はNaN
