const domContent = () => {

    let generalSection = document.querySelector('.general-section')

    const navBar = () => {

    let upperSection = document.createElement('div')
    upperSection.setAttribute('class', 'upper-section')
    generalSection.appendChild(upperSection)

    let cityName = document.createElement('input')
    cityName.setAttribute('id', 'city-name')
    cityName.setAttribute('placeholder', 'Enter your city name')
    cityName.type = 'text';
    upperSection.appendChild(cityName)

    let searchButton = document.createElement('button')
    searchButton.setAttribute('id', 'search-button')
    upperSection.appendChild(searchButton)

    let faSearch = document.createElement('i')
    faSearch.setAttribute('class', 'fas fa-search')
    searchButton.appendChild(faSearch)

    searchButton.innerHTML = 'Search'
    }

    const cityDetails = () => {

        const weatherInfo = document.createElement('div')
        weatherInfo.setAttribute('class', 'weather-info')
        generalSection.appendChild(weatherInfo)

        const spinnerSection = document.createElement('div')
        spinnerSection.setAttribute('id', 'spinner-section')
        spinnerSection.setAttribute('class', 'main-spinner')
        weatherInfo.appendChild(spinnerSection)

        const weatherContent = document.createElement('div')
        weatherContent.setAttribute('class', 'weather-content hide-weather-content')
        weatherInfo.appendChild(weatherContent)

        const cityNameSection = document.createElement('div')
        cityNameSection.setAttribute('class', 'city-name-section')
        weatherContent.appendChild(cityNameSection)

        const cityHeading = document.createElement('h1')
        cityHeading.setAttribute('id', 'city-heading')
        cityNameSection.appendChild(cityHeading)

        const innerContentSection = document.createElement('div')
        innerContentSection.setAttribute('class', 'inner-content-section')
        weatherContent.appendChild(innerContentSection)

        const mainWeatherContent = document.createElement('div')
        mainWeatherContent.setAttribute('class', 'main-weather-content grid-content')
        innerContentSection.appendChild(mainWeatherContent)

        const weatherDataDisplay = [
            {
                className: 'temp-feelslike inner-temp',
                text: 'Feels-Like:',
                spanID: 'feels-like-id'
            },
            {
                className: 'humidity inner-temp',
                text: 'Humidity:',
                spanID: 'humidity-temp-id'
            },
            {
                className: 'pressure inner-temp',
                text: 'Pressure:',
                spanID: 'pressure-temp-id'
            },
            {
                className: 'maximum-temp inner-temp',
                text: 'Maximum Temperature:',
                spanID: 'max-temp-id'
            },
            {
                className: 'maximum-temp-celcious inner-temp hide-section',
                text: 'Maximum Temperature:',
                spanID: 'max-temp-id-celcious'
            },
            {
                className: 'minimum-temp inner-temp',
                text: 'Minimum Temperature:',
                spanID: 'min-temp-id'
            },
            {
                className: 'minimum-temp-celcious inner-temp hide-section',
                text: 'Minimum Temperature:',
                spanID: 'min-temp-id-celcious'
            }

        ]

        for(let i = 0; i < weatherDataDisplay.length; i+= 1){
            const dataDivision = document.createElement('div')
            dataDivision.setAttribute('class', `${weatherDataDisplay[i].className}` )

            const dataParagraph = document.createElement('p')
            dataParagraph.innerHTML = `${weatherDataDisplay[i].text} <span id='${weatherDataDisplay[i].spanID}'></span>`
            dataDivision.appendChild(dataParagraph)
            mainWeatherContent.appendChild(dataDivision)
        }

        const toggleButton = document.createElement('div')
        toggleButton.setAttribute('class', 'toggle-button')

        const toggleTemperature = document.createElement('button')
        toggleTemperature.setAttribute('id', 'toggle-temperature')
        toggleButton.appendChild(toggleTemperature)
        mainWeatherContent.appendChild(toggleButton)

        const cloudWeather = document.createElement('div')
        cloudWeather.setAttribute('class', 'cloud-weather grid-content')
        innerContentSection.appendChild(cloudWeather)

        const mainDescription = document.createElement('div')
        mainDescription.setAttribute('class', 'main-description')
        cloudWeather.appendChild(mainDescription)

        const weatherH2 = document.createElement('h2')
        weatherH2.innerHTML = `Weather: <span id="weather-span"></span>`
        mainDescription.appendChild(weatherH2)

        const weatherH4 = document.createElement('h4')
        mainDescription.appendChild(weatherH4)
        weatherH4.setAttribute('id', 'weather-description')

        const gifSection = document.createElement('div')
        gifSection.setAttribute('class', 'gif-section')
        cloudWeather.appendChild(gifSection)

        const windSection = document.createElement('div')
        windSection.setAttribute('class', 'wind-section grid-content')
        innerContentSection.appendChild(windSection)

        const windDataDisplay = [
            {
                className: 'wind-speed inner-temp',
                text: 'Wind-Speed:',
                spanID: 'wind-speed-id'
            },
            {
                className: 'wind-deg inner-temp',
                text: 'Wind-Deg:',
                spanID: 'wind-deg-id'
            }           

        ]

        for(let i = 0; i < windDataDisplay.length; i+= 1){
            const dataDivision = document.createElement('div')
            dataDivision.setAttribute('class', `${windDataDisplay[i].className}` )

            const dataParagraph = document.createElement('p')
            dataParagraph.innerHTML = `${windDataDisplay[i].text} <span id='${windDataDisplay[i].spanID}'></span>`
            dataDivision.appendChild(dataParagraph)
            windSection.appendChild(dataDivision)
        }

    }
    return { navBar, cityDetails }    

}

export default domContent