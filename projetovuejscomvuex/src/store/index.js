import { createStore } from 'vuex'

export default createStore({
  // é o estado no VueX, onde estao os dados, é como se fosse o data() da componente
  state: {
    usuario: {
      primeiro_nome: 'Joao',
      ultimo_nome: 'Silva',
      email: 'joao@silva.com',
    }
  },
  getters: {
  },
  // dentro do mutations que o estado é alterado, ela que possui essa responsabilidade
  // na mutation sao funcoes sincronas, assim o programa so continua depois que ele finaliza uma funcao 
  mutations: {
    // o state recebe o estado inteiro atual
    salvarPrimeiroNome(state, payload){
      state.usuario.primeiro_nome = payload;
    }
  },
  // da acoes dentro de um determinado contexto, ela utiliza a mutation para alterar o estado
  // na action as funcoes sao assincronas
  actions: {
    // o context é usado em casos que se deseja puxar dados do state 
    salvarPrimeiroNome(context, payload){
      // se usa commit pelo fato de que agora vamos comitar as mudancas
      context.commit('salvarPrimeiroNome', payload)
    }
  },
  // é possivel dividir em modulos para melhor organizar 
  modules: {
  }
})
