//COLOR CHANGE IN JS
daynightmode = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour > 7 && hour < 17)
        document.body.style.background = "linear-gradient(0.50turn, white, yellow, lightblue)";
    else if (hour >= 17 && hour < 19)
        document.body.style.background = "linear-gradient(0.50turn, white, lightblue, white)";
    else
        document.body.style.background = "linear-gradient(0.50turn, BLACK, #33adff, black)";
}
window.addEventListener('load', daynightmode);

document.querySelector("#toggle").addEventListener('click', () => {
    if (document.querySelector("#slide").style.display == 'none') {
        document.querySelector("#slide").style.display = 'block'
    } else {
        document.querySelector("#slide").style.display = 'none'
    }

})

//load
document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        loadWeather(input.value);
})
defaultWeather = () => {
    loadWeather("Rohini,Delhi");
};

window.addEventListener('load', defaultWeather);

// Request to the weather API
loadWeather = (input) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=16a2314e91b166c8c3c5b3c33539f22b`;

        fetch(url)

        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })

        .then(data => {
            document.querySelector("#isValid").textContent = "";
            displayWeather(data);
        })

        .catch(error => document.querySelector("#isValid").textContent = error);

    }
    //Data
displayWeather = (data) => {
    document.querySelector("#img").className = "";
    setImage(data);

    document.querySelector("#degree").className = "";
    document.querySelector("#degree").innerHTML = ((data.main.temp)).toFixed(0) + '&deg;<span style="font-size: 40px;margin-top: -10px;">C</span>';

    document.querySelector("#wind").className = ""
    document.querySelector("#wind").innerHTML = `WindSpeed: ${data.wind.speed}M/s`;

    document.querySelector("#press").className = ""
    document.querySelector("#press").innerHTML = `Pressure: ${data.main.pressure}mb`

    document.querySelector('#humidity').className = ""
    document.querySelector("#humidity").innerHTML = `Humidity: ${data.main.humidity}%`

    document.querySelector("#city").className = "";
    document.querySelector("#city").textContent = data.name;
    document.querySelector("#input").value = '';
}

document.querySelector('#slide').addEventListener('click', () => {
        if (document.querySelector("#slide").style.display == 'none') {
            document.querySelector("#image").style.display.width = '100%'
        }

    })
    // Set the weather image
setImage = (data) => {
    if (data.weather[0].main === "Clear") {
        document.querySelector("#img").src = "sun.png";
    }

    if (data.weather[0].main === "Snow") {
        document.querySelector("#img").src = "snowman.png";
    }

    if (data.weather[0].main === "Thunderstorm") {
        document.querySelector("#img").src = "thunder.png";
    }

    if (data.weather[0].main === "Drizzle" ||
        data.weather[0].main === "Mist" ||
        data.weather[0].main === "Smoke" ||
        data.weather[0].main === "Haze" ||
        data.weather[0].main === "Dust" ||
        data.weather[0].main === "Fog" ||
        data.weather[0].main === "Sand" ||
        data.weather[0].main === "Dust" ||
        data.weather[0].main === "Ash" ||
        data.weather[0].main === "Squall" ||
        data.weather[0].main === "Tornado") {
        document.querySelector("#img").src = "drizzle.png";
    }

    if (data.weather[0].main === "Clouds") {
        if (data.weather[0].description === "few clouds")
            document.querySelector("#img").src = "cloudy.png";
        else
            document.querySelector("#img").src = "overcast.png";
    }

    if (data.weather[0].main === "Rain") {
        querySelector("#img").src = "lightrain.png";
    }
}