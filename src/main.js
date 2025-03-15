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


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalLogin');
    const overlay = document.querySelector('.modal-overlay');
    const btnAbrirModal = document.getElementById('abrirModal');
    const btnFecharModal = document.getElementById('fecharModal');
    const formLogin = document.getElementById('loginForm');

    // Credenciais corretas
    const emailCorreto = "mikael@gmail.com";
    const senhaCorreta = "1234";

    // Abrir modal ao clicar no botão "Cadastro"
    btnAbrirModal.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Fechar modal ao clicar no botão de fechar ou no fundo escuro
    btnFecharModal.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Verificar login ao enviar o formulário
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar
        
        const emailDigitado = document.getElementById('email').value.trim();
        const senhaDigitada = document.getElementById('senha').value.trim();

        if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
            alert("Login bem-sucedido!");
            window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
        } else {
            alert("Email ou senha incorretos!");
        }
    });
});