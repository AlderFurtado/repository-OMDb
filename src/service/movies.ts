import { http } from './index'

export default {
  searchMovie: (nameMovie: string) => {
    return http.get('http://www.omdbapi.com/?apikey=' + process.env.VUE_APP_KEY_OMDB + '&s=' + nameMovie + '&plot=full')
  },

  getInfoMovie (movieId: string) {
    return http.get('http://www.omdbapi.com/?apikey=' + process.env.VUE_APP_KEY_OMDB + '&i=' + movieId + '&plot=full')
  }
}
