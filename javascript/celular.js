function enableMobileSelection(elements) {
  elements.forEach(element => {
    element.addEventListener('touchstart', function () {
      elements.forEach(el => el.classList.remove('selecionado'));
      element.classList.add('selecionado');
    });
  });
}


const activityIcons = document.querySelectorAll('.estilo-opcoes');
enableMobileSelection(activityIcons);

const shiftIcons = document.querySelectorAll('.turno-opcoes');
enableMobileSelection(shiftIcons);