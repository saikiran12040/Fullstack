// 98fada3b6890806c2e0952b770d721b9

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const input=document.querySelector('input')
const btn=document.querySelector('button')
const icon=document.querySelector('.icon')
const weather=document.querySelector('.weather')
const temp=document.querySelector('.temp')
const desc=document.querySelector('.description')

btn.addEventListener('click',()=>{
    let city=input.value 
    getWeather(city)
})

function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'98fada3b6890806c2e0952b770d721b9'}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)

        const iconCode=data.weather[0].icon 
        icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon">`

        const weatherCity=data.name 
        const weatherCountry=data.sys.country 
        weather.innerHTML=`${weatherCity},${weatherCountry}`

        const weatherDesc=data.weather[0].description 
        desc.innerHTML=weatherDesc 
      })
}