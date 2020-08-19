import domContent from './domContent'
import appLogic from './appLogic'

const content = () => {
  let pageContent = domContent()
  pageContent.navBar()
  pageContent.cityDetails()
  
  let applicationLogic = appLogic()

  document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-name').value;
    if (city) {
      applicationLogic.mainApp(city);
    }
  });
  
  document.getElementById('toggle-temperature').addEventListener('click', () => {
    document.querySelector('.maximum-temp-celcious').classList.toggle('hide-section');
    document.querySelector('.minimum-temp-celcious').classList.toggle('hide-section');
    document.querySelector('.maximum-temp').classList.toggle('hide-section-two');
    document.querySelector('.minimum-temp').classList.toggle('hide-section-two');
  });
}

document.body.appendChild(content())
