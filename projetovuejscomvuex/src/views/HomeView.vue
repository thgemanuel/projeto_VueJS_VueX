<template>
  <div class="home">
    <!-- obtendo dado direto do VueX -->
    {{ $store.state.usuario.primeiro_nome}} <br>
    <label for="">Primeiro nome</label> <br>
    <input type="text" v-model="meuNome">
    <button @click.prevent.stop="salvarNome">Salvar</button>
    
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return {
      meuNome: "",
    }
  },
  methods: {
    salvarNome(){
      // para acessar as actions dentro do vuex utiliza o metodo dispatch
      // this.$store.dispatch('salvarPrimeiroNome', this.meuNome);

      // para alguns casos nao é nescessario chamar o action para depois chamar o muttation
      // para acessar os mutations dentro do vuex utiliza o metodo commit
      // this.$store.commit('salvarPrimeiroNome', this.meuNome);

    }
  }
}
</script>
