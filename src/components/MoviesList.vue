<template>
  <div class="container" v-if="allMovies !== null">
    <MovieItem
      v-for="movie in allMovies"
      :key=movie.imdbID
      :poster=movie.Poster
      :title=movie.Title
      :year=movie.Year
      :imdbID=movie.imdbID
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieItem from './MovieItem'

export default {
  components: {
    MovieItem
  },

  computed: {
    ...mapGetters([
      'allMovies'
    ])
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  margin: 2em 10em;
  flex-wrap: wrap;
  justify-items: flex-start;
  justify-content: space-around;
}
</style>
