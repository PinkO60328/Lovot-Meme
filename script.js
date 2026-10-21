const live = /^0x[0-9a-fA-F]{40}$/.test(CA) && BUY_LINK !== "#";
document.querySelectorAll('.js-ca').forEach(e=>e.textContent=CA);
document.querySelectorAll('.js-chain').forEach(e=>e.textContent=CHAIN);
document.querySelectorAll('.js-x').forEach(a=>a.href=X_LINK);
document.querySelectorAll('.js-buy').forEach(a=>{
  if(live){a.href=BUY_LINK;a.target="_blank";a.rel="noopener";a.textContent="Buy "+SYMBOL;}
  else{a.href="#";a.classList.add('disabled');a.setAttribute('aria-disabled','true');a.textContent="Buy "+SYMBOL+" · Coming Soon";a.onclick=e=>e.preventDefault();}
});
document.getElementById('copy').onclick=()=>{navigator.clipboard.writeText(CA);const b=document.getElementById('copy');b.textContent='Copied! ♡';setTimeout(()=>b.textContent='Copy',1500)};
