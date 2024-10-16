let n = 1; //ilk değer atama (initialization)

/* while (n < 6) {  //koşul (condition)
  console.log(n) //arttırma ve azaltma (increment ve decrement)
} */ /* alttaki kodla aynı şey */

//burada n global scope'ta yani döngü dışında da erişebiliyoruz

while (n < 6) {
  console.log(n++)
} /* while'ın gövdesindeki komut koşul false olana kadar çalışır */

