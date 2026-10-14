function toast(msg){var t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},1800)}
document.addEventListener('click',function(e){
  var el=e.target.closest('[data-track]');if(!el)return;
  var name=el.getAttribute('data-track');var props={};
  if(el.dataset.sku)props.sku=el.dataset.sku;if(el.dataset.price)props.price=Number(el.dataset.price);
  window.ptTrack(name,props);
  if(name==='add_to_cart')toast('已加入购物车：'+(el.dataset.sku||''));
});
document.addEventListener('submit',function(e){
  var f=e.target;if(!f.matches('form.news'))return;e.preventDefault();
  window.ptTrack('newsletter_submit',{});toast('订阅成功，感谢！');f.reset();
});
