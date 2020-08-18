
const displayData = (data) => {
  if (data) {
    document.getElementById('city-heading').innerHTML = data.name;
    document.getElementById('feels-like-id').innerHTML = data.main.feels_like;
    document.getElementById('humidity-temp-id').innerHTML = data.main.humidity;
    document.getElementById('pressure-temp-id').innerHTML = data.main.pressure;
    document.getElementById('max-temp-id').innerHTML = data.main.temp_max;
    document.getElementById('min-temp-id').innerHTML = data.main.temp_min;
    document.getElementById('wind-deg-id').innerHTML = data.wind.deg;
    document.getElementById('wind-speed-id').innerHTML = data.wind.speed;

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

const mainApp = async (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bae266a2bf0e92ca7ec62610275967dc`;

  try {
    document.getElementById('spinner-section').classList.add('loader');
    document.querySelector('.weather-content').classList.add('hide-weather-content');
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    setTimeout(() => {
      document.getElementById('spinner-section').classList.remove('loader');
      document.querySelector('.weather-content').classList.remove('hide-weather-content');
      displayData(data);
    }, 1000);
  } catch (error) {
    return error;
  }
};

document.getElementById('search-button').addEventListener('click', () => {
  const city = document.getElementById('city-name').value;
  mainApp(city);
});