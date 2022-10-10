function timeCalculate() {
  const yelkovan = document.querySelector(".yelkovan");
  const akrep = document.querySelector(".akrep");
  const saniye = document.querySelector(".saniye");
  const saat = new Date().getHours()*30;
  const dakika = new Date().getMinutes*6;
  const seconds = new Date().getSeconds()*6;
  saniye.style.transform='rotate('+(seconds)+'deg)';
  yelkovan.style.transform='rotate('+(dakika)+'deg)';
  akrep.style.transform='rotate('+(saat+10)+'deg)';
  console.log( saniye.style.transform )
}
timeCalculate()
setInterval(timeCalculate, 1000);
