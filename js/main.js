const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const b=$('#burger'),m=$('.menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
const v=$('.hero video');
if(v&&matchMedia('(prefers-reduced-motion:reduce)').matches){v.pause();v.removeAttribute('autoplay')}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}));
$$('.rv').forEach(e=>io.observe(e));
const lb=$('#lb');
if(lb){
 const gs=$$('.g'),im=lb.querySelector('img');let i=0,last;
 const show=n=>{i=(n+gs.length)%gs.length;const s=gs[i].querySelector('img');im.src=s.currentSrc||s.src;im.alt=s.alt};
 const open=n=>{last=document.activeElement;show(n);lb.hidden=false;lb.querySelector('.x').focus()};
 const close=()=>{lb.hidden=true;last&&last.focus()};
 gs.forEach((g,n)=>g.onclick=()=>open(n));
 lb.querySelector('.x').onclick=close;
 lb.querySelector('.pv').onclick=()=>show(i-1);
 lb.querySelector('.nx').onclick=()=>show(i+1);
 lb.onclick=e=>{if(e.target===lb)close()};
 addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
 let x0;lb.addEventListener('touchstart',e=>x0=e.touches[0].clientX);
 lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)show(i+(d<0?1:-1))});
}
