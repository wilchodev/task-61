
window.addEventListener("DOMContentLoaded", () => {
  let hotPrices = document.querySelectorAll('.hot');

  for(let i = 0; i<hotPrices.length; i++) {
    let text = hotPrices[i].textContent;
    hotPrices[i].innerHTML = text + '&#128293';
  }
  
});
