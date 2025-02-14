import{a as p,i,S as y}from"./assets/vendor-Fd3mU3Z4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="48848283-2fdf95bc8df92e3ac2f3192c4",h="https://pixabay.com/api/";async function b(o){try{return(await p.get(h,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Ошибка при запросе к Pixabay API:",t),new Error}}function w(o,t){const s=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:n,views:f,comments:d,downloads:m})=>`
        <a href="${e}" class="gallery-item">
            <img src="${a}" alt="${r}" loading="lazy" />
            <div class="info">
                <p><b>Likes:</b> ${n}</p>
                <p><b>Views:</b> ${f}</p>
                <p><b>Comments:</b> ${d}</p>
                <p><b>Downloads:</b> ${m}</p>
            </div>
        </a>
    `).join("");t.innerHTML=s}const L=document.querySelector("#search-form"),c=document.querySelector("#gallery"),l=document.querySelector("#loader");let u;L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){i.warning({message:"Please enter a search term"});return}c.innerHTML="",l.style.display="block";try{const s=await b(t);if(s.length===0){i.error({message:"Sorry, no images found!"});return}else w(s,c),u=new y(".gallery a"),u.refresh()}catch{i.error({message:"Something went wrong!"})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
