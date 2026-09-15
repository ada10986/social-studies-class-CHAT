const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate([
        {opacity:0, transform:'translateY(18px)'},
        {opacity:1, transform:'translateY(0)'}
      ],{duration:520,easing:'ease-out',fill:'both'});
      observer.unobserve(entry.target);
    }
  })
},{threshold:.08});
document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));

document.querySelectorAll('.resource-filters').forEach(group=>{
  const buttons=[...group.querySelectorAll('.filter-btn')];
  const section=group.closest('.content-block') || document;
  const cards=[...section.querySelectorAll('.resource-card')];
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display=(f==='all'||card.dataset.type===f)?'flex':'none';
    });
  }));
});
