function calcular() {
  /*posições zeradas pRU placar */
  /*           0=a, 1=b, 2=c, 3=d */
  let respostas = [0, 0, 0, 0];

  for (let i = 1; i <= 10; i++) {
    /* busca input mArcado na pergunta  */
    let questao = document.querySelector(`input[name="q${i}"]:checked`);

    if (questao) {
      let indice = questao.value;
      
      /* adiciona um ponto na posição certa do vetor */
      respostas[indice]++;
    }
  }

  /* posição 0 do vetor é a maior nko começo */
  let maiorIndice = 0;

  /* usando o loop for para percorrer o nosso vetor do placar */
  for (let i = 1; i < respostas.length; i++) {
    /* se o valor na posição atual for maior do que o maior até agora */
    if (respostas[i] > respostas[maiorIndice]) {
      /* atualiza o índice campeão */
      maiorIndice = i;
    }
  }

  /*  outro vetor pq agora: número --> letra */
  let letras = ["A", "B", "C", "D"];
  let maior = letras[maiorIndice];

  let resultado = "";

 if (maior === "A") {
    resultado = `
      <h2>Estilo: Pressão</h2>
        <center><img src="./assets/midia/pressao.png"  width="300" height="400" alt="" ></center>
      <p><b>Perfil:</b> Passador / Quedador</p>
      <p><b>Finalização:</b> Mata-leão ou Americana</p>
    `;
  } else if (maior === "B") {
    resultado = `
      <h2>Estilo: Estratégico</h2>
     <center>
      <img src="./assets/midia/estrategico.png" width="300" height="400" alt="">
      </center>
      <p><b>Perfil:</b> Defensivo Técnico</p>
      <p><b>Finalização:</b> Triângulo ou Arm-lock</p>
    `;
  } else if (maior === "C") {
    resultado = `
      <h2>Estilo: Móvel</h2>
      <img src="./assets/img/movel.jpg" class="img-resultado">
      <p><b>Perfil:</b> Guarda / Escapador</p>
      <p><b>Finalização:</b> Triângulo ou Chave de perna</p>
    `;
  } else {
    resultado = `
      <h2>Estilo: Finalizador</h2>
      <img src="./assets/img/finalizador.jpg" class="img-resultado">
      <p><b>Perfil:</b> Caçador de finalizações</p>
      <p><b>Finalização:</b> Guilhotina ou Mata-leão</p>
    `;
  }

  document.getElementById("resultado").innerHTML = resultado;
}