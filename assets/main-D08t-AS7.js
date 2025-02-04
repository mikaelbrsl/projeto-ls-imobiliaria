(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function c(e){let a=JSON.parse(localStorage.getItem("imoveis"))||[];a.push(e),localStorage.setItem("imoveis",JSON.stringify(a))}function l(){return JSON.parse(localStorage.getItem("imoveis"))||[]}function d(e){const a=document.createElement("article");return a.innerHTML=`
            <img class="fotoDestaque" src="${e.imagem}">
            <h3>${e.localizacao}</h3>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    bedroom_parent
                </span>
                <p>${e.qnt_quartos} Quartos</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    shower
                </span>
                <p>${e.qnt_banheiros} Banheiro</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    mood
                </span>
                <p>Área de lazer: ${e.area_lazer}</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    pool
                </span>
                <p>Piscina: ${e.piscina}</p>
            </div>
            <div class="flexDescricao">
                <span class="material-symbols-outlined">
                    attach_money
                </span>
                <p>R$ ${e.preco}</p>
            </div>
            <span class="span-flex">
                <p class="mais">
                    Saiba mais
                </p>
            </span>
    `,a}function i(){const e=l(),a=document.getElementById("cardsContainer");a.innerHTML=e.length?e.map(s=>d(s).outerHTML).join(""):"<p>Nenhum imóvel cadastrado.</p>"}document.addEventListener("DOMContentLoaded",i);document.addEventListener("DOMContentLoaded",function(){document.getElementById("imovelForm").addEventListener("submit",function(e){e.preventDefault();const a={localizacao:document.getElementById("localizacao").value,preco:document.getElementById("preco").value,qnt_quartos:document.getElementById("qnt_quartos").value,qnt_banheiros:document.getElementById("qnt_banheiros").value,area_lazer:document.getElementById("area_lazer").value,piscina:document.getElementById("piscina").value,imagem:document.getElementById("imagem").value};c(a),alert("Imóvel cadastrado com sucesso!"),document.getElementById("imovelForm").reset(),i()})});
