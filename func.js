function findVowels() {
  let count = 0;
  let ms;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  ms = document.getElementById('t1').value;
  for (let char of ms.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  document.getElementById('out').innerHTML = count;
}
function WordCount() { 
    let g1, g2;
    g1=document.getElementById('t1').value;
    g2 = g1.split(" ").length;
    document.getElementById('out2').innerHTML = g2;
  }
