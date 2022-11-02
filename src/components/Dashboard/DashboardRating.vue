<script setup>
import Dashboard from "./Dashboard.vue";
import { useTvShowStore } from "../../stores/tvShow";

const tvShowStore = useTvShowStore();
await tvShowStore.getShowsAndGenres(true);
</script>

<template>
  <Dashboard :dashboardItems="tvShowStore.filteredTvShows"></Dashboard>
</template>
