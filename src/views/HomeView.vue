<script setup>
import DashBoardHome from "../components/Dashboard/DashboardHome.vue";
import { useWebsiteStore } from "../stores/website";
import Hero from "../components/Hero.vue";
import { useTvShowStore } from "../stores/tvShow";

const tvShowStore = useTvShowStore();

useWebsiteStore().showFilters = true;
</script>

<template>
  <Hero
    :titel="`Show all tv shows from today for: ${tvShowStore.selectedCountry}`"
    subtitle="You can use filters on the dropdown
        on the top bar"
  />
  <article
    class="panel"
    :class="[tvShowStore.selectedGenre.length > 0 ? 'is-danger' : '']"
  >
    <p class="panel-heading" v-if="tvShowStore.selectedGenre.length > 0">
      {{ tvShowStore.selectedCountry }} tv shows are filtered for:
      {{ tvShowStore.selectedGenre }}
    </p>
    <p class="panel-heading" v-else>
      All tv shows for: {{ tvShowStore.selectedCountry }}
    </p>
  </article>

  <Suspense>
    <template #default>
      <DashBoardHome />
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
