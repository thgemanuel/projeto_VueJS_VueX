import { createStore } from "vuex";

export default createStore({
  // com esse strict mode true, fica protejida qualquer alteracao no estado fora da mutation
  strict: true,

  // é o estado no VueX, onde estao os dados, é como se fosse o data() da componente
  state: {
    // carrinho de compras
    carrinho: [],

    // dados do usuario
    usuario: {
      primeiro_nome: "Joao",
      ultimo_nome: "Silva",
      email: "joao@silva.com",
    },
  },
  getters: {},
  // dentro do mutations que o estado é alterado, ela que possui essa responsabilidade
  // na mutation sao funcoes sincronas, assim o programa so continua depois que ele finaliza uma funcao
  mutations: {
    //CARRINHO
    addProduto(state, payload) {
      // pesquisando se o id do produto ja existe no carrinho 
      const produtoJaExistente = state.carrinho.find((o) => o.id === payload.id);

      if (produtoJaExistente) {
        // se ja existir incrementa a quantidade 
        produtoJaExistente.quantidade += 1;
      } else {
        payload.quantidade = 1;
        state.carrinho.push(payload);
      }
    },

    //USUARIO
    // o state recebe o estado inteiro atual
    salvarPrimeiroNome(state, payload) {
      state.usuario.primeiro_nome = payload;
    },

    salvarUltimoNome(state, payload) {
      state.usuario.ultimo_nome = payload;
    },
  },
  // da acoes dentro de um determinado contexto, ela utiliza a mutation para alterar o estado
  // na action as funcoes sao assincronas
  actions: {
    // o context é usado em casos que se deseja puxar dados do state
    salvarPrimeiroNome(context, payload) {
      // se usa commit pelo fato de que agora vamos comitar as mudancas
      context.commit("salvarPrimeiroNome", payload);
    },
  },
  // é possivel dividir em modulos para melhor organizar
  modules: {},
});
