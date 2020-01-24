export default class Movie {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  poster: string;

  constructor (
    title: string,
    year: string,
    imdbId: string,
    type: string,
    poster: string
  ) {
    this.title = title
    this.year = year
    this.imdbId = imdbId
    this.type = type
    this.poster = poster
  }
}
