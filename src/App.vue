<template>
  <div id="app">
    <Search/>
    <MoviesList/>
    <Loading v-if="isLoadingSearchMovie"/>
    <MovieDetails v-if="selectMovie"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Search from './components/Search.vue'
import MoviesList from './components/MoviesList.vue'
import MovieDetails from './components/MovieDetails.vue'
import Loading from './components/Loading.vue'

export default Vue.extend({
  name: 'app',
  components: {
    Search,
    MoviesList,
    MovieDetails,
    Loading
  },

  computed: {
    ...mapGetters([
      'selectMovie',
      'isLoadingSearchMovie'
    ])
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

body{
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  font-family: 'Ubuntu', sans-serif;

}
</style>
