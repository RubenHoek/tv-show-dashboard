import { defineStore } from "pinia";
import axios from "axios";
import { useModal } from "../composables/modal";
import { useErrorsStore } from "./errors";

export const useTvShowStore = defineStore("tvShow", {
  state: () => ({
    tvShowIds: [],
    allTvShows: new Map(),
    genres: [], // put all the genres i get back with the shows here.
    selectedGenre: "",
    selectedCountry: "US",
    currentTvShow: null,
  }),

  actions: {
    async fetchShows(url) {
      const data = await axios
        .get(url)
        .then((res) => res.data)
        .catch((e) => {
          const errorsStore = useErrorsStore();
          errorsStore.errorHeader = "We got a error while getting the tv shows";
          errorsStore.errorMessage = `While getting the TV shows from a external server the following error occured: ${e.message}`;
          return useModal().showModal("errorMessage");
        });

      return data;
    },
    async getShowsAndGenres(sortRating) {
      this.selectedGenre = "";

      // complete list of episodes that air in a given country on a given date.
      let url = `https://api.tvmaze.com/schedule?country=${this.selectedCountry}`;

      if (sortRating) {
        url = `https://api.tvmaze.com/shows?page=1`;
      }

      let data = await this.fetchShows(url);

      let ids = [];
      let all = new Map();
      let genres = [];

      if (sortRating) {
        data = await this.sortShowsByRating(data);
      }

      for (const show of data) {
        ids.push(show.id);
        all.set(show.id, show);

        const dataGenres = show.show ? show.show.genres : show.genres;

        if (typeof dataGenres !== "undefined") {
          for (const genre of dataGenres) {
            genres.indexOf(genre) === -1 && genres.push(genre);
          }
        }
      }

      this.allTvShows = all;
      this.tvShowIds = ids;
      this.genres = genres;
    },
    findAndSetCurrentTvShow(id) {
      const tvShow = this.allTvShows.get(id);
      this.setCurrentTvShow(tvShow.show);
    },
    setCurrentTvShow(show) {
      this.currentTvShow = show;
    },
    async sortShowsByRating(data) {
      // Only use shows with rating
      const showsWithRating = data.filter(
        (show) => show.rating.average !== null
      );
      // Highest rating on top
      showsWithRating.sort((a, b) => {
        return b.rating.average - a.rating.average;
      });

      return showsWithRating;
    },
  },

  getters: {
    filteredTvShows: (state) => {
      return state.tvShowIds
        .map((id) => {
          const show = state.allTvShows.get(id);

          if (!show) {
            throw Error(`Show with id of ${id} was expected but not found.`);
          }
          return show;
        })
        .filter((show) => {
          if (state.selectedGenre) {
            if (show.show) {
              return show.show.genres.includes(state.selectedGenre);
            }
            return show.genres.includes(state.selectedGenre);
          }
          return show;
        });
    },
  },
});
