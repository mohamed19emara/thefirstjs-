fetch("https://api.currencyfreaks.com/latest?apikey=45f3399b806a4e02a46796f3ddb86351").then((result) => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(" .egp span");
    let sarPrice = document.querySelector("  .sar span");
    let aedPrice = document.querySelector("   .aed span");


    egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
    aedPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["AED"]);


    // console.log(currency.rates);
    console.log(currency.rates["EGP"]);
    console.log(currency.rates["SAR"]);
    console.log(currency.rates["AED"]);

  });