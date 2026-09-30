const IC={
 doc:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
 print:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
 warn:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
 check:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 phone:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
 pin:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
 insta:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
 fb:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'
};
let _j=0;
function jar(kind,cls){const id='j'+(++_j),c=kind==='citric';
 const lab=c?`<rect x="34" y="112" width="132" height="176" fill="#fff6c9"/><text x="100" y="138" text-anchor="middle" font-family="Unbounded,sans-serif" font-weight="900" font-size="13" fill="#1e6b34">ACIDE CITRIQUE</text>
 <circle cx="100" cy="196" r="34" fill="#ffd93b"/><circle cx="100" cy="196" r="29" fill="#fff3a0"/><g stroke="#ffd93b" stroke-width="3"><path d="M100 167v58M71 196h58M79 175l42 42M121 175l-42 42"/></g><circle cx="100" cy="196" r="5" fill="#ffd93b"/>
 <text x="100" y="250" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="9" fill="#1e6b34">Maison · Cuisine · Salle de bain</text>
 <rect x="34" y="262" width="132" height="26" fill="#0f3bff"/><text x="100" y="279" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="10" fill="#fff">Qualité Alimentaire</text>`
 :`<rect x="34" y="112" width="132" height="176" fill="#f2f6ff"/><text x="100" y="138" text-anchor="middle" font-family="Unbounded,sans-serif" font-weight="900" font-size="14" fill="#0b2bb0">CARBONATE</text>
 <text x="100" y="155" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-style="italic" font-size="11" fill="#c98f00">Toute Usage</text>
 <ellipse cx="100" cy="208" rx="38" ry="12" fill="#cfd9ee"/><path d="M66 206q34-40 68 0z" fill="#fff"/><ellipse cx="100" cy="207" rx="38" ry="11" fill="#fff" opacity=".7"/><rect x="118" y="182" width="6" height="34" rx="3" fill="#a5672f" transform="rotate(28 121 199)"/>
 <circle cx="56" cy="252" r="12" fill="#e31b23"/><circle cx="100" cy="252" r="12" fill="#e31b23"/><circle cx="144" cy="252" r="12" fill="#e31b23"/>
 <text x="56" y="277" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="7.5" fill="#0b2bb0">Ménage</text><text x="100" y="277" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="7.5" fill="#0b2bb0">Jardin</text><text x="144" y="277" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="7.5" fill="#0b2bb0">Alimentaire</text>`;
 return `<svg class="${cls||'jar'}" viewBox="0 0 200 300" aria-hidden="true"><defs><linearGradient id="${id}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff3b3f"/><stop offset="1" stop-color="#c50f18"/></linearGradient><linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".22" stop-color="#fff" stop-opacity="0"/><stop offset=".8" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient><clipPath id="${id}c"><path d="M34 70Q34 58 48 58H152Q166 58 166 70V276Q166 290 152 290H48Q34 290 34 276Z"/></clipPath></defs>
<ellipse cx="100" cy="294" rx="66" ry="6" fill="rgba(0,0,0,.28)"/>
<rect x="50" y="4" width="100" height="44" rx="10" fill="#0c2a9c"/><g stroke="#3a5be0" stroke-width="2.4" opacity=".7"><path d="M64 10v32M78 10v32M92 10v32M106 10v32M120 10v32M134 10v32"/></g>
<rect x="60" y="46" width="80" height="14" fill="#0a2380"/>
<g clip-path="url(#${id}c)"><rect x="30" y="56" width="140" height="240" fill="#fff"/>${lab}<rect x="30" y="56" width="140" height="58" fill="url(#${id}r)"/>
<text x="100" y="98" text-anchor="middle" font-family="Unbounded,sans-serif" font-weight="900" font-style="italic" font-size="30" fill="#fff" letter-spacing="-1">Ultra</text><text x="122" y="72" text-anchor="middle" font-family="Unbounded,sans-serif" font-weight="700" font-size="7" fill="#f7c51e" letter-spacing="3">EXEL</text></g>
<path d="M34 70Q34 58 48 58H152Q166 58 166 70V276Q166 290 152 290H48Q34 290 34 276Z" fill="url(#${id}s)" stroke="rgba(4,16,63,.35)" stroke-width="2"/></svg>`}

