/*

-- Objetivo do programa --

Questões de 1 - 10, guardo as notas, a partir disso eu somo as notas e faço a média,
Após isso passo pra uma função que retorna a posição do candidato no nine box de forma visual:

|============|============|============|
|            |            |            |
|            |            |            |
|============|============|============|
|            |            |            |
|            |            |            |
|============|============|============|
|            |            |            |
|            |            |            |
|============|============|============|

Perguntas de avaliação de desempenho

    • O colaborador atinge as metas e objetivos estabelecidos?
    • O desempenho é consistente e está acima das expectativas?
    • Ele entrega o trabalho com qualidade e no prazo?
    • O profissional demonstra organização e iniciativa em suas tarefas?
    • Ele lida bem com os desafios e situações inesperadas? 

    Perguntas de avaliação de potencial

    • O colaborador demonstra disposição para aprender e crescer?
    • Ele busca ativamente oportunidades de desenvolvimento profissional?
    • Ele se mostra motivado e engajado com a missão da equipe e da empresa?
    • Ele é receptivo a feedback e os aplica em seu trabalho?
    • Demonstra potencial de liderança, como aptidão ou desejo de assumir posições de liderança?

*/
import PromptSync from "prompt-sync"; // Biblioteca utilizada para fazer as perguntas [ No código oficial, essa pergunta não vai ser feita no terminal (provavelmente) ]
const prompt = PromptSync();


type tipoDeDepartamento = 'RH' | 'TI' | 'Financeiro' // O type funciona como uma forma de lista para validar o departamento do usuário

class funcionario { // Maneira de armazenar informações do usuário
  nome: string
  cpf: number
  departamento: tipoDeDepartamento // Definindo o tipo do atributo como as possibilidades existentes

  constructor(nome: string, cpf: number, departamento: tipoDeDepartamento){
    this.nome = nome
    this.cpf = cpf
    this.departamento = departamento
  }
}

// =========- Instâncias -========= \\

const funcionario1 = new funcionario("Rafael", 12389018927, 'RH') // Funcionário teste

// =========- Funções -========= \\

function perguntasDesempenho(user: funcionario) {
  console.log(`[LOGIN] Você agora está logado como ${user.nome} de CPF ${user.cpf}`)
  const questao1 = parseInt(prompt(`O colaborador atinge as metas e objetivos estabelecidos? (0-10): `)) // Exemplo de questão
  const questao2 = parseInt(prompt(`O desempenho é consistente e está acima das expectativas? (0-10): `)) // Exemplo de questão
  const questao3 = parseInt(prompt(`Ele entrega o trabalho com qualidade e no prazo? (0-10): `)) // Exemplo de questão
  const questao4 = parseInt(prompt(`O profissional demonstra organização e iniciativa em suas tarefas? (0-10): `)) // Exemplo de questão
  const questao5 = parseInt(prompt(`Ele lida bem com os desafios e situações inesperadas? (0-10): `)) // Exemplo de questão

  const mediaDesempenho: number = (questao1 + questao2 + questao3 + questao4 + questao5) / 5

  return (mediaDesempenho);
}

perguntasDesempenho(funcionario1)

function perguntasPotencial(user: funcionario){
  const questao6 = parseInt(prompt(`O colaborador demonstra disposição para aprender e crescer? (0-10): `)) // Exemplo de questão
  const questao7 = parseInt(prompt(`Ele busca ativamente oportunidades de desenvolvimento profissional? (0-10): `)) // Exemplo de questão
  const questao8 = parseInt(prompt(`Ele se mostra motivado e engajado com a missão da equipe e da empresa? (0-10): `)) // Exemplo de questão
  const questao9 = parseInt(prompt(`Ele é receptivo a feedback e os aplica em seu trabalho? (0-10): `)) // Exemplo de questão
  const questao10 = parseInt(prompt(`Demonstra potencial de liderança, como aptidão ou desejo de assumir posições de liderança? (0-10): `)) // Exemplo de questão

  const mediaPotencial = (questao6 + questao7 + questao8 + questao9 + questao10) / 5

  return (mediaPotencial)
}

perguntasPotencial(funcionario1)


function validacaoNotas(nota: number){
  if (nota <= 6){
    console.log("\n [RESULTADO] Nota abaixo do esperado")    
  } else if (nota > 6 && nota <= 8) {
    console.log("\n [RESULTADO] Nota acima do esperado, parabéns!")
  } else if (nota > 8 && nota <= 10) {
    console.log("\n [RESULTADO] Nota extremamente acima do esperado, parabéns!")
  }
}

function nineBox(desempenho: number, potencial: number){
  if (desempenho <= 6){
    console.log(`
    |============|============|============|
    |            |            |            |
    |            |            |            |
    |============|============|============|
    |            |            |            |
    |            |            |            |
    |============|============|============|
    | Sua posição|            |            |
    |  é aqui    |            |            |
    |============|============|============|
    `)
  } else if (desempenho > 6 && desempenho <= 8){
    console.log(`
      |============|============|============|
      |            |            |            |
      |            |            |            |
      |============|============|============|
      |            | Sua posição|            |
      |            |  é aqui    |            |
      |============|============|============|
      |            |            |            |
      |            |            |            |
      |============|============|============|
    `)
  } else {
    console.log(`
      |============|============|============|
      |            |            | Sua posição|
      |            |            |  é aqui    |
      |============|============|============|
      |            |            |            |
      |            |            |            |
      |============|============|============|
      |            |            |            |
      |            |            |            |
      |============|============|============|
    `)
  }
}

// =========- Teste das funções -========= \\

const desempenho = perguntasDesempenho(funcionario1)
const potencial = perguntasPotencial(funcionario1)


/*

  Para cálculo de desempenho x potencial

      /============|============|============\ Alto
      |            |            | Sua posição| Potencial
      |            |            |  é aqui    |
      |============|============|============|
      |            |            |            | Médio 
      |            |            |            | Potencial
      |============|============|============|
      |            |            |            | Baixo
      |            |            |            | Potencial
      \============|============|============/
        Baixo         Médio         Alto
        Desempenho    Desempenho    Desempenho

*/