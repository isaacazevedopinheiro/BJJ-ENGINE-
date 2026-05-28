let estilos = '';

function calcular() {

  // let formularioPreenchido = true;
  // for (let i = 1; i <= 10; i++) {
  //   let checarQuestao = document.querySelector(`input[name="q${i}"]:checked`);
  //   if (!checarQuestao) {
  //     alert(`respondw à pergunta número ${i} antes de ver o resultado!`);
  //     formularioPreenchido = false;
  //     break; 
  //   }
  // }

  // if (!formularioPreenchido) {
  //   return;
  // }

  
  // 0=a, 1=b, 2=c, 3=d 
  let respostas = [0, 0, 0, 0];
 let letras = ["A", "B", "C", "D"];

  for (let i = 1; i <= 10; i++) {

    let questao = document.querySelector(`input[name="q${i}"]:checked`);

    if (questao) {
      let letraSelecionada = questao.value.toUpperCase();
      
 // converte o valor do inpt pro indice do vetor
      if (letraSelecionada === "A" || letraSelecionada === "0") respostas[0]++;
      else if (letraSelecionada === "B" || letraSelecionada === "1") respostas[1]++;
      else if (letraSelecionada === "C" || letraSelecionada === "2") respostas[2]++;
      else if (letraSelecionada === "D" || letraSelecionada === "3") respostas[3]++;
    }
  }


  let maiorIndice = 0;


  for (let i = 1; i < respostas.length; i++) {
    // se o valor na posição atual for maior do que o maior até agora 
    if (respostas[i] > respostas[maiorIndice]) {
    
      maiorIndice = i;
    }
  }


 
  let maior = letras[maiorIndice];

  let resultado = "";

  if (maior === "A") {
    estilos = 'Pressão';
    resultado = `
      <h2>Estilo: Pressão</h2>
      <center><img src="./assets/midia/pressao.png"  width="300" height="400" alt="" ></center>
      <p><b>Perfil:</b> Passador / Quedador</p>
      <p><b>Finalização:</b> Mata-leão ou Americana</p>
    `;
  } else if (maior === "B") {
    estilos = 'Estratégico';
    resultado = `
      <h2>Estilo: Estratégico</h2>
      <center><img src="./assets/midia/estrategico.png" width="300" height="400" alt=""></center>
      <p><b>Perfil:</b> Defensivo Técnico</p>
      <p><b>Finalização:</b> Triângulo ou Arm-lock</p>
    `;
  } else if (maior === "C") {
    estilos = 'Flexivel';
    resultado = `
      <h2>Estilo: Flexivel</h2>
      <center><img src="./assets/midia/flexivel.png" width="300" height="400"></center>
      <p><b>Perfil:</b> Guarda / Escapador</p>
      <p><b>Finalização:</b> Triângulo ou Chave de perna</p>
    `;
  } else {  
    estilos = 'Finalizador';
    resultado = `
      <h2>Estilo: Finalizador</h2>
      <center><img src="./assets/midia/finalizador.png" width="300" height="400"></center>
      <p><b>Perfil:</b> Caçador de finalizações</p>
      <p><b>Finalização:</b> Guilhotina ou Mata-leão</p>
    `;
  }

  document.getElementById("resultado").innerHTML = resultado;

  
  cadastrar();
}

function cadastrar() {
  let perfil = estilos;
  let id_usuario = sessionStorage.ID_USUARIO;


  if (perfil == "" || id_usuario == "" || id_usuario == undefined) {
    alert('ErroNOS USERS: Faça login novamente antes de enviar o formulário.');
    return false;
  } 

  // Enviando na rota e banco
  fetch("/formulario/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fkUsuarioServer: id_usuario,
      respostaServer: perfil
    }),
  })
  .then(function (resposta) {
    console.log("resposta: ", resposta);

    if (resposta.ok) {
      console.log("estilo registrado na dashboard");
    
    
    // ANTES DE VAZAR!!! guarda o ULTIMO estilo
    sessionStorage.ESTILO_ATUAL = perfil;

    setTimeout(function () {
        window.location = "dashboard/cards.html";
    }, 3000);

  } else {
      throw "houve um erro ao tentar realizar o cadastro";
    }
  })
  .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}