function pimg(p,cls){if(p.img)return '<img class="cut '+(cls||'')+'" src="'+p.img+'" alt="'+A(p.name)+'" loading="lazy">';if(p.photo)return '<img class="phot '+(cls||'')+'" src="'+p.photo+'" alt="'+A(p.name)+'" loading="lazy">';return jar(p.kind||'citric')}
// ------- interactive bubble canvas -------
function Bubbles(cv){
 const host=cv.parentElement,ctx=cv.getContext('2d');let W,H,dpr=Math.min(devicePixelRatio||1,2),bs=[],ps=[],rg=[],vis=true,last=0,mx=-999,my=-999;
 const N=+cv.dataset.n||(innerWidth<700?20:44);
 const size=()=>{const r=host.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)};
 const mk=(fresh,x,y)=>{const r=5+Math.pow(Math.random(),2.2)*44;return{x:x??Math.random()*W,y:y??(fresh?Math.random()*H:H+r+Math.random()*120),r,vy:.3+Math.random()*.8+(44-r)/90,ph:Math.random()*6.28,sw:.5+Math.random()*1}};
 size();for(let i=0;i<N;i++)bs.push(mk(true));
 addEventListener('resize',()=>{size()});
 new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(vis)requestAnimationFrame(loop)}).observe(host);
 host.addEventListener('pointermove',e=>{const r=host.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
 host.addEventListener('pointerleave',()=>{mx=my=-999});
 host.addEventListener('pointerdown',e=>{if(e.target.closest('a,button,input,select,textarea'))return;const r=host.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
  let hit=-1,best=1e9;bs.forEach((b,i)=>{const d=Math.hypot(b.x-x,b.y-y);if(d<b.r+12&&d<best){best=d;hit=i}});
  if(hit>=0){pop(bs[hit]);bs.splice(hit,1);bs.push(mk(false))}else{for(let k=0;k<4;k++)bs.push(mk(false,x+(Math.random()-.5)*40,y+(Math.random()-.5)*20));if(bs.length>N+30)bs.splice(0,4)}});
 function pop(b){rg.push({x:b.x,y:b.y,r:b.r,a:.9});for(let i=0;i<14;i++){const a=Math.random()*6.28,s=1.5+Math.random()*3.2;ps.push({x:b.x,y:b.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1,r:1.2+Math.random()*2.6,a:1})}}
 function loop(t){if(!vis)return;const dt=Math.min(32,t-last||16)/16;last=t;ctx.clearRect(0,0,W,H);
  bs.forEach((b,i)=>{b.y-=b.vy*dt;b.x+=Math.sin(t/1000*b.sw+b.ph)*.45*dt;const dx=b.x-mx,dy=b.y-my,d=Math.hypot(dx,dy);if(d<b.r+90){b.x+=dx/d*(1-d/(b.r+90))*3*dt;b.y+=dy/d*(1-d/(b.r+90))*1.5*dt}
   if(b.y<-b.r-10)bs[i]=mk(false);
   const g=ctx.createRadialGradient(b.x-b.r*.38,b.y-b.r*.38,b.r*.05,b.x,b.y,b.r);g.addColorStop(0,'rgba(255,255,255,.9)');g.addColorStop(.22,'rgba(255,255,255,.28)');g.addColorStop(.78,'rgba(140,210,255,.10)');g.addColorStop(1,'rgba(255,255,255,.55)');
   ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,6.283);ctx.fillStyle=g;ctx.fill();ctx.lineWidth=1.2;ctx.strokeStyle='rgba(255,255,255,.55)';ctx.stroke();
   ctx.beginPath();ctx.arc(b.x-b.r*.35,b.y-b.r*.4,b.r*.16,0,6.283);ctx.fillStyle='rgba(255,255,255,.85)';ctx.fill()});
  ps=ps.filter(p=>p.a>0.03);ps.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=.12*dt;p.a-=.03*dt;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fillStyle='rgba(255,255,255,'+p.a+')';ctx.fill()});
  rg=rg.filter(r=>r.a>0.03);rg.forEach(r=>{r.r+=2.2*dt;r.a-=.06*dt;ctx.beginPath();ctx.arc(r.x,r.y,r.r,0,6.283);ctx.lineWidth=2;ctx.strokeStyle='rgba(255,255,255,'+r.a+')';ctx.stroke()});
  requestAnimationFrame(loop)}
 requestAnimationFrame(loop);
}

