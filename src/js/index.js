const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMostrarMenos = document.createElement('button');
botaoMostrarMenos.textContent = 'Mostrar menos';
botaoMostrarMenos.classList.add('btn-mostrar-projetos');
botaoMostrarMenos.classList.add('remover');
botaoMostrarMenos.addEventListener('click', () => {
    mostrarMenosProjetos();
    esconderBotao();
});

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    mostrarBotao();
});

function esconderBotao() {
    botaoMostrarMenos.classList.add("remover");
    botaoMostrarProjetos.classList.remove("remover");
}

function mostrarBotao() {
    botaoMostrarMenos.classList.remove("remover");
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
    let count = 0;
    projetosInativos.forEach((projetoInativo, index) => {
        if (count < 3) {
            projetoInativo.classList.add('ativo');
            count++;
        } else {
            return;
        }
    });
}

function mostrarMenosProjetos() {
    const projetosAtivos = document.querySelectorAll('.projeto.ativo');
    let count = 0;
    const projetosArray = Array.from(projetosAtivos);
    for (let i = projetosArray.length - 1; i >= 0; i--) {
        if (count < 3) {
            projetosArray[i].classList.remove('ativo');
            count++;
        } else {
            return;
        }
    }
}

// Adicionando o botão "Mostrar menos" ao DOM
const containerProjetos = document.querySelector('.container-projetos');
containerProjetos.parentNode.insertBefore(botaoMostrarMenos, containerProjetos.nextSibling);
