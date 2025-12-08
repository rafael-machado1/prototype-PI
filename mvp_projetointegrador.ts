/*Neste exercício você irá realizar usando typescript um MVP do Projeto integrador. Você deve criar de maneira bastante 
simplificada uma avaliação de desempenho.
O usuário deverá receber as perguntas no console e responder de maneira objetiva de acordo com uma escala definida por você. 
Ao final, com base nas respostas do usuário, você irá classificar em que quadrante do nine box ele se encontra.
*/

import PromptSync from "prompt-sync"; // Biblioteca utilizada para fazer as perguntas [ No código oficial, essa pergunta não vai ser feita no terminal (provavelmente) ]
const prompt = PromptSync();


type tipoDeDepartamento = 'RH' | 'TI' | 'Financeiro' // O type funciona como uma forma de lista para validar o departamento do usuário
type tipoDePermissao = 'admin' | 'usuario'

interface Icolaborador {
    nome: string
    cpf: number
    departamento: tipoDeDepartamento 
    permissao: tipoDePermissao
}

interface IQuestao {
    pergunta: string;
    peso: number;
}


class funcionario implements Icolaborador{ // Maneira de armazenar informações do usuário
  nome: string
  cpf: number
  departamento: tipoDeDepartamento // Definindo o tipo do atributo como as possibilidades existentes
  permissao: tipoDePermissao

  constructor(nome: string, cpf: number, departamento: tipoDeDepartamento, permissao: tipoDePermissao){
    this.nome = nome
    this.cpf = cpf
    this.departamento = departamento
    this.permissao = permissao
  }
}


const questoesDesempenho: IQuestao[] = [
    { pergunta: 'Aceita a responsabilidade pela qualidade do serviço? (1-5)', peso: 1 },
    { pergunta: 'Sabe equilibrar a qualidade das entregas com os prazos estabelecidos? (1-5)', peso: 1 },
    { pergunta: 'Compartilha novas maneiras de fazer as tarefas, incluindo novas abordagens e métodos? (1-5)', peso: 1 },
    { pergunta: 'Reconhece e gerencia desafios, apoiando o time no que for necessário? (1-5)', peso: 1 },
    { pergunta: 'A pessoa demonstra fit cultural com a empresa? (1-5)', peso: 2 },
    { pergunta: 'Possui valores que são semelhantes aos da organização? (1-5)', peso: 2 },
    { pergunta: 'O colaborador sabe se adaptar às mudanças que acontecem na organização? (1-5)', peso: 2 }
];

const questoesPotencial: IQuestao[] = [
    { pergunta: 'Aceita a responsabilidade pela qualidade do serviço? (1-5)', peso: 1 },
    { pergunta: 'Sabe equilibrar a qualidade das entregas com os prazos estabelecidos? (1-5)', peso: 1 },
    { pergunta: 'Compartilha novas maneiras de fazer as tarefas, incluindo novas abordagens e métodos? (1-5)', peso: 1 },
    { pergunta: 'Reconhece e gerencia desafios, apoiando o time no que for necessário? (1-5)', peso: 1 },
    { pergunta: 'A pessoa demonstra fit cultural com a empresa? (1-5)', peso: 2 },
    { pergunta: 'Possui valores que são semelhantes aos da organização? (1-5)', peso: 2 },
    { pergunta: 'O colaborador sabe se adaptar às mudanças que acontecem na organização? (1-5)', peso: 2 }];

let respostas: number[] = [];
let indiceQuestao = 0;

const fazerPergunta = () => {
    if (indiceQuestao < questoes.length) {
        prompt((questoes[indiceQuestao].pergunta + ' ', (resposta: string)) => {
            const respostaNum = parseInt(resposta);
            if (respostaNum >= 1 && respostaNum <= 5) {
                respostas.push(respostaNum);
                indiceQuestao++;
                fazerPergunta();
            } else {
                console.log('Por favor, responda com um número entre 1 e 5.');
                fazerPergunta();
            }
        });
    } else {
        rl.close();
        avaliarDesempenho();
    }
};


