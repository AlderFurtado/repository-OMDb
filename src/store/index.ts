import Vue from 'vue'
import Vuex from 'vuex'
import Movie from '../modals/movie'
import Movies from '../service/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovies: '',
    movies: [],
    selectMovie: null,
    isLoadingSearchMovie: false
  },
  getters: {
    allMovies: state => {
      return state.movies
    },
    selectMovie: state => {
      return state.selectMovie
    },
    isLoadingSearchMovie: state => {
      return state.isLoadingSearchMovie
    }
  },
  mutations: {
    getMovies (state, payload) {
      state.movies = payload
    },
    selectMovie (state, payload) {
      state.selectMovie = payload
    },
    changeIsLoadingSearchMovie (state, payload) {
      state.isLoadingSearchMovie = payload
    }
  },
  actions: {
    getMovies ({ commit }, searchMovie: string) {
      commit('changeIsLoadingSearchMovie', true)
      commit('getMovies', null)

      Movies.searchMovie(searchMovie)
        .then((movies) => {
          commit('getMovies', movies.data.Search)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          commit('changeIsLoadingSearchMovie', false)
        })
    },

    selectMovie ({ commit }, selectMovieId: string) {
      Movies.getInfoMovie(selectMovieId)
        .then((movie) => {
          commit('selectMovie', movie.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    deselectMovie ({ commit }) {
      commit('selectMovie', null)
    },

    changeIsLoadingSearchMovie ({ commit }, state) {
      commit('changeIsLoadingSearchMovie', state)
    }

  },
  modules: {
  }
})
