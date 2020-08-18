
const displayData = (data) => {
  if (data) {
    const content = [
      {
        id: 'city-heading',
        value: data.name,
      },
      {
        id: 'feels-like-id',
        value: data.main.feels_like,
      },
      {
        id: 'humidity-temp-id',
        value: data.main.humidity,
      },
      {
        id: 'pressure-temp-id',
        value: data.main.pressure,
      },
      {
        id: 'max-temp-id',
        value: `${data.main.temp_max}K`,
      },
      {
        id: 'min-temp-id',
        value: `${data.main.temp_min}K`,
      },
      {
        id: 'wind-deg-id',
        value: data.wind.deg,
      },
      {
        id: 'wind-speed-id',
        value: data.wind.speed,
      },
    ];

    for (let i = 0; i < content.length; i += 1) {
      document.getElementById(content[i].id).innerHTML = content[i].value;
    }

    const imageSection = document.querySelector('.gif-section');
    document.getElementById('weather-span').innerHTML = data.weather[0].main;
    document.getElementById('weather-description').innerHTML = data.weather[0].description;
    const image = document.createElement('img');
    image.setAttribute('class', 'image-giff');

    if (data.weather[0].main === 'Rain') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/rainy.png');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Clouds') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/cloudy.png');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Clear') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/clear.png');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Mist') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/mist.jpg');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Thunderstorm') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/Thunderstorm.png');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Drizzle') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/rainGif.png');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Snow') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/drizzle.png');
      imageSection.appendChild(image);
    } else if (data.weather[0].main === 'Haze') {
      imageSection.innerHTML = '';
      image.setAttribute('src', 'images/haze.png');
      imageSection.appendChild(image);
    }
  }
};

const toggleTemperature = (data) => {
  let maximumTemp = '';
  let minimumTemp = '';
  maximumTemp = data.main.temp_max;
  minimumTemp = data.main.temp_min;

  let celciusOne = '';
  let celciusTwo = '';
  celciusOne = (minimumTemp - 273.15).toFixed(2);
  celciusTwo = (maximumTemp - 273.15).toFixed(2);


  document.getElementById('toggle-temperature').addEventListener('click', () => {
    let testing = ' ';
    testing = document.getElementById('max-temp-id').innerHTML;
    console.log(testing, "first")

    if (testing.includes('K')) {
      document.getElementById('max-temp-id').innerHTML = '';
      document.getElementById('min-temp-id').innerHTML = '';
      document.getElementById('max-temp-id').innerHTML = `${celciusTwo}°C`;
      document.getElementById('min-temp-id').innerHTML = `${celciusOne}°C`;
    } else if(testing.includes('C')) {
      document.getElementById('max-temp-id').innerHTML = '';
      document.getElementById('min-temp-id').innerHTML = '';
      document.getElementById('max-temp-id').innerHTML = `${maximumTemp}K`;
      document.getElementById('min-temp-id').innerHTML = `${minimumTemp}K`;
    }
  });
};

const mainApp = async (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bae266a2bf0e92ca7ec62610275967dc`;

  try {
    document.getElementById('spinner-section').classList.add('loader');
    document.querySelector('.weather-content').classList.add('hide-weather-content');
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    
    document.getElementById('spinner-section').classList.remove('loader');
    document.querySelector('.weather-content').classList.remove('hide-weather-content');
    
    displayData(data);
    toggleTemperature(data);
  } catch (error) {
    return error;
  }
};

document.getElementById('search-button').addEventListener('click', () => {
  const city = document.getElementById('city-name').value;
  if (city) {
    mainApp(city);
  }
});
