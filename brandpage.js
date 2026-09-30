
const B=BRANDS[BKEY];let PS=B.products;
document.title=B.name+' — BIOPACK Industries';
const card=(p,i)=>{const im=p.photo?'<img class="photo" src="../img/'+p.photo+'" alt="" loading="lazy">':p.img?'<img src="../img/'+p.img+'.webp" alt="" loading="lazy">':'<div class="bwrap">'+bbottle('#9be9e1','WC')+'</div>';
 return '<button class="pc2 rv" data-i="'+i+'" style="--bg:'+p.bg+'"><div class="ph">'+im+'</div><h3 data-ar="'+A(p.nAr)+'">'+p.n+'</h3><div class="facts2">'+p.facts.map(f=>'<span data-ar="'+A(f[1])+'">'+f[0]+'</span>').join('')+'</div><span class="more" data-ar="التفاصيل">Voir le détail</span></button>'};
function draw(){
 const one=B.name.length>5?B.name.slice(0,4):B.name.split(' ')[0];
 const cnt=B.hero.length;
 const bv=B.hero.length?'<div class="bv'+(cnt===2?' two':cnt===1?' one':'')+'">'+B.hero.map(n=>'<img src="../img/'+n+'.webp" alt="">').join('')+'</div>':'<div class="bv">'+bbottle('#8fe7df','WC')+bbottle('#8fe7df','WC')+'</div>';
 document.getElementById('app').innerHTML=`
<section class="bhero${B.dark?' dk':''}" style="--c1:${B.c1};--c2:${B.c2}"><div class="bubbles" data-n="14"></div><canvas class="bcanvas"></canvas>
 <div class="wrap"><div>
  <nav class="crumb"><a href="../index.html">BIOPACK</a> / <a href="../index.html#marques" data-ar="العلامات">Marques</a> / <b>${B.name}</b></nav>
  ${B.logo?'<img class="bh-logo" src="../img/'+B.logo+'" alt="'+B.name+'">':''}
  <span class="tag" data-ar="${A(B.tagAr)}">${B.tag}</span>
  <h1 style="margin-top:14px">${B.name}</h1>
  <div class="bslogan">${B.slogan||''}</div>
  <p class="lead" data-ar="${A(B.leadAr)}">${B.lead}</p>
  <div class="acts"><a class="pill gold" href="#produits" data-ar="اكتشفوا المنتجات ↓">Voir les produits ↓</a><a class="pill ${B.dark?'dark':'ghost'}" href="../index.html?b=${B.slug}#distributeurs" data-ar="كونوا موزّعين">Devenir distributeur</a></div>
 </div>${bv}</div>
</section>
<section id="produits"><div class="wrap">
 <h2 class="rv" data-ar="منتجات <em>${B.name}</em>">Les produits <em>${B.name}</em></h2>
 <div class="pgrid2">${PS.map(card).join('')}</div>
 ${B.scents?'<h3 style="margin-top:44px;font-size:clamp(20px,2.4vw,30px)" data-ar="العطور المتوفرة">Les senteurs de la gamme</h3><div class="scents2">'+B.scents.map(s=>'<span data-ar="'+A(s[1])+'" style="--c:'+s[2]+'"><i></i>'+s[0]+'</span>').join('')+'</div>':''}
 ${B.placeholder?'<div class="note2" data-ar="ℹ️ هذا تقديم أوّلي: صور المنتجات قيد الإعداد.">ℹ️ Présentation préliminaire : les photos produits arrivent bientôt.</div>':''}
</div></section>
${B.posts?'<section style="padding-top:0"><div class="wrap"><h2 class="rv" style="font-size:clamp(26px,3.6vw,46px)" data-ar="من حملاتنا <em>على إنستغرام.</em>">Nos campagnes <em>sur Instagram.</em></h2><div class="gal2">'+B.posts.map(p=>'<figure><img src="../img/post-'+p+'.jpg" alt="" loading="lazy"></figure>').join('')+'</div></div></section>':''}
<section style="padding-top:0"><div class="wrap"><div class="band3"><h3 style="font-size:clamp(24px,3.4vw,44px)" data-ar="تريدون توزيع ${B.name}؟">Vous souhaitez distribuer ${B.name} ?</h3><p style="margin-top:12px;opacity:.85;max-width:520px" data-ar="اتصلوا بنا لفتح حساب موزّع.">Contactez-nous pour ouvrir un compte distributeur.</p><div class="acts" style="margin-top:22px"><a class="pill gold" href="../index.html?b=${B.slug}#distributeurs" data-ar="فضاء الموزّع →">Accès distributeur →</a><a class="pill ghost" href="${GROUP.tel}" style="color:#fff">${GROUP.phone}</a></div></div>
 <h3 style="margin-top:40px;font-size:clamp(20px,2.6vw,32px)" data-ar="علامات أخرى من المجموعة">Les autres marques du groupe</h3>
 <div class="tiles5">${BORDER.filter(k=>k!==BKEY&&BRANDS[k].logo).map(k=>'<a href="../'+BRANDS[k].slug+'/"><img src="../img/'+BRANDS[k].logo+'" alt="'+BRANDS[k].name+'"></a>').join('')}</div>
</div></section>
<div class="modal" id="modal"><div class="mbox" id="mbox"></div></div>`;
 App.refresh();
 document.querySelectorAll('.pc2').forEach(b=>b.onclick=()=>openM(+b.dataset.i));
 document.getElementById('modal').onclick=e=>{if(e.target.id==='modal')closeM()};
}
function openM(i){const p=PS[i];
 const im=p.photo?'<img class="photo" src="../img/'+p.photo+'" alt="">':p.img?'<img src="../img/'+p.img+'.webp" alt="">':'<div class="bwrap big">'+bbottle('#9be9e1','WC')+'</div>';
 document.getElementById('mbox').innerHTML='<button class="mclose" aria-label="x" id="mx">✕</button><div class="mph" style="--bg:'+p.bg+'">'+im+'</div><div class="mtx"><span class="tag" style="background:'+p.bg+'" data-ar="'+A(B.tagAr)+'">'+B.tag+'</span><h3 data-ar="'+A(p.nAr)+'">'+p.n+'</h3><p data-ar="'+A(p.dAr)+'">'+p.d+'</p><div class="facts2">'+p.facts.map(f=>'<span data-ar="'+A(f[1])+'">'+f[0]+'</span>').join('')+'</div><div class="acts"><a class="pill" href="../index.html?b='+B.slug+'&p='+encodeURIComponent(p.n)+'#distributeurs" data-ar="اطلبوا السعر">Demander un tarif</a><button class="pill ghost" style="color:var(--navy)" onclick="window.print()">'+IC.print+'<span data-ar="اطبعوا الفيش">Imprimer la fiche</span></button></div><p class="mnote" data-ar="المعلومات مأخوذة من تواصل العلامة وتحتاج إلى مصادقة.">Informations issues de la communication de la marque, à valider.</p></div>';
 document.getElementById('modal').classList.add('open');document.getElementById('mx').onclick=closeM;App.refresh();}
function closeM(){document.getElementById('modal').classList.remove('open')}
addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
draw();document.addEventListener('langchange',draw);
