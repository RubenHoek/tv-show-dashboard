<script setup>
import { useWebsiteStore } from "../stores/website";
import Hero from "../components/Hero.vue";
import DashboardSearch from "../components/Dashboard/DashboardSearch.vue";

useWebsiteStore().showFilters = false;
</script>

<template>
  <Hero
    titel="Search through all TvShows"
    subtitle="You have to press enter or press the search button."
  />
  <DashboardSearch />
</template>
