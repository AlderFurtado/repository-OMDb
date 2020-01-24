<template>
  <div class="container">
    <h1>Welcome to Delta Movie</h1>
    <h2>OpenSource Movie Database</h2>
    <div>
    <input type="name" v-on:keyup.enter="getMovies()" name="search-film" id="search-film" placeholder="Procure seu filme" v-model="searchMovie"/>
    <button @click="getMovies()">Pesquisar</button>
    </div>
    <div class="typeahead"></div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      searchMovie: ''
    }
  },

  methods: {
    getMovies () {
      console.log(this.searchMovie)
      this.$store.dispatch('getMovies', this.searchMovie)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    margin-top: 10%;
    margin-bottom: 0%;
    font-size: 30pt;
    font-weight: 300;
  }

  h2 {
    color: white;
    margin-top: 10px;
    margin-bottom: 2em;
    font-weight: 300;
  }

  div{
    display: flex;
    width: 80%;
  }

  input {
    flex: 0.9;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px 2%;
    font-size: 16pt;
    font-family: "Ubuntu", sans-serif;
    outline: none;
    border:none;
  }

  button {
    flex:0.1;
    font-size: 12pt;
    padding: 10px;
    outline: none;
    background-color: #8C915C;
    border:none;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }

  .typeaheard{
    height: 24px;
    background-color: azure;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  button:active {
    background-color: rgb(105, 109, 69);
  }
}
</style>
