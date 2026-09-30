
const B=BRANDS[BKEY];let PS=B.products;
document.title=B.name+' — BIOPACK Industries';
const FK=(i)=>BKEY+':'+i;
const cardImg=p=>p.photo?'<img class="photo" src="../img/'+p.photo+'" alt="" loading="lazy">':p.img?'<img src="../img/'+p.img+'.webp" alt="" loading="lazy">':'<div class="bwrap">'+bbottle('#9be9e1','WC')+'</div>';
const card=(p,i)=>{const fd=FICHES[FK(i)]||{};const st=fd.promo?'<span class="sticker'+(i%2?' gold':'')+'" data-ar="'+A(fd.promo[1])+'">'+fd.promo[0]+'</span>':'';
 return '<a class="pc2 rv" href="../fiche.html?b='+BKEY+'&i='+i+'" style="--bg:'+p.bg+';--pc:'+(B.dark?'#e31b23':B.c2)+'">'+st+'<span class="pastille"><i class="pi">↗</i><b data-ar="فيش + PDF">Fiche + PDF</b></span><div class="ph">'+cardImg(p)+'</div><h3 data-ar="'+A(p.nAr)+'">'+p.n+'</h3><div class="facts2">'+p.facts.map(f=>'<span data-ar="'+A(f[1])+'">'+f[0]+'</span>').join('')+'</div><span class="more" data-ar="الفيش التقني المفصّل">Fiche technique détaillée</span></a>'};
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
<section style="padding-top:0"><div class="wrap"><div class="band3"><h3 style="font-size:clamp(24px,3.4vw,44px)" data-ar="تريدون توزيع ${B.name}؟">Vous souhaitez distribuer ${B.name} ?</h3><p style="margin-top:12px;opacity:.85;max-width:520px" data-ar="اتصلوا بنا لفتح حساب موزّع.">Contactez-nous pour ouvrir un compte distributeur.</p><div class="acts" style="margin-top:22px"><a class="pill gold" href="../index.html?b=${B.slug}#distributeurs" data-ar="فضاء الموزّع →">Accès distributeur →</a><a class="pill ghost" href="../pdf/catalogue-${B.slug}.pdf" download style="color:#fff">⬇ <span data-ar="حمّلوا كتالوج ${B.name}">Catalogue ${B.name} (PDF)</span></a><a class="pill ghost" href="${GROUP.tel}" style="color:#fff">${GROUP.phone}</a></div></div>
 <h3 style="margin-top:40px;font-size:clamp(20px,2.6vw,32px)" data-ar="علامات أخرى من المجموعة">Les autres marques du groupe</h3>
 <div class="tiles5">${BORDER.filter(k=>k!==BKEY&&BRANDS[k].logo).map(k=>'<a href="../'+BRANDS[k].slug+'/"><img src="../img/'+BRANDS[k].logo+'" alt="'+BRANDS[k].name+'"></a>').join('')}</div>
</div></section>
`;
 App.refresh();
}
draw();document.addEventListener('langchange',draw);
