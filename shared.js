/* Dr.Trend concept studio. All content is a review draft. */
window.DT = (() => {
 const themes={
  navy:{n:'01',name:'Heritage Blue',bg:'Наследство в синьо',mood:'Спокоен, авторитетен, вечен.',colors:['#103B55','#F4F0E7','#C3B29A','#FFFFFF'],product:'carbon',label:'Heritage / Trust / Warmth'},
  sage:{n:'02',name:'Botanical Care',bg:'Естествена грижа',mood:'Свеж, земен, близък.',colors:['#244D43','#F1F3E9','#BACF87','#FFFFFF'],product:'green',label:'Nature / Balance / Care'},
  lilac:{n:'03',name:'Soft Science',bg:'Нежна прецизност',mood:'Съвременен, деликатен, отличим.',colors:['#302D51','#F4F0FA','#C7B6DD','#FFFFFF'],product:'lavender',label:'Clarity / Softness / Curiosity'},
  peach:{n:'04',name:'Everyday Joy',bg:'Радост всеки ден',mood:'Топъл, приятелски, жив.',colors:['#133B51','#FFF2E9','#F1AF91','#FFFFFF'],product:'peach',label:'Joy / Connection / Everyday'}
 };
 const products=[
 {id:'carbon',en:'Activated Carbon',bg:'Активен въглен',family:'neutral',color:'#B4B6B4'},
 {id:'green',en:'Green Tea',bg:'Зелен чай',family:'scented',color:'#B4CC7A'},
 {id:'lavender',en:'Lavender',bg:'Лавандула',family:'scented',color:'#C7B1D0'},
 {id:'natural',en:'Natural',bg:'Натурална',family:'neutral',color:'#B9D6CD'},
 {id:'peach',en:'Honey Peach',bg:'Праскова',family:'scented',color:'#EDAD91'}
 ];
 const text={
 mission:['Our mission','Мисия'],story:['Our story','История'],products:['Our products','Продукти'],where:['Where to find us','Къде да ни намерите'],
 promise:['Good care. Passed on.','Добрата грижа се предава.'],purpose:['Care begins with understanding.','Грижата започва с разбиране.'],
 intro:['Veterinary experience, a family’s values and thoughtful products for the animals we love.','Ветеринарен опит, семейни ценности и продукти с внимание към животните, които обичаме.'],
 quality:['Quality with purpose. Value that makes sense.','Качество с мисъл. Цена с основание.'],qualityBody:['We believe everyday care should bring together thoughtful quality and a reasonable price. It is the idea behind Dr.Trend.','Вярваме, че ежедневната грижа трябва да съчетава внимателно подбрано качество и разумна цена. Това е идеята зад Dr.Trend.'],
 explore:['Explore our story','Разгледай историята'],discover:['Meet the collection','Разгледай продуктите'],generations:['A family story. A shared way of caring.','Семейна история. Споделена грижа.'],
 historyBody:['The story behind Dr.Trend begins with a family’s veterinary heritage. Knowledge, respect for animals and a commitment to care connect the generations.','Зад Dr.Trend стои семейна ветеринарна история. Поколенията са свързани от знанието, уважението към животните и отдадеността на грижата.'],
 roots:['Veterinary roots','Ветеринарни корени'],rootsBody:['In 1950, the grandfather in the family qualified in veterinary medicine. A professional journey began — and the values behind it would be passed on.','През 1950 г. дядото в семейството завършва ветеринарна медицина. Започва професионален път, чиито ценности се предават нататък.'],
 continuation:['Knowledge, passed on','Предаденото знание'],continuationBody:['The next chapter carries that veterinary experience into a new generation, with the same respect for animals.','Следващата глава пренася ветеринарния опит към ново поколение, със същото уважение към животните.'],
 today:['Dr.Trend, today','Dr.Trend днес'],todayBody:['A brand inspired by that family heritage, bringing the philosophy of thoughtful care into everyday products.','Марка, вдъхновена от семейното наследство, която пренася философията на внимателната грижа в ежедневни продукти.'],
 familyDate:['1950 marks the family’s veterinary roots, not the founding of the brand.','1950 г. е част от семейната ветеринарна история, не година на основаване на бранда.'],
 collection:['Small rituals. Thoughtful choices.','Малки ритуали. Обмислен избор.'],collectionBody:['Explore the Dr.Trend Tofu cat litter collection. Five variants, one clear view.','Разгледай серията соеви котешки тоалетни Dr.Trend Tofu. Пет варианта, представени ясно.'],
 all:['All variants','Всички варианти'],scented:['Tea, lavender & peach','Чай, лавандула и праскова'],neutral:['Natural & carbon','Натурална и въглен'],details:['View product','Виж продукта'],compare:['Compare','Сравни'],comparison:['Compare variants','Сравнение на варианти'],
 selected:['Selected','Избран'],close:['Close','Затвори'],pack:['Pack size','Разфасовка'],variant:['Variant','Вариант'],type:['Product type','Тип продукт'],litter:['Tofu cat litter','Соева котешка тоалетна'],
 retailTitle:['Your next little act of care.','Следващият малък жест на грижа.'],retailBody:['Find Dr.Trend through retailers. Explore the selected examples below.','Намерете Dr.Trend при търговците. Разгледайте примерите по-долу.'],retailNote:['Illustrative retailer selection for this preview. The final partner list is to be confirmed.','Примерен подбор на търговци за демонстрацията. Окончателният списък предстои да се потвърди.'],visit:['Visit retailer','Към търговеца'],
 preview:['Design preview','Дизайн концепция'],allConcepts:['All concepts','Всички концепции'],motion:['Motion','Движение'],on:['On','Вкл.'],off:['Off','Изкл.'],
 draft:['Concept presentation · Copy and imagery subject to approval.','Дизайн концепция · Текстовете и изображенията предстоят да се одобрят.'],
 petLove:['For them, with love.','За тях, с любов.'],from:['From one generation to the next.','От поколение на поколение.'],
 kindness:['More love in the little things.','Повече обич в малките неща.'],playIntro:['Everyday care, a curious mind and a whole lot of love. That is our starting point.','Ежедневна грижа, любопитство и много обич. Оттук започва всичко.'],
 sceneLabel:['Interactive 3D cat and food bowl. Drag or use arrow keys to rotate.','Интерактивна 3D котка и купичка за храна. Завъртете с плъзгане или стрелките.'],drag:['Drag to explore','Плъзни, за да завъртиш'],feed:['A little treat','Малко лакомство'],reset:['Reset view','Начален изглед'],sceneNote:['Illustrative scene · food & everyday care','Илюстративна сцена · хранене и ежедневна грижа'],
 miniMission:['Thoughtful quality','Обмислено качество'],miniStory:['Veterinary heritage','Ветеринарно наследство'],miniProducts:['Everyday care','Ежедневна грижа'],
 productNote:['Product images and names shown for design review. Final ingredients, instructions and claims will be added from approved specifications.','Снимките и имената са показани за преглед на дизайна. Съставът, указанията и твърденията ще се добавят по одобрени спецификации.'],
 career1952:['Knowledge meets responsibility.','Знанието среща отговорността.'],career1952Body:['In 1952, the grandfather is appointed district veterinary doctor in Stara Zagora. This is the next stage of the professional path remembered in the family story.','През 1952 г. дядото е назначен за околийски ветеринарен лекар в Стара Загора. Това е следващият етап от професионалния път, запазен в семейната история.'],career1954:['Experience leaves a mark.','Опитът оставя следа.'],career1954Body:['From 1954, he works as chief veterinary doctor at the state agricultural enterprise in Plovdiv. Decades later, his grandson creates Dr.Trend in his honour.','От 1954 г. той работи като главен ветеринарен лекар на ДЗС Пловдив. Десетилетия по-късно внукът му създава Dr.Trend в негова чест.'],
 palette:['Colour direction','Цветова посока'],nextChapter:['Next chapter','Следваща глава'],previous:['Previous','Назад'],next:['Next','Напред'],
 review:['Save this direction','Запази тази посока'],saved:['Saved in your selection','Запазено в избора'],print:['Print palette','Печат на палитрата']
 };
 const query=new URLSearchParams(location.search);let lang=query.get('lang')==='bg'?'bg':'en';
 function t(key){return (text[key]||[key,key])[lang==='bg'?1:0];}
 function logo(){return '<span class="brandmark"><img src="assets/logo.webp" alt="Dr.Trend" width="200" height="200"></span>';}
 const arrow='<span aria-hidden="true">↗</span>';
 function safeStore(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch{}}
 function readStore(k,fallback){try{return JSON.parse(localStorage.getItem(k))??fallback;}catch{return fallback;}}
 function themeName(key){return lang==='bg'?themes[key].bg:themes[key].name;}
 function setTheme(key){if(!themes[key])key='navy';document.body.dataset.theme=key;document.body.style.setProperty('--ink',themes[key].colors[0]);document.body.style.setProperty('--paper',themes[key].colors[1]);document.body.style.setProperty('--accent',themes[key].colors[2]);document.dispatchEvent(new CustomEvent('dt-theme',{detail:themes[key]}));}
 function palette(key,interactive=true){return '<div class="swatches">'+themes[key].colors.map(c=>interactive?`<button class="swatch" style="--swatch:${c}" data-copy="${c}" aria-label="${c}"><i></i><span>${c}</span></button>`:`<i style="background:${c}" title="${c}"></i>`).join('')+'</div>';}
 function notice(message){let n=document.querySelector('.toast');if(!n){n=document.createElement('div');n.className='toast';n.setAttribute('role','status');document.body.append(n);}n.textContent=message;n.classList.add('visible');clearTimeout(notice.timeout);notice.timeout=setTimeout(()=>n.classList.remove('visible'),2400);}
 function saveChoice(theme,page){let selection=readStore('dt-selection',{});selection.theme=theme;if(page!=='concept')selection.site=page;safeStore('dt-selection',selection);notice(t('saved'));}
 function bindCommon(){
 document.body.classList.add('js-motion');
 document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);notice((lang==='bg'?'Копирано: ':'Copied: ')+b.dataset.copy);}catch{notice(b.dataset.copy);}}));
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{const u=new URL(location.href);u.searchParams.set('lang',b.dataset.lang);location.assign(u.href);}));
 const m=document.querySelector('[data-motion]');let reduce=readStore('dt-reduce',matchMedia('(prefers-reduced-motion: reduce)').matches);function apply(){document.body.classList.toggle('reduce-motion',reduce);if(m){m.textContent=t('motion')+': '+t(reduce?'off':'on');m.setAttribute('aria-pressed',String(!reduce));}document.dispatchEvent(new CustomEvent('dt-motion',{detail:!reduce}));}apply();m?.addEventListener('click',()=>{reduce=!reduce;safeStore('dt-reduce',reduce);apply();});
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('seen');observer.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
 document.querySelector('[data-menu]')?.addEventListener('click',e=>{const nav=document.querySelector('.navlinks');const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.navlinks').classList.remove('open');document.querySelector('[data-menu]')?.setAttribute('aria-expanded','false');}));
 }
 return {themes,products,t,logo,arrow,lang,query,setTheme,palette,themeName,notice,saveChoice,safeStore,readStore,bindCommon};
})();
