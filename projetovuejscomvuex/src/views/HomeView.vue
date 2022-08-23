<template>
  <div class="container mt-10">
    <!-- exemplo de carrinho de compras -->
    <div class="row">
      <div v-for="produto in this.produtos" :key="produto.id" class="col">
        <div class="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>

          <div class="card-body">
            <p class="card-text">{{ produto.titulo }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  @click="addAoCarrinho(produto)"
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Adicionar
                </button>
              </div>
              <small v-if="!!mostraQuantidade(produto.id)" class="text-muted">
                {{ mostraQuantidade(produto.id) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <pre>
      {{ $store.state.carrinho }}
    </pre>
    <br /><br /><br /><br />

    <!-- obtendo dado direto do VueX -->
    {{ $store.state.usuario.primeiro_nome }}
    {{ $store.state.usuario.ultimo_nome }}<br />

    <label for="">Primeiro nome</label> <br />
    <input class="form-control" type="text" v-model="primeiroNome" /> <br />

    <label for="">Ultimo nome</label> <br />
    <input class="form-control" type="text" v-model="ultimoNome" /> <br />

    <button class="btn btn-primary" @click.prevent.stop="salvarNome">
      Salvar
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      meuNome: "",

      produtos: [
        {
          id: 1,
          titulo: "Produto 1",
        },
        {
          id: 2,
          titulo: "Produto 2",
        },
        {
          id: 3,
          titulo: "Produto 3",
        },
      ],
    };
  },
  // a computed é um getter
  computed: {
    // assim, cria um objeto para que alem de getter ele tbm possa ser um setter
    // fazendo com q a mutation seja um getter e setter, fazendo com que um formulario mapeie dados direto do vuex
    primeiroNome: {
      get() {
        return this.$store.state.usuario.primeiro_nome;
      },
      set(value) {
        this.$store.commit("salvarPrimeiroNome", value);
      },
    },

    ultimoNome: {
      get() {
        return this.$store.state.usuario.ultimo_nome;
      },
      set(value) {
        this.$store.commit("salvarUltimoNome", value);
      },
    },
  },
  methods: {
    salvarNome() {
      // para acessar as actions dentro do vuex utiliza o metodo dispatch
      // this.$store.dispatch('salvarPrimeiroNome', this.meuNome);
      // para alguns casos nao é nescessario chamar o action para depois chamar o muttation
      // para acessar os mutations dentro do vuex utiliza o metodo commit
      // this.$store.commit('salvarPrimeiroNome', this.meuNome);
    },

    addAoCarrinho(produto){ 
      this.$store.commit('addProduto', produto);
    },

    mostraQuantidade(id){
      return this.$store.state.carrinho.find(o => o.id === id)?.quantidade || 0;
    }
  },
};
</script>
