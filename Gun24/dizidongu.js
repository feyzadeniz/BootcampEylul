let dizi = ["betül", "seviye", "güneş", "ati", "nur", "gürkan", "burak"];
console.log(dizi.length);
//ilk elemanın indexi 0
console.log(dizi.length - 1); //son elemanın indexini verdi


//dizi birleştirme
let birlesik = dizi.join("<>"); //dizi elemanlarının arasına kattık
console.log(birlesik);

//dizi üzerinde dönme yöntemleri
//1.for
for (let i = 0; i < dizi.length; i++) {
  console.log(i + " " + dizi[i]);
}
console.log("--------------------------------");

//for .. in
for (let i in dizi) {
  console.log(i + " " + dizi[i]);
}
console.log("----------------");

//for .. of  , for if'ten farkı index numarasını değil ögeyi verir
for (const oge of dizi) {
  console.log(oge);
}

//forEach 
dizi.forEach(
  function (value, index) {
    console.log(index + ":" + value);
  }
)

console.log("----------------");


//forEach kısa
dizi.forEach((v, i) => console.log(i + ">" + v));


console.log("----------------");


//while
let sayac = 0;
while (sayac < dizi.length) {
  console.log(sayac + "|" + dizi[sayac++]);
}

console.log("----------------");

//diziyi tersten yazdırma
for (let i = dizi.length - 1; i >= 0; i--) {
  let oge = dizi[i];
  console.log(i + "*" + oge)
}