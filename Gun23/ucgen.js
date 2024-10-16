//birden yediye sayılar

/* for (let i = 1; i <= 7; i++) {
  console.log("*".repeat(i));
}  */

for (let i = 1; i <= 7; i++) {//dikey
  let yazilacak = "";

  for (let j = 0; j < i; j++)//yatay
    yazilacak += "*";
  console.log(yazilacak);

}