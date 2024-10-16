/* for(initialization; condition; iterator){
body
} */

//for ile yapılan her şey while ile yapılabilir ancak for daha derli toplu bir kod yazmamızı sağlar

for (let n = 1; n < 6; n++) {
  console.log(n);
} //bu döngü dışında n değerine erişemeyiz çünkü n local scope'ta