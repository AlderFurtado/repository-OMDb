<template>
  <div class="container-movie" @click="selectMovie">
    <div>
    <img
      :src="this.poster"
      alt
      srcset
    />
    </div>
    <h1>{{this.title}}</h1>
    <h2>Year: {{this.year}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    poster: String,
    title: String,
    year: String,
    imdbID: String
  },

  methods: {
    selectMovie () {
      this.$store.dispatch('selectMovie', this.imdbID)
    }
  }
}
</script>

<style scoped lang="scss">
.container-movie {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;

  img {
    width: 170px;
    position: relative;
  }

  div{
    position: relative;
  }

  div::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 170px;
    height: 100%;
  }

  img:hover > div::after{
    background-color: rgba(0, 0, 0, 0.7)

  }

  h1 {
    margin: 0;
    margin-top: 5px;
    color: white;
    font-weight: 400;
    font-size: larger;
    width: 200px;
    text-align: center
  }

  h2 {
    margin: 0;
    font-size: medium;
    font-weight: 200;
    color: grey;
  }
}
</style>
