// Function to convert USD to EUR
let searchBox=document.getElementById('amount');
let btn=document.getElementById('btn');
function convertUSDToEUR(amount) {
  
  // Fetch the currency conversion data
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      // Extract the conversion rate
      const conversionRate = data.rates.EUR;
      // Convert USD to EUR
      const convertedAmount = amount * conversionRate;
      document.getElementById("result").innerHTML=`${amount} USD is equal to ${convertedAmount.toFixed(2)} EUR`;
    })
    .catch(error => {
      document.getElementById("result").innerHTML='An error occurred:', error;
    });
}

// Usage: convert 100 USD to EUR
btn.addEventListener("click", ()=>{
  convertUSDToEUR(searchBox.value);
})


