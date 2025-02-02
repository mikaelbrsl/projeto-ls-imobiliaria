import { salvarImovel } from './storage.js';
import { renderizarImoveis } from './cards.js';
import './style.css';

// Cadastro de imóvel no formulário
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('imovelForm').addEventListener('submit', function (e) {
        e.preventDefault();


        const imovel = {
            localizacao: document.getElementById('localizacao').value,
            preco: document.getElementById('preco').value,
            qnt_quartos: document.getElementById('qnt_quartos').value,
            qnt_banheiros: document.getElementById('qnt_banheiros').value,
            area_lazer: document.getElementById('area_lazer').value,
            piscina: document.getElementById('piscina').value,
            imagem: document.getElementById('imagem').value,
        };

        salvarImovel(imovel);

        alert('Imóvel cadastrado com sucesso!');
        document.getElementById('imovelForm').reset();
        renderizarImoveis();
    });
});