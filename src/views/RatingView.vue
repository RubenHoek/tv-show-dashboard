<script setup>
import { useWebsiteStore } from "../stores/website";
import DashboardRating from "../components/Dashboard/DashboardRating.vue";
import Hero from "../components/Hero.vue";

useWebsiteStore().showFilters = true;
</script>

<template>
  <Hero
    titel="All shows on this page are sorted by Rating"
    subtitle="You can filter by genre in the top bar."
  />

  <Suspense>
    <template #default>
      <DashboardRating></DashboardRating>
    </template>

    <template #fallback>
      <div>
        <br/>
        <br/>
        <progress class="progress is-primary is-small" />
      </div>
    </template>
  </Suspense>
</template>
