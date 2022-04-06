/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

  let amount = document.getElementById('amount');
  let tipPercent = document.getElementById('tipPercent');
  let currency = document.getElementById('currency');
  let tip = amount.value * (tipPercent.value / 100);
  let total = parseInt(amount.value) + parseInt(tip);
  function changeNumb() {
    tip = amount.value * (tipPercent.value / 100);
    total = parseInt(amount.value) + parseInt(tip);
 }

  document.getElementById("calculate").addEventListener('click', function(){
    document.querySelector("main").style.backgroundColor = 'salmon';
    document.getElementById('totalTipNumb').innerHTML = "<br>" + "Tip will be <b>" + currency.value + " " + tip  + "</b>" + "<br><br>" + "Your Total is <b>" + currency.value + " " + total + "</b>" ;
    document.getElementById("calculate").disabled = true;
    document.getElementById("buttonEdit").style.visibility = "visible";
    document.getElementById("currency").disabled = true;
    document.getElementById("tipPercent").disabled = true;
    document.getElementById("amount").disabled = true;
    return false;
});
document.getElementById("buttonEdit").addEventListener("click", function() {
  document.querySelector("main").style.backgroundColor = 'bisque';
  document.getElementById("calculate").disabled = false;
  document.getElementById("currency").disabled = false;
  document.getElementById("tipPercent").disabled = false;
  document.getElementById("amount").disabled = false;
  document.getElementById("buttonEdit").style.visibility = "hidden";
  return false;
});