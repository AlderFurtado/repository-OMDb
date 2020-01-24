<template>
  <div class="container">
    <div class="container-info-movie">
      <h2 @click="exit">X</h2>
      <img :src="selectMovie.Poster" alt srcset />
      <div class="description">
        <span>Description</span>
        <h1>
          <br />
          {{selectMovie.Plot}}
        </h1>
      </div>

      <p>
        <span>Cast</span>
        <br />
        {{selectMovie.Actors}}
      </p>
      <div class="info-movie">
        <div class="intro">
          <div>
            <h1>{{selectMovie.Title}}</h1>
            <h3>{{selectMovie.Genre}}</h3>
          </div>
          <p>{{selectMovie.Runtime}}</p>
        </div>
        <p>Country: {{ selectMovie.Country }}</p>
        <p>Studio: {{ selectMovie.Production }}</p>
      </div>
      <div class="info-movie-notes">
        <span>Notes</span>
        <div class="container-movie-notes">
          <div v-for="n in selectMovie.Ratings" :key="n.Source">
            <h1>{{n.Value}}</h1>
            <span>{{n.Source}}</span>
          </div>
        </div>
        <h3>Released: {{selectMovie.Released}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    exit () {
      this.$store.dispatch('deselectMovie')
    }
  },

  computed: {
    ...mapGetters(['selectMovie'])
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  position: fixed;
  z-index: 100;
  height: 100%;
  top: 0;
  background-color: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .container-info-movie {
    display: grid;
    grid-template: "image description" "image cast" "info notes";
    grid-template-columns: 200px 470px;
    grid-column-gap: 1em;
    grid-template-rows: 220px 80px auto;
    background-color: #2b3d4f;
    position: relative;

    h2 {
      position: absolute;
      color: #fff;
      top: -3%;
      right: -1%;
      margin: 0;
      cursor: pointer;
    }

    img {
      grid-area: image;
      width: 100%;
    }

    .description {
      grid-area: description;
      h1 {
        font-size: 10pt;
        margin: 0px 0px;
        font-weight: 200;
        color: rgba(255, 255, 255, 0.836);
        line-height: 20px;
        height: 90%;
        overflow-y: auto;
      }
      span {
        color: rgba(255, 255, 255, 0.356);
        margin: 10px 0px;
        font-size: 8pt;
      }
    }

    p {
      grid-area: cast;
      font-size: 10pt;
      margin: 4px 0px;
      font-weight: 200;
      color: rgba(255, 255, 255, 0.836);
      line-height: 20px;
      span {
        color: rgba(255, 255, 255, 0.356);
        margin: 10px 0px;
        font-size: 8pt;
      }
    }

    .info-movie {
      grid-area: info;
      padding: 4px;

      .intro {
        display: flex;
        justify-content: space-between;

        div{
                flex: 1;
        }

        h1 {
          font-size: 16pt;
          margin: 0;
          font-weight: 500;
          color: white;
          background-color: #8c915c;
          padding: 2px;
        }
        h3 {
          margin: 5px 0px;
          font-size: 10pt;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.356);
          width: auto;
        }
        p {
          font-size: 8pt;
        }
      }
    }

    .info-movie-notes {
      grid-area: notes;
      position: relative;

      span {
        color: rgba(255, 255, 255, 0.356);
        margin: 10px 0px;
        font-size: 8pt;
      }

      .container-movie-notes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2px 2em;

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h1 {
            font-size: 12pt;
            color: rgba(255, 255, 255, 0.836);
            margin: 0;
            margin-top: 10px;
          }

          span {
            font-size: 10pt;
          }
        }
      }

      h3 {
        margin: 0;
        align-self: end;
        float: right;
        font-size: 8pt;
        position: absolute;
        bottom: 4px;
        right: 10px;
        font-weight: 200;
        color: rgba(255, 255, 255, 0.836);
      }
    }
  }
}
</style>
