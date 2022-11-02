<script setup>
import { useTvShowStore } from "../../stores/tvShow";
import { ref } from "vue";
import Dashboard from "./Dashboard.vue";

const tvShowStore = useTvShowStore();

await tvShowStore.getShowsAndGenres(false);

const countries = ["US", "GB", "NL"];
let fetchingShows = ref(false);

async function setCountry(country) {
  fetchingShows.value = true;
  tvShowStore.selectedCountry = country;
  await tvShowStore.getShowsAndGenres(false);
  fetchingShows.value = false;
}
</script>

<template>
  <progress v-if="fetchingShows" class="progress is-primary is-small" />

  <Dashboard
    v-else
    :panelTabs="countries"
    :dashboardItems="tvShowStore.filteredTvShows"
    @tabClicked="setCountry"
    :countryItems="true"
  />
</template>
