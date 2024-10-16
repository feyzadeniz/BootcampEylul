let n = 1;
for (; ;) { //for içine bir şey yazmazsak default olarak true yazmışız gibi oluyor ve sonsuz bir döngü oluyor
  console.log(n++);

  if (n == 200)
    break; //döngüyü içerden kırdık
}