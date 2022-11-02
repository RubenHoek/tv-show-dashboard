<script setup>
import { ref } from "vue";
import Dashboard from "./Dashboard.vue";
import SearchBar from "../SearchBar.vue";
import { useErrorsStore } from "../../stores/errors";
import { useModal } from "../../composables/modal";
import { useTvShowStore } from "../../stores/tvShow";
import Hero from "../Hero.vue";

const tvShowStore = useTvShowStore();
const searchQuery = ref("");
const searchedFor = ref("");
const shows = ref([]);

async function searchForShow() {
  const url = `https://api.tvmaze.com/search/shows?q=${searchQuery.value}`;
  const data = await tvShowStore.fetchShows(url);

  if (data.length <= 0) {
    const errorsStore = useErrorsStore();
    errorsStore.errorHeader = `No results searching for "${searchQuery.value}".`;
    errorsStore.errorMessage = `Please try using another search keyword, because for "${searchQuery.value}" we couldn't find anything.`;
    return useModal().showModal("errorMessage");
  }
  let showsArray = [];
  for (const show of data) {
    showsArray.push(show.show);
  }
  shows.value = showsArray;
  searchedFor.value = searchQuery.value;
}
</script>

<template>
  <br />
  <nav class="level">
    <div class="level-left">
      <SearchBar
        v-model="searchQuery"
        placeholder="Search through all TvShows"
        @enter="searchForShow"
      ></SearchBar>
      <button class="button is-link level-right" @click="searchForShow">
        Search
      </button>
    </div>
    <div class="level-right" v-if="shows.length > 0">
      <div class="level-item">
        <p>
          All shows below are based on the search:
          <strong>{{ searchedFor }}</strong>
        </p>
      </div>
    </div>
  </nav>

  <Hero
    v-if="!shows.length > 0"
    titel="No results yet"
    subtitle="Please use the search box and press the search button to search for
        shows."
    :danger="true"
  />

  <Dashboard v-else :dashboardItems="shows" />
</template>
