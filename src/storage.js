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

