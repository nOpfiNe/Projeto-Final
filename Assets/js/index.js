function botaoTopoAparecer(){
    const botaotopo = document.querySelector(".voltar-topo");
  
  
    if (window.scrollY >= 560) {
      botaotopo.classList.add("show");
    } else {
      botaotopo.classList.remove("show");
    }
  
  
  }
  
  const secoes = document.querySelectorAll('section[id]')
  function menuAtivoSecaoAtual(){
  
  }
  
  
  window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    botaoTopoAparecer()
  })