const selecionar = document.querySelectorAll('.estilo-opcoes');

selecionar.forEach(selecionado => {
    selecionado.addEventListener('click', function () {
        selecionar.forEach(o => o.classList.remove('selecionado'));
        selecionado.classList.add('selecionado');
    });
});


const turno = document.querySelectorAll('.turno-opcoes');

turno.forEach(turnook => {
    turnook.addEventListener('click', function () {
        turno.forEach(o => o.classList.remove('selecionado'));
        turnook.classList.add('selecionado');
    });
});