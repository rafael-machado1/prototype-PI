/*

-- Objetivo do programa --

Questões de 1 - 5, guardo as notas, a partir disso eu somo as notas e faço a média,
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

function perguntas(user: funcionario) {
  console.log(`[LOGIN] Você agora está logado como ${user.nome} de CPF ${user.cpf}`)
  const questao1 = parseInt(prompt(`Quão boa é sua relação com os outros colaboradores na empresa, ${user.nome}? (1-10): `)) // Exemplo de questão
  const questao2 = parseInt(prompt(`Quão boa é sua relação com os avaliadores na empresa, ${user.nome}? (1-10): `)) // Exemplo de questão
  const questao3 = parseInt(prompt(`Quão boa é a infraestrutura da empresa, ${user.nome}? (1-10): `)) // Exemplo de questão
  const questao4 = parseInt(prompt(`Quão boa é sua relação com os diretores na empresa, ${user.nome}? (1-10): `)) // Exemplo de questão
  const questao5 = parseInt(prompt(`Quão bom é o fluxo em relação com os outros colaboradores na empresa, ${user.nome}? (1-10): `)) // Exemplo de questão
  const media = (questao1 + questao2 + questao3 + questao4 + questao5) / 5
  return Number(media);
}

function notas(nota: typeof notaDoFuncionario){
  if (nota <= 6){
    console.log("\n [RESULTADO] Nota abaixo do esperado")    
  } else if (nota > 6 && nota <= 8) {
    console.log("\n [RESULTADO] Nota acima do esperado, parabéns!")
  } else if (nota > 8 && nota <= 10) {
    console.log("\n [RESULTADO] Nota extremamente acima do esperado, parabéns!")
  }
}

function nineBox(desempenho: typeof notaDoFuncionario){
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

const notaDoFuncionario = perguntas(funcionario1)
notas(notaDoFuncionario)
nineBox(notaDoFuncionario)