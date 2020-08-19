import modifyUI from './mofifyUI';

const modifyUInstance = modifyUI();

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
          value: `${data.main.temp_max}°F`,
        },
        {
          id: 'max-temp-id-celcious',
          value: `${(((data.main.temp_max) - 32) * (5 / 9)).toFixed(2)}°C`,
        },
        {
          id: 'min-temp-id',
          value: `${data.main.temp_min}°F`,
        },
        {
          id: 'min-temp-id-celcious',
          value: `${(((data.main.temp_min) - 32) * (5 / 9)).toFixed(2)}°C`,
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

      document.getElementById('weather-span').innerHTML = data.weather[0].main;
      document.getElementById('weather-description').innerHTML = data.weather[0].description;
      let url;

      if (data.weather[0].main === 'Rain') {
        url = 'images/rainy.png';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Clouds') {
        url = 'images/cloudy.png';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Clear') {
        url = 'images/clear.png';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Mist') {
        url = 'images/mist.jpg';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Thunderstorm') {
        url = 'images/Thunderstorm.png';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Drizzle') {
        url = 'images/drizzle.png';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Snow') {
        url = 'images/snow.png';
        modifyUInstance.createImage(url);
      } else if (data.weather[0].main === 'Haze') {
        url = 'images/haze.png';
        modifyUInstance.createImage(url);
      }
    }
  };

  const mainApp = async (cityName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bae266a2bf0e92ca7ec62610275967dc&units=imperial`;

    try {
      modifyUInstance.displaySpinner();
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();

      if (data.main) {
        modifyUInstance.removeSpiner();
        displayData(data);
      } else {
        modifyUInstance.showAlert('Ooopps!! It seems your city does not exist. Please check the spelling',
          'alert-city-name');
      }
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
    mainApp,
  };
};

export default appLogic;