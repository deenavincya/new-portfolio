async function getweather() {
    const city =document.getElementById("cityinput").value;
    const apikey="3de76c4a082d7f57a91266ad2d89c36e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    try{
       const response=await fetch(url)
       if(!response.ok){
        throw new Error("City was not found")
       }
       const data=await response.json()
       displayweather(data)
       
    }catch(error){
       document.getElementById("Weatherresult".innerHTML=`<p style="color:red">${error.message}</p>`)
    }
}
function displayweather(data){
    const weatherhtml=`<h2>${data.name},${data.sys.country}</h2>
                       <h3>${(data.main.temp -273.15).toFixed(2)} Celsius </h3>
                       <p>${data.weather[0].description} </p>
                       <p>wind speed:${data.wind.speed}m/s </p>`;
                       document.getElementById('Weatherresult').innerHTML=weatherhtml

}