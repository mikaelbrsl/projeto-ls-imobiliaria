import { carregarImoveis } from './storage.js';

// Função para criar o HTML de um card de imóvel
function criarCard(imovel) {
    const card = document.createElement('article');
    // card.className = 'card';
    card.innerHTML = `
            <img class="fotoDestaque" src="${imovel.imagem}">
            <h3>${imovel.localizacao}</h3>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    bedroom_parent
                </span>
                <p>${imovel.qnt_quartos} Quartos</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    shower
                </span>
                <p>${imovel.qnt_banheiros} Banheiro</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    mood
                </span>
                <p>Área de lazer: ${imovel.area_lazer}</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    pool
                </span>
                <p>Piscina: ${imovel.piscina}</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    attach_money
                </span>
                <p>R$ ${imovel.preco}</p>
            </div>
            <span class="span-flex">
                <p class="mais">
                    Saiba mais
                </p>
            </span>
    `;
    return card;
}

// Função para renderizar os cards na página
export function renderizarImoveis() {
    const imoveis = carregarImoveis();
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';

    if (imoveis.length === 0) {
        cardsContainer.innerHTML = '<p>Nenhum imóvel cadastrado.</p>';
    } else {
        imoveis.forEach(imovel => {
            const card = criarCard(imovel);
            cardsContainer.appendChild(card);
        });
    }
}

// Renderiza os imóveis ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarImoveis);


{/* <h3>${imovel.localizacao}</h3>
        <p>Preço: R$ ${imovel.preco}</p>
        <p>Quartos: ${imovel.qnt_quartos}</p>
        <p>Banheiros: ${imovel.qnt_banheiros}</p>
        <p>Área de lazer: ${imovel.area_lazer}</p>
        <p>Piscina: ${imovel.piscina}</p> */}
