const GROUP={name:'BIOPACK Industries',since:1995,addr:'Domaine Ouadah 08 Bis, Birkhadem 16029, Alger',factory:'Zone industrielle Khemis El Khachna, Boumerdès',phone:'0555 55 99 74',tel:'tel:0555559974',fb:'https://www.facebook.com/biopackindustrie/',map:'https://www.google.com/maps/search/?api=1&query=Domaine+Ouadah+Birkhadem+Alger'};
const I='img/';
const BRANDS={
 ultra:{slug:'ultra',name:'Ultra Exel',c1:'#ff4a4f',c2:'#8a0a10',logo:'logo-ultra.webp',hero:['ultra_orange750','ultra_citron750','bicarb'],full:true,
  tag:'Vaisselle · Bicarbonate · Acide citrique',tagAr:'أواني · بيكربونات · حمض الستريك',
  sub:'Liquides vaisselle dégraissants, bicarbonate toute usage et acide citrique.',subAr:'سوائل أواني مزيلة للدهون، بيكربونات لكل استعمال وحمض الستريك.'},
 swif:{slug:'swif',name:'SWIF',c1:'#2f7bff',c2:'#04328a',accent:'#ffd400',logo:'logo-swif.webp',hero:['swif_marine','swif_nadhif','swif_muguet'],
  tag:'Sols, surfaces & sanitaires',tagAr:'أرضيات، أسطح وحمّامات',
  sub:'Lave-sols concentrés, javel moussante, désincrustant, déboucheur et nettoyant WC.',subAr:'منظفات أرضيات مركّزة، جافيل رغوي، مزيل الترسبات، فاتح المجاري ومنظف المراحيض.',
  lead:'La marque de l\'entretien de la maison : des lave-sols concentrés aux nettoyants sanitaires, avec une signature « fraîcheur ».',leadAr:'علامة العناية بالبيت: من منظفات الأرضيات المركّزة إلى منظفات الحمّامات، بتوقيع «الانتعاش».',
  slogan:'انتعاش بحري في كل زاوية',
  scents:[['Rose','ورد','#ef7fb3'],['Marine','بحري','#2f8fe8'],['Pin','صنوبر','#3fb56b'],['Lavande','لافندر','#8a63d2'],['Jasmin','ياسمين','#f2eedd'],['Fleur de Muguet','زنبق الوادي','#8fdb9a']],
  posts:['marine','muguet','nadhif','javel1','wc_lav','deb','magic','surf'],
  products:[
   {n:'Lave sols & Surfaces — Senteur Marine',nAr:'منظف الأرضيات والأسطح — عطر بحري',img:'swif_marine',bg:'#cfe3ff',d:'Nettoyant sols et surfaces pour tout type de sol. Formule concentrée +++, effet 24h intense.',dAr:'منظف للأرضيات والأسطح لكل أنواع الأرضيات. تركيبة مركّزة، مفعول 24 ساعة.',facts:[['Formule concentrée','تركيبة مركّزة'],['24h intense','24 ساعة'],['Tout type de sol','لكل الأرضيات']]},
   {n:'Lave sols & Surfaces — Fleur de Muguet',nAr:'منظف الأرضيات والأسطح — زنبق الوادي',img:'swif_muguet',bg:'#d6f3da',d:'La version Fleur de Muguet du lave-sols concentré, 24h intense, pour tout type de sol.',dAr:'نسخة زنبق الوادي من منظف الأرضيات المركّز، مفعول 24 ساعة لكل الأرضيات.',facts:[['Formule concentrée','تركيبة مركّزة'],['24h intense','24 ساعة'],['Fleur de Muguet','زنبق الوادي']]},
   {n:'Javel Moussante — Cuisine & Sanitaires',nAr:'جافيل رغوي — المطبخ والحمّامات',img:'swif_javel1',bg:'#fff3a8',d:'3 en 1 : désinfecte, dégraisse, parfume. Élimine 99 % des microbes et bactéries, avec une mousse dense.',dAr:'3 في 1: يعقّم، يزيل الدهون ويعطّر. يقضي على 99% من الميكروبات والبكتيريا برغوة كثيفة.',facts:[['3 en 1','3 في 1'],['99 % microbes & bactéries','99% من الميكروبات'],['Cuisine & sanitaires','مطبخ وحمّام']]},
   {n:'Nadhif — Désincrustant',nAr:'نظيف — مزيل الترسبات',img:'swif_nadhif',bg:'#ffe58a',d:'Gel épais à formule surpuissante, multi-usage, pour évier, lavabo et carrelage. Format 850 ml + 150 ml gratuits.',dAr:'جل كثيف بتركيبة قوية متعددة الاستعمالات للحوض والمغسلة والبلاط. عبوة 850 مل + 150 مل مجانا.',facts:[['Gel épais','جل كثيف'],['Multi-usage','متعدد الاستعمالات'],['15 % gratuit','15% مجانا']]},
   {n:'Déboucheur Micro-Billes',nAr:'فاتح المجاري بالكريات الدقيقة',img:'swif_deb',bg:'#cfe3ff',d:'Débouche les canalisations grâce aux micro-billes. Action prolongée, efficacité maximale. Boîte de 320 g.',dAr:'يفتح قنوات المياه بفضل الكريات الدقيقة. مفعول ممتد وفعالية قصوى. علبة 320 غ.',facts:[['Micro-billes','كريات دقيقة'],['Action prolongée','مفعول ممتد'],['320 g','320 غ']]},
   {n:'Nettoyant WC Power Active — Duo Pack',nAr:'منظف المراحيض باور أكتيف — دو باك',photo:'post-wc_lav.jpg',bg:'#e5d8ff',d:'Boules nettoyantes parfumées à la lavande : 8 éléments actifs, anti-calcaire, désodorisant. Duo pack 2×50 g. Technologie allemande.',dAr:'كريات تنظيف معطّرة بالخزامى: 8 عناصر نشطة، ضد الكلس ومزيلة للروائح. دو باك 2×50 غ. تكنولوجيا ألمانية.',facts:[['8 éléments actifs','8 عناصر نشطة'],['Anti-calcaire','ضد الكلس'],['Lavande','خزامى']]},
   {n:'Serpillère Viscose x2',nAr:'ممسحة الفيسكوز × 2',photo:'post-magic.jpg',bg:'#ffe58a',d:'Serpillère viscose (+ 80 % de viscose), haute capacité d\'absorption, 50×70 cm, lot de 2. Made in Germany.',dAr:'ممسحة فيسكوز (+80% فيسكوز) بقدرة امتصاص عالية، 50×70 سم، عبوة من قطعتين. صنع في ألمانيا.',facts:[['+ 80 % viscose','+80% فيسكوز'],['50×70 cm','50×70 سم'],['Made in Germany','صنع في ألمانيا']]}
  ]},
 supra:{slug:'supra',name:'SUPRA',c1:'#ffe100',c2:'#f0a000',dark:true,accent:'#e31b23',logo:'logo-supra.webp',hero:['supra_polish','supra_vitres','supra_javel'],
  tag:'Sprays : vitres, bois, cuisine',tagAr:'بخاخات: زجاج، خشب، مطبخ',
  sub:'Les sprays malins : vitres zéro trace, polish meubles, javel spray et dégraissant cuisine.',subAr:'البخاخات الذكية: زجاج بلا آثار، ملمّع الأثاث، جافيل سبراي ومزيل دهون المطبخ.',
  lead:'Le « Système Supra » : un spray pour chaque surface de la maison, de la vitre au plan de travail.',leadAr:'«نظام سوبرا»: بخاخ لكل سطح في البيت، من الزجاج إلى سطح العمل.',
  slogan:'زيرو أثر... لمعان أقصى',
  products:[
   {n:'Spray Vitres 500 ml — Zéro trace',nAr:'بخاخ الزجاج 500 مل — بلا آثار',img:'supra_vitres',bg:'#cfe7ff',d:'Nettoie et désinfecte toutes les vitres de la maison. Zéro trace, nettoie ultra brillance. 50 % gratuit.',dAr:'ينظّف ويعقّم كل زجاج البيت. بلا آثار ولمعان فائق. 50% مجانا.',facts:[['Zéro trace','بلا آثار'],['Ultra brillance','لمعان فائق'],['50 % gratuit','50% مجانا']]},
   {n:'Spray Polish Meubles',nAr:'بخاخ ملمّع الأثاث',img:'supra_polish',bg:'#ffe9c4',d:'Nettoie et parfume tous types de bois. Enrichi à la cire d\'abeille : nourrit et protège.',dAr:'ينظّف ويعطّر كل أنواع الخشب. غني بشمع النحل: يغذّي ويحمي.',facts:[['Cire d\'abeille','شمع النحل'],['Nourrit & protège','يغذّي ويحمي'],['Tous types de bois','كل أنواع الخشب']]},
   {n:'Javel Spray 3 en 1 — Mousse intense',nAr:'جافيل سبراي 3 في 1 — رغوة مكثفة',img:'supra_javel',bg:'#ffd9dc',d:'Javel en spray à mousse intense pour la salle de bain et la cuisine.',dAr:'جافيل بخاخ برغوة مكثفة للحمّام والمطبخ.',facts:[['3 en 1','3 في 1'],['Mousse intense','رغوة مكثفة'],['Salle de bain & cuisine','حمّام ومطبخ']]},
   {n:'Supra Cuisine — Ultra dégraissant',nAr:'سوبرا المطبخ — مزيل دهون فائق',img:'supra_cuisine',bg:'#f1f1f1',d:'Spray dégraissant pour la cuisine : fait briller, parfum frais, sans gras et sans odeur.',dAr:'بخاخ مزيل للدهون للمطبخ: يلمّع بعطر منعش، بلا دهون وبلا روائح.',facts:[['Ultra dégraissant','مزيل دهون فائق'],['Fait briller','يلمّع'],['Parfum frais','عطر منعش']]}
  ]},
 flip:{slug:'flip',name:'FLIP',c1:'#3db4ff',c2:'#0a55c9',accent:'#e31b23',logo:'logo-flip.webp',hero:['flip_premium','flip_alpes','flip_lavande'],
  tag:'Lessive liquide 3 L',tagAr:'سائل غسيل 3 لتر',
  sub:'La lessive liquide en 4 versions : Premium, Savon de Marseille, Fleur des Alpes, Lavande sauvage.',subAr:'سائل الغسيل بأربع نسخ: بريميوم، صابون مرسيليا، زهرة الألب، خزامى بري.',
  lead:'Une formule liquide qui pénètre les fibres en profondeur pour un nettoyage optimal, idéale pour les textiles délicats.',leadAr:'تركيبة سائلة تتغلغل في الألياف بعمق لتنظيف مثالي، مناسبة للأقمشة الحسّاسة.',
  slogan:'غسيل ناصع... وعطر يدوم',
  products:[
   {n:'FLIP Lessive Premium 3 L',nAr:'فليب سائل الغسيل بريميوم 3 لتر',img:'flip_premium',bg:'#cdeaff',d:'La FLIP Liquide est idéale pour les textiles délicats. Sa formule liquide pénètre les fibres en profondeur. Parfum, anti-taches, fraîcheur, éclat. Lavage à 30°, 40° ou 60°.',dAr:'سائل فليب مثالي للأقمشة الحسّاسة. تركيبته السائلة تتغلغل في الألياف. عطر، مضاد للبقع، انتعاش ولمعان. غسيل على 30° أو 40° أو 60°.',facts:[['Anti-taches','مضاد للبقع'],['Fraîcheur & éclat','انتعاش ولمعان'],['30° · 40° · 60°','30° · 40° · 60°']]},
   {n:'FLIP Lessive Savon de Marseille 3 L',nAr:'فليب سائل الغسيل صابون مرسيليا 3 لتر',img:'flip_savon',bg:'#fff0bd',d:'Eco Machine au Savon de Marseille. 50 lavages, l\'équivalent de 8 kg de poudre. Formule liquide qui pénètre les fibres en profondeur.',dAr:'إيكو ماشين بصابون مرسيليا. 50 غسلة، ما يعادل 8 كغ من المسحوق. تركيبة سائلة تتغلغل في الألياف.',facts:[['Eco Machine','إيكو ماشين'],['50 lavages','50 غسلة'],['= 8 kg de poudre','= 8 كغ مسحوق']]},
   {n:'FLIP Lessive Fleur des Alpes 3 L',nAr:'فليب سائل الغسيل زهرة الألب 3 لتر',img:'flip_alpes',bg:'#d3f2dc',d:'Eco Machine parfum Fleur des Alpes. Équivaut à 8 kg de poudre. Idéale pour les textiles délicats.',dAr:'إيكو ماشين بعطر زهرة الألب. يعادل 8 كغ من المسحوق. مثالي للأقمشة الحسّاسة.',facts:[['Eco Machine','إيكو ماشين'],['Fleur des Alpes','زهرة الألب'],['= 8 kg de poudre','= 8 كغ مسحوق']]},
   {n:'FLIP Lessive Lavande Sauvage 3 kg',nAr:'فليب سائل الغسيل خزامى بري 3 كغ',img:'flip_lavande',bg:'#e6d9ff',d:'Eco Machine parfum Lavande sauvage. 50 lavages, l\'équivalent de 8 kg de poudre.',dAr:'إيكو ماشين بعطر الخزامى البري. 50 غسلة، ما يعادل 8 كغ من المسحوق.',facts:[['Eco Machine','إيكو ماشين'],['50 lavages','50 غسلة'],['Lavande sauvage','خزامى بري']]}
  ]},
 solo:{slug:'solo',name:'SOLO',c1:'#62c957',c2:'#12702a',accent:'#e31b23',logo:'logo-solo.webp',hero:['solo_micro','solo_viscose'],
  tag:'Chiffons & accessoires',tagAr:'مماسح وإكسسوارات',
  sub:'Chiffons microfibres et viscose, extra absorbants et ultra résistants.',subAr:'مماسح من الألياف الدقيقة والفيسكوز، فائقة الامتصاص وشديدة المقاومة.',
  lead:'Des chiffons efficaces, à la capacité d\'absorption élevée, pour tous les nettoyages du quotidien.',leadAr:'مماسح فعّالة بقدرة امتصاص عالية لكل أعمال التنظيف اليومية.',
  slogan:'أقوى امتصاص... أطول عمر',
  products:[
   {n:'SOLO Microfibre — 2+1 gratuit',nAr:'سولو ألياف دقيقة — 2+1 مجانا',img:'solo_micro',bg:'#e2f5dc',d:'Chiffons microfibres en trois couleurs (vert, orange, violet). Extra absorbants et ultra résistants. Nouveau, 2+1 gratuit.',dAr:'مماسح من الألياف الدقيقة بثلاثة ألوان (أخضر، برتقالي، بنفسجي). فائقة الامتصاص وشديدة المقاومة. جديد، 2+1 مجانا.',facts:[['2+1 gratuit','2+1 مجانا'],['Extra absorbant','فائق الامتصاص'],['Ultra résistant','شديد المقاومة']]},
   {n:'SOLO Chiffon Viscose — 3+1 gratuit',nAr:'سولو ممسحة فيسكوز — 3+1 مجانا',img:'solo_viscose',bg:'#f7edc4',d:'Chiffon viscose en fibre de 1ère qualité, offrant efficacité et capacité d\'absorption. Qualité Germanie. 3+1 gratuit.',dAr:'ممسحة فيسكوز بألياف من الدرجة الأولى تمنح فعالية وقدرة امتصاص. جودة ألمانية. 3+1 مجانا.',facts:[['3+1 gratuit','3+1 مجانا'],['Fibre de 1ère qualité','ألياف الدرجة الأولى'],['Qualité Germanie','جودة ألمانية']]}
  ]},
 wcone:{slug:'wc-one',name:'WC ONE',c1:'#20d0c2',c2:'#08606b',accent:'#ffd400',logo:null,hero:[],placeholder:true,
  tag:'Gel WC',tagAr:'جل المراحيض',
  sub:'Le gel qui nettoie et désinfecte les toilettes rapidement.',subAr:'الجل الذي ينظّف ويعقّم المراحيض بسرعة.',
  lead:'Un gel WC aux agents nettoyants qui élimine le tartre, même incrusté, et dissout la saleté tenace. Un bloc WC est annoncé prochainement.',leadAr:'جل مراحيض بمواد منظفة يزيل الكلس حتى المتراكم ويذيب الأوساخ العنيدة. ويُعلَن قريبا عن قطعة للمراحيض.',
  slogan:'مراحيض نظيفة... في لحظات',
  products:[
   {n:'Gel WC One',nAr:'جل دبليو سي وان',bg:'#c8f4ef',d:'Nettoie et désinfecte les toilettes rapidement. Élimine le tartre même incrusté et dissout la saleté tenace.',dAr:'ينظّف ويعقّم المراحيض بسرعة. يزيل الكلس حتى المتراكم ويذيب الأوساخ العنيدة.',facts:[['Nettoie & désinfecte','ينظّف ويعقّم'],['Anti-tartre','ضد الكلس'],['Photos à venir','الصور قريبا']]},
   {n:'Bloc WC One — bientôt disponible',nAr:'قطعة دبليو سي وان — قريبا',bg:'#e5fbf8',d:'Action moussante et parfum intense, design aéré pour un meilleur contact des principes actifs avec l\'eau.',dAr:'مفعول رغوي وعطر قوي، بتصميم مهوّى لتماس أفضل للمواد الفعّالة مع الماء.',facts:[['Action moussante','مفعول رغوي'],['Parfum intense','عطر قوي'],['Bientôt','قريبا']]}
  ]}
};
const BORDER=['ultra','swif','supra','flip','solo','wcone'];
const WILAYAS=['Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem','M\'Sila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arréridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El M\'Ghair','El Meniaa'];
const WILAYAS_AR=['أدرار','الشلف','الأغواط','أم البواقي','باتنة','بجاية','بسكرة','بشار','البليدة','البويرة','تمنراست','تبسة','تلمسان','تيارت','تيزي وزو','الجزائر','الجلفة','جيجل','سطيف','سعيدة','سكيكدة','سيدي بلعباس','عنابة','قالمة','قسنطينة','المدية','مستغانم','المسيلة','معسكر','ورقلة','وهران','البيض','إليزي','برج بوعريريج','بومرداس','الطارف','تندوف','تيسمسيلت','الوادي','خنشلة','سوق أهراس','تيبازة','ميلة','عين الدفلى','النعامة','عين تموشنت','غرداية','غليزان','تيميمون','برج باجي مختار','أولاد جلال','بني عباس','عين صالح','عين قزام','تقرت','جانت','المغير','المنيعة'];
