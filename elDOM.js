const btnPlus = document.querySelectorAll(".plus");
for (var i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", increment);
  } 

  function increment(e) {
    const btn = e.target ;
    const divElt = btn.parentElement;
  var quntityTag = divElt.querySelector("p");
  var quntityValue = Number(quntityTag.innerHTML);
  quntityValue++;
  quntityTag.innerHTML = quntityValue;
  const unitePrice = Number(
    divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML
  );

  const tdElt=divElt.parentElement;
  const trElt=tdElt.parentElement;
  var priceTag=trElt.querySelector(".price");
  
var priceValue=Number(priceTag.innerHTML)
priceValue+=unitePrice
priceTag.innerHTML=priceValue 
}
