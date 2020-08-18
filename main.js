
const displayData = (data) => {
  if (data) {
    console.log(data.main);
  }
};

const mainApp = async (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bae266a2bf0e92ca7ec62610275967dc`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    document.getElementById('spinner-section').classList.add('loader');
    setTimeout(() => {
      document.getElementById('spinner-section').classList.remove('loader');
      document.querySelector('.weather-content').classList.remove('hide-weather-content');
      displayData(data);
    }, 2000);
  } catch (error) {
    return error;
  }
};


document.getElementById('search-button').addEventListener('click', () => {
  const city = document.getElementById('city-name').value;
  mainApp(city);
});