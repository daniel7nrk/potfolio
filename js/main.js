// typewriter role rotation
const roles = ["Computer Science Student", "Full-Stack Web Developer", "Team Leader"];
const roleEl = document.getElementById('roleText');
let ri = 0, ci = 0, deleting = false;

function typeLoop(){
  const current = roles[ri];
  if(!deleting){
    ci++;
    roleEl.textContent = current.slice(0, ci);
    if(ci === current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    ci--;
    roleEl.textContent = current.slice(0, ci);
    if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 40 : 65);
}
typeLoop();

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.12});
revealEls.forEach(el=>io.observe(el));

// mobile nav toggle (simple show/hide of links as a stacked menu)
const toggle = document.querySelector('.navtoggle');
const links = document.querySelector('.navlinks');
toggle.addEventListener('click', ()=>{
  const open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '60px';
  links.style.right = '32px';
  links.style.background = 'rgba(10,14,26,0.98)';
  links.style.border = '1px solid #232E48';
  links.style.borderRadius = '10px';
  links.style.padding = '16px 20px';
  links.style.gap = '14px';
});
