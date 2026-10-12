/* Native scrolling is preserved; transforms follow the document. */
(() => {
 if(document.body.dataset.page!=='play')return;
 const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
 const hero=document.querySelector('.living-hero'),manifesto=document.querySelector('.care-manifesto'),heading=document.querySelector('[data-word-reveal]'),eras=[...document.querySelectorAll('.era')],art=document.querySelector('.chronicle-art'),collection=document.querySelector('.collection-reveal');
 const progress=document.createElement('div');progress.className='page-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 const phrase=heading.textContent;heading.setAttribute('aria-label',phrase);heading.innerHTML=phrase.split(' ').map(word=>`<span aria-hidden="true">${word}</span>`).join(' ');const words=[...heading.children];let frame=0;
 function update(){frame=0;const reduce=document.body.classList.contains('reduce-motion'),vh=innerHeight;const hp=clamp(-hero.getBoundingClientRect().top/vh);hero.style.setProperty('--hero-scroll',reduce?0:hp);document.dispatchEvent(new CustomEvent('dt-scroll',{detail:{hero:hp}}));
  const m=manifesto.getBoundingClientRect(),mp=clamp((vh-m.top)/(vh+m.height));manifesto.style.setProperty('--photo-shift',reduce?0:(mp-.5)*140);words.forEach((w,i)=>w.classList.toggle('word-on',reduce||mp>.12+i/(words.length+1)*.5));
  let current=0;eras.forEach((e,i)=>{if(e.getBoundingClientRect().top<vh*.55)current=i;});const active=eras[current];art.querySelector('.chronicle-year').textContent=active.dataset.year;art.querySelector('[data-chapter-number]').textContent=String(current+1).padStart(2,'0');art.style.setProperty('--route-progress',(current+1)/4);document.querySelectorAll('[data-era-link]').forEach((a,i)=>{if(i===current)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current');});
  const c=collection.getBoundingClientRect(),cp=clamp((110-c.top)/Math.max(1,c.height-vh));const spread=Math.min(innerWidth*.145,205);collection.style.setProperty('--spread',(reduce?spread:85+cp*(spread-85))+'px');collection.style.setProperty('--fan-angle',(reduce?0:10-cp*9)+'deg');collection.style.setProperty('--fan-drop',(reduce?0:20-cp*16)+'px');
  document.body.style.setProperty('--reading',clamp(scrollY/Math.max(1,document.documentElement.scrollHeight-vh)));
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(update);}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);document.addEventListener('dt-motion',schedule);update();
})();
