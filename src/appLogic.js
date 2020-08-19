const appLogic = () => {

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
          id: 'max-temp-id-celcious',
          value: `${((data.main.temp_max) - 273.15).toFixed(2)}°C`,
        },
        {
          id: 'min-temp-id',
          value: `${data.main.temp_min}K`,
        },
        {
          id: 'min-temp-id-celcious',
          value: `${((data.main.temp_max) - 273.15).toFixed(2)}°C`,
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
        image.setAttribute('src', 'images/drizzle.png');
        imageSection.appendChild(image);
      } else if (data.weather[0].main === 'Snow') {
        imageSection.innerHTML = '';
        image.setAttribute('src', 'images/snow.png');
        imageSection.appendChild(image);
      } else if (data.weather[0].main === 'Haze') {
        imageSection.innerHTML = '';
        image.setAttribute('src', 'images/haze.png');
        imageSection.appendChild(image);
      }
    }
  };
  
  const clearAlert = () => {
    const currentAlert = document.querySelector('.alert-city-name');
    if (currentAlert) {
      currentAlert.remove();
    }
  };
    
  const showAlert = (massage, className) => {
    clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(massage));
    const mainSection = document.querySelector('.general-section');
    const board = document.querySelector('.upper-section');
    mainSection.insertBefore(div, board);
    setTimeout(() => {
      clearAlert();
      document.getElementById('spinner-section').classList.remove('loader');
    }, 3000);
  };
  
  const mainApp = async (cityName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bae266a2bf0e92ca7ec62610275967dc`;
  
    try {
      document.getElementById('spinner-section').classList.add('loader');
      document.querySelector('.weather-content').classList.add('hide-weather-content');
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
  
      if (data.main) {
        document.getElementById('spinner-section').classList.remove('loader');
        document.querySelector('.weather-content').classList.remove('hide-weather-content');
        displayData(data);
      } else {
        showAlert('Ooopps!! It seems your city does not exist. Please check the spelling',
          'alert-city-name');
      }
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
      mainApp
  }
}

export default appLogic;