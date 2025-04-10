function abrirDetalhes(filme) {
    if (filme === 'auto') {
      window.location.href = "pages/detalhes-auto.html";
    } else if (filme === 'capitao') {
      window.location.href = "pages/detalhes-capitao.html";
    } else if (filme === 'flow') {
      window.location.href = "pages/detalhes-flow.html";
    }
  }
  