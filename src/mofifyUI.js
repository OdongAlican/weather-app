const modifyUI = () => {
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

  const displaySpinner = () => {
    document.getElementById('spinner-section').classList.add('loader');
    document.querySelector('.weather-content').classList.add('hide-weather-content');
  };

  const removeSpiner = () => {
    document.getElementById('spinner-section').classList.remove('loader');
    document.querySelector('.weather-content').classList.remove('hide-weather-content');
  };

  const createImage = (url) => {
    const imageSection = document.querySelector('.gif-section');

    const image = document.createElement('img');
    image.setAttribute('class', 'image-giff');

    imageSection.innerHTML = '';
    image.setAttribute('src', url);
    imageSection.appendChild(image);
  };

  return {
    showAlert, displaySpinner, removeSpiner, createImage,
  };
};

export default modifyUI;