const App=(()=>{
 let lang='fr';try{lang=localStorage.getItem('ul_lang')||'fr'}catch(e){}
 const collect=()=>{document.querySelectorAll('[data-ar]').forEach(e=>{if(e.dataset.fr===undefined)e.dataset.fr=e.innerHTML});
  document.querySelectorAll('[data-ar-ph]').forEach(e=>{if(e.dataset.frPh===undefined)e.dataset.frPh=e.getAttribute('placeholder')||''})};
 const apply=()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar]').forEach(e=>e.innerHTML=lang==='ar'?e.dataset.ar:e.dataset.fr);
  document.querySelectorAll('[data-ar-ph]').forEach(e=>e.setAttribute('placeholder',lang==='ar'?e.dataset.arPh:e.dataset.frPh));
  const b=document.getElementById('lang');if(b)b.textContent=lang==='ar'?'FR':'عربي'};
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});
 const misc=()=>{
  document.querySelectorAll('.ic:empty').forEach(e=>e.innerHTML=IC.doc);
  document.querySelectorAll('.mq:not([data-ok])').forEach(el=>{el.dataset.ok=1;const h=el.dataset.w.split('|').map(w=>w+'<span>✦</span>').join('');el.innerHTML=h.repeat(4)});
  document.querySelectorAll('.rv:not([data-o])').forEach((el,i)=>{el.dataset.o=1;el.style.transitionDelay=(i%3)*70+'ms';io.observe(el)});
  document.querySelectorAll('.bubbles:not([data-ok])').forEach(c=>{c.dataset.ok=1;const n=+c.dataset.n||12;for(let i=0;i<n;i++){const s=document.createElement('span');s.className='bub';const z=16+Math.random()*64;s.style.cssText=`width:${z}px;height:${z}px;left:${Math.random()*100}%;animation-duration:${9+Math.random()*12}s;animation-delay:${-Math.random()*16}s`;c.appendChild(s)}});
  document.querySelectorAll('canvas.bcanvas:not([data-ok])').forEach(c=>{c.dataset.ok=1;Bubbles(c)});
 };
 const refresh=()=>{misc();collect();apply()};
 const set=l=>{lang=l;try{localStorage.setItem('ul_lang',l)}catch(e){}apply();document.dispatchEvent(new Event('langchange'))};
 return{refresh,set,t:(fr,ar)=>lang==='ar'?ar:fr,get:()=>lang};
})();
const L=(fr,ar)=>App.t(fr,ar);
const A=s=>String(s).replace(/"/g,'&quot;');
const opt=(fr,ar,extra)=>`<option ${extra||''} data-ar="${A(ar)}">${fr}</option>`;
const wilayaOpts=()=>WILAYAS.map((w,i)=>{const n=String(i+1).padStart(2,'0');return opt(n+' — '+w,n+' — '+WILAYAS_AR[i])}).join('');

(function(){
 document.documentElement.classList.add('js');
 const here=location.pathname;const act=k=>here.includes(k)?' class="act"':'';
 const h=document.getElementById('hdr');
 if(h)h.outerHTML=`<div class="prog" id="prog"></div>
<header class="top" id="top-h"><a class="logo" href="index.html"><img src="logo.png" alt="Ultra Exel"></a>
<nav><a href="../">BIOPACK</a><a href="index.html#gamme" data-ar="المنتجات">Produits</a><a href="index.html#usages" data-ar="الاستعمالات">Usages</a><a href="revendeurs.html"${act('revendeurs')} data-ar="الموزّعون">Revendeurs</a><a href="recrutement.html"${act('recrutement')} data-ar="توظيف">Recrutement</a></nav>
<div class="hr"><button class="lang" id="lang" aria-label="Langue">عربي</button><a class="pill" href="index.html#contact" data-ar="اتصل بنا">Contact →</a><button class="burger" id="burger" aria-label="Menu">☰</button></div></header>
<div class="menu" id="menu"><a href="../" data-ar="مجموعة بيوباك">Groupe BIOPACK</a><a href="index.html#gamme" data-ar="المنتجات">Produits</a><a href="index.html#usages" data-ar="الاستعمالات">Usages</a><a href="revendeurs.html" data-ar="الموزّعون">Espace revendeurs</a><a href="recrutement.html" data-ar="توظيف">Recrutement</a><a href="index.html#contact" data-ar="اتصل بنا" style="color:var(--gold)">Contact</a></div>`;
 const f=document.getElementById('ftr');
 if(f)f.outerHTML=`<footer class="ftr"><div class="wrap"><div class="cols">
<div><img class="lg" src="logo.png" alt="Ultra Exel"><p data-ar="قوة فعّالة لكل استعمال. منتجات للمنزل والمطبخ والحديقة.">Une force efficace pour chaque usage. Des produits pour la maison, la cuisine et le jardin.</p></div>
<div><h4 data-ar="المنتجات">Produits</h4>${ORDER.map(k=>`<a href="produit.html?p=${k}" data-ar="${A(PRODUCTS[k].ar)}">${PRODUCTS[k].name}</a>`).join('')}<a href="index.html#usages" data-ar="المستشار">Trouver l'usage</a></div>
<div><h4 data-ar="الفضاءات">Espaces</h4><a href="revendeurs.html" data-ar="فضاء الموزّعين">Espace revendeurs</a><a href="recrutement.html" data-ar="فضاء التوظيف">Espace recrutement</a><a href="index.html#contact" data-ar="اتصل بنا">Contact</a></div>
<div><h4 data-ar="تواصلوا معنا">Nous joindre</h4><a href="${CONTACT.tel}">${CONTACT.phone}</a><a href="${CONTACT.map}" target="_blank" rel="noopener">${CONTACT.addr}</a><a href="${CONTACT.instaUrl}" target="_blank" rel="noopener">@${CONTACT.insta}</a></div>
</div><div class="bot"><span data-ar="© ألترا إكسل. جميع الحقوق محفوظة.">© Ultra Exel. Tous droits réservés.</span><a href="../" style="display:inline;padding:0" data-ar="مجموعة بيوباك ←">Groupe BIOPACK →</a></div></div></footer>
<button class="totop" id="totop" aria-label="Haut">↑</button>`;
 const menu=document.getElementById('menu'),burger=document.getElementById('burger');
 if(burger){burger.onclick=()=>{menu.classList.toggle('open');burger.textContent=menu.classList.contains('open')?'✕':'☰'};menu.querySelectorAll('a').forEach(a=>a.onclick=()=>{menu.classList.remove('open');burger.textContent='☰'})}
 const lb=document.getElementById('lang');if(lb)lb.onclick=()=>App.set(App.get()==='ar'?'fr':'ar');
 const pr=document.getElementById('prog'),tt=document.getElementById('totop'),th=document.getElementById('top-h');
 const sc=()=>{const d=document.documentElement;const p=d.scrollTop/(d.scrollHeight-d.clientHeight||1);if(pr)pr.style.width=(p*100)+'%';if(tt)tt.classList.toggle('show',d.scrollTop>700);if(th)th.classList.toggle('solid',d.scrollTop>60)};
 addEventListener('scroll',sc,{passive:true});sc();
 if(tt)tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 App.refresh();
})();
function okForm(form,fr,ar){form.style.display='none';const d=document.createElement('div');d.className='ok show';d.innerHTML=`<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="32"/><path d="M26 41l10 10 19-21"/></svg><h3>${L(fr,ar)}</h3>`;form.parentNode.insertBefore(d,form.nextSibling)}
