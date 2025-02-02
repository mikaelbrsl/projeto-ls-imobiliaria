// Função para salvar um imóvel no localStorage
export function salvarImovel(imovel) {
  let imoveis = JSON.parse(localStorage.getItem('imoveis')) || [];
  imoveis.push(imovel);
  localStorage.setItem('imoveis', JSON.stringify(imoveis));
}

// Função para carregar todos os imóveis do localStorage
export function carregarImoveis() {
  return JSON.parse(localStorage.getItem('imoveis')) || [];
}

// Função para limpar todos os imóveis (opcional, para testes ou reset)
// document.getElementById('limparStorage').addEventListener('click', function () {
//   localStorage.removeItem('imoveis'); // Remove todos os dados do localStorage
//   alert('Todos os dados foram apagados!');
//   location.reload(); // Recarrega a página para aplicar as mudanças
// });
