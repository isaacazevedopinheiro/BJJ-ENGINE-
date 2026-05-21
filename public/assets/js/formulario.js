 let estilos = ''

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
  estilos='Pressão';

    resultado = `
      <h2>Estilo: Pressão</h2>
        <center><img src="./assets/midia/pressao.png"  width="300" height="400" alt="" ></center>
      <p><b>Perfil:</b> Passador / Quedador</p>
      <p><b>Finalização:</b> Mata-leão ou Americana</p>
    `;
  } else if (maior === "B") {
    estilos= 'Estratégico';
    resultado = `
      <h2>Estilo: Estratégico</h2>
     <center>
      <img src="./assets/midia/estrategico.png" width="300" height="400" alt="">
      </center>
      <p><b>Perfil:</b> Defensivo Técnico</p>
      <p><b>Finalização:</b> Triângulo ou Arm-lock</p>
    `;
  } else if (maior === "C") {
    estilos = 'Flexivel';
    resultado = `
      <h2>Estilo: Flexivel</h2>
      <img src="./assets/img/movel.jpg" class="img-resultado">
      <p><b>Perfil:</b> Guarda / Escapador</p>
      <p><b>Finalização:</b> Triângulo ou Chave de perna</p>
    `;
  } else {  
    estilos = 'Finalizador';
    resultado = `
      <h2>Estilo: Finalizador</h2>
      <img src="./assets/img/finalizador.jpg" class="img-resultado">
      <p><b>Perfil:</b> Caçador de finalizações</p>
      <p><b>Finalização:</b> Guilhotina ou Mata-leão</p>
    `;
  }

  document.getElementById("resultado").innerHTML = resultado;

   cadastrar()
}

 function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    let perfil = estilos;
    let id_usuario = sessionStorage.ID_USUARIO;


    // Verificando se há algum campo em branco
    if (
      perfil == "" ||
      id_usuario == ""
    ) 
    {
   alert('(Mensagem de erro para todos os campos em branco)')
   
    } 


    // Enviando o valor da nova input
    fetch("/formulario/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        fkUsuarioServer: id_usuario,
        respostaServer: perfil
       
      }),
      
      
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

      });

    return false;
  }