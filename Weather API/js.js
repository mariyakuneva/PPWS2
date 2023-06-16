let searchBox=document.getElementById('search');
let btn=document.getElementById('btn');
 let name=document.getElementById("name");
 let temp=document.getElementById("temp");
 let hum=document.getElementById("hum");
 let wind=document.getElementById("wind");

 const apiKey="299d70ce4a5fa4f54cf0e6c87f38ca33";
 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weather(city){
  const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
  var data=await response.json();
  document.getElementById("temp").innerHTML=`Temperature: ${data.main.temp} °C `;
  document.getElementById("hum").innerHTML=`Humidity: ${data.main.humidity} % `;
  document.getElementById("wind").innerHTML=`Wind Speed: ${data.wind.speed} km/h `;
}
btn.addEventListener("click", ()=>{
  weather(searchBox.value);
})




