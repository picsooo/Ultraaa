const GROUP={name:'BIOPACK Industries',since:1995,addr:'Domaine Ouadah 08 Bis, Birkhadem 16029, Alger',factory:'Zone industrielle Khemis El Khachna, Boumerdès',phone:'0555 55 99 74',tel:'tel:0555559974',fb:'https://www.facebook.com/biopackindustrie/',map:'https://www.google.com/maps/search/?api=1&query=Domaine+Ouadah+Birkhadem+Alger'};
const BRANDS={
 ultra:{slug:'ultra',name:'Ultra Exel',c1:'#4f8dff',c2:'#0b2bd0',live:true,imgs:['ultra/img/blue.webp','ultra/img/orange.webp','ultra/img/bicarb.webp'],
  tag:'Vaisselle · Bicarbonate · Acide citrique',tagAr:'أواني · بيكربونات · حمض الستريك',
  sub:'Dégraissants vaisselle, bicarbonate toute usage et acide citrique.',subAr:'مزيلات دهون للأواني، بيكربونات لكل استعمال وحمض الستريك.'},
 swif:{slug:'swif',name:'SWIF',c1:'#19c9b7',c2:'#075e7a',liq:'#7fe3d4',
  tag:'Sols & surfaces',tagAr:'أرضيات وأسطح',sub:'Nettoyant sols et surfaces lavables, en 5 parfums.',subAr:'منظّف الأرضيات والأسطح القابلة للغسل، بخمسة عطور.',
  lead:'Le nettoyant sols et surfaces de BIOPACK : pour l\'entretien quotidien de tous les types de sols et de toutes les surfaces lavables.',leadAr:'منظّف الأرضيات والأسطح من بيوباك: للعناية اليومية بجميع أنواع الأرضيات وكل الأسطح القابلة للغسل.',
  products:[{n:'Lave sol & surfaces SWIF',nAr:'منظّف الأرضيات والأسطح سويف',d:'Détergent développé pour nettoyer tous les types de sols (carrelage, thermoplastique, grès…) et les surfaces lavables. Séchage rapide, rémanence de 6 à 8 heures.',dAr:'منظّف مخصص لجميع أنواع الأرضيات (بلاط، ثيرموبلاستيك، غرانيت…) والأسطح القابلة للغسل. جفاف سريع وثبات الرائحة من 6 إلى 8 ساعات.',
   scents:[['Lavande','لافندر','#b9a3ea'],['Pin','صنوبر','#79bf7a'],['Océan','محيط','#4fb0ea'],['Rose','ورد','#f3a0b8'],['Jasmin','ياسمين','#f7f1c6']]}]},
 supra:{slug:'supra',name:'SUPRA',c1:'#8a5cff',c2:'#24106b',liq:'#c9b5ff',
  tag:'Polish · Anticalcaire · Dégraissant',tagAr:'بوليش · مزيل كلس · مزيل دهون',sub:'La gamme d\'entretien spécialisée : lustrer, détartrer, dégraisser, déboucher.',subAr:'تشكيلة عناية متخصصة: تلميع، إزالة الكلس، إزالة الدهون، فتح المجاري.',
  lead:'Des solutions ciblées pour les tâches difficiles de la maison : poussière, calcaire, graisses brûlées et canalisations.',leadAr:'حلول موجّهة لأصعب مهام البيت: الغبار، الكلس، الدهون المحروقة والمجاري.',
  products:[{n:'Supra Polish',nAr:'سوبرا بوليش',d:'Dépoussiérant, revitalisant et lustrant, à base de cire d\'abeilles et d\'huiles essentielles.',dAr:'مزيل للغبار ومجدّد ومُلمّع، بتركيبة من شمع النحل والزيوت الأساسية.'},
   {n:'Supra Anticalcaire',nAr:'سوبرا مزيل الكلس',d:'Élimine sans effort le dépôt calcaire sur robinetterie, lavabos, éviers, baignoires et douches.',dAr:'يزيل بسهولة ترسبات الكلس عن الحنفيات والمغاسل والأحواض والحمّامات والدوشات.'},
   {n:'Supra Dégraissant',nAr:'سوبرا مزيل الدهون',d:'Solution pour décrasser les graisses brûlées et les graisses collées.',dAr:'حل لإزالة الدهون المحروقة والملتصقة.'},
   {n:'Supra Déboucheur',nAr:'سوبرا فاتح المجاري',d:'Déboucheur pour canalisations (fiche détaillée à compléter).',dAr:'فاتح مجاري للقنوات (الفيش المفصّل قيد الإعداد).'}]},
 flip:{slug:'flip',name:'FLIP',c1:'#ff5aa5',c2:'#7b0f57',liq:'#ffc2de',
  tag:'Lessive liquide',tagAr:'سائل غسيل الملابس',sub:'La lessive liquide parfumée pour un linge propre lavage après lavage.',subAr:'سائل غسيل معطّر لملابس نظيفة غسلة بعد غسلة.',
  lead:'Une formule de lessive performante qui lutte contre les taches et parfume durablement le linge.',leadAr:'تركيبة غسيل فعّالة تحارب البقع وتعطّر الملابس.',
  products:[{n:'FLIP Lessive',nAr:'فليب سائل الغسيل',d:'Lessive liquide : formule ultra performante contre les taches les plus dures, pour une propreté éclatante lavage après lavage.',dAr:'سائل غسيل بتركيبة فعّالة جدا ضد أصعب البقع، لنظافة ناصعة غسلة بعد غسلة.'}]},
 wcone:{slug:'wc-one',name:'WC ONE',c1:'#20d08a',c2:'#065640',liq:'#a5f1cf',
  tag:'Gel WC',tagAr:'جل المراحيض',sub:'Le gel qui nettoie et désinfecte les toilettes rapidement.',subAr:'الجل الذي ينظّف ويعقّم المراحيض بسرعة.',
  lead:'Un gel WC pour nettoyer et désinfecter vos toilettes rapidement.',leadAr:'جل مراحيض لتنظيف وتعقيم المراحيض بسرعة.',
  products:[{n:'Gel WC One',nAr:'جل دبليو سي وان',d:'Nettoie et désinfecte les toilettes rapidement.',dAr:'ينظّف ويعقّم المراحيض بسرعة.'}]}
};
const BORDER=['ultra','swif','supra','flip','wcone'];
const WILAYAS=['Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem','M\'Sila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arréridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El M\'Ghair','El Meniaa'];
const WILAYAS_AR=['أدرار','الشلف','الأغواط','أم البواقي','باتنة','بجاية','بسكرة','بشار','البليدة','البويرة','تمنراست','تبسة','تلمسان','تيارت','تيزي وزو','الجزائر','الجلفة','جيجل','سطيف','سعيدة','سكيكدة','سيدي بلعباس','عنابة','قالمة','قسنطينة','المدية','مستغانم','المسيلة','معسكر','ورقلة','وهران','البيض','إليزي','برج بوعريريج','بومرداس','الطارف','تندوف','تيسمسيلت','الوادي','خنشلة','سوق أهراس','تيبازة','ميلة','عين الدفلى','النعامة','عين تموشنت','غرداية','غليزان','تيميمون','برج باجي مختار','أولاد جلال','بني عباس','عين صالح','عين قزام','تقرت','جانت','المغير','المنيعة'];
