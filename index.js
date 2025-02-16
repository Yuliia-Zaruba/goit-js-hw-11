import{a as f,S as m,i}from"./assets/vendor-CtnHdr7b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="48848283-2fdf95bc8df92e3ac2f3192c4",d="https://pixabay.com/api/";async function g(o){try{return(await f.get(d,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}const p=document.querySelector(".gallery");let c;function h(o){p.innerHTML=o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
      <a href="${s}" class="gallery-link">
        <img src="${t}" alt="${n}" />
        <div class="info">
          <p>Likes: ${e}</p>
          <p>Views: ${r}</p>
          <p>Comments: ${a}</p>
          <p>Downloads: ${u}</p>
        </div>
      </a>
      </li>
    `).join(""),c?c.refresh():c=new m(".gallery a")}const L=document.querySelector(".search-form"),l=document.querySelector(".loader"),q=document.querySelector(".gallery");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){i.warning({message:"Please enter a search query!"});return}l.style.display="block",q.innerHTML="";try{const s=await g(t);if(s.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(s)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
