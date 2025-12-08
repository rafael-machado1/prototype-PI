import dados from './banco.json' with { type: "json"}

type tipoDeDepartamento = 'RH' | 'TI' | 'Financeiro' // O type funciona como uma forma de lista para validar o departamento do usuário
type tipoDePermissao = 'admin' | 'user' | 'guest'

interface Icolaborador {
  nome: string
  id: string
  departamento: tipoDeDepartamento 
  permissao: tipoDePermissao
}

class funcionario implements Icolaborador{ // Maneira de armazenar informações do usuário
  nome: string
  id: string
  departamento: tipoDeDepartamento // Definindo o tipo do atributo como as possibilidades existentes
  permissao: tipoDePermissao

  constructor(nome: string, id: string,departamento: tipoDeDepartamento, permissao: tipoDePermissao){
    this.nome = nome
    this.id = id
    this.departamento = departamento
    this.permissao = permissao
  }

  login(): void {
    // Verifica se os dados da instância estão presentes no banco.json
    const encontrarUser = dados.find( user => 
      user.nome === this.nome && 
      user.id === this.id
    )
    if(encontrarUser){
      console.log(`[LOGIN] Usuário encontrado: ${this.nome}, ${this.id}.`)
    } else {
      console.log(`[ERRO] Usuário não encontrado, verifique suas credenciais e tente novamente.`)
    }
    
  }
}


// --- = Instâncias = --- \\

// const funcionario1 = new funcionario("Rafael", "16485834", 'RH', 'admin')
// funcionario1.login() [DEU CERTO]

const funcionario2 = new funcionario("teste", "teste", 'RH', 'user')
funcionario2.login()

// --- = = --- \\