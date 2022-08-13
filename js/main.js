/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó 
tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et
 (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
function generateList (arr) {
 let i =0; 
for (i; i < arr.length; i+1) {
  var li = document.createElement("li");
  var text = document.createTextNode(arr[i]);
  li.appendChild(text);
document.getElementById("myUl").appendChild(li);
}
return li;
}

