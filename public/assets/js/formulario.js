function calcular() {
  let respostas = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  for (let i = 1; i <= 10; i++) {
    let questao = document.querySelector(`input[name="q${i}"]:checked`);

    if (questao) {
      respostas[questao.value]++;
    }
  }

  let maior = "A";

  for (let letra in respostas) {
    if (respostas[letra] > respostas[maior]) {
      maior = letra;
    }
  }

  let resultado = "";

  switch (maior) {
    case "A":
      resultado = `
        <h2>Estilo: Pressão</h2>
          <center><img src="/API/Site/assets/midia/pressao.png"  width="300" height="400" alt="" >
</center>
        <p><b>Perfil:</b> Passador / Quedador</p>
        <p><b>Finalização:</b> Mata-leão ou Americana</p>
      `;
      break;

    case "B":
      resultado = `
        <h2>Estilo: Estratégico</h2>
        <img src="./assets/img/estrategico.jpg" class="img-resultado">
        <p><b>Perfil:</b> Defensivo Técnico</p>
        <p><b>Finalização:</b> Triângulo ou Arm-lock</p>
      `;
      break;

    case "C":
      resultado = `
        <h2>Estilo: Móvel</h2>
        <img src="./assets/img/movel.jpg" class="img-resultado">
        <p><b>Perfil:</b> Guarda / Escapador</p>
        <p><b>Finalização:</b> Triângulo ou Chave de perna</p>
      `;
      break;

    case "D":
      resultado = `
        <h2>Estilo: Finalizador</h2>
        <img src="./assets/img/finalizador.jpg" class="img-resultado">
        <p><b>Perfil:</b> Caçador de finalizações</p>
        <p><b>Finalização:</b> Guilhotina ou Mata-leão</p>
      `;
      break;
  }

  document.getElementById("resultado").innerHTML = resultado;
}