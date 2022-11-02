<script setup>
import { useTvShowStore } from "../stores/tvShow";

const tvShowStore = useTvShowStore();
</script>

<template>
  <div class="select is-normal">
    <select v-model="tvShowStore.selectedGenre">
      <option v-for="genre in tvShowStore.genres" :value="genre" :key="genre">
        {{ genre }}
      </option>
    </select>
  </div>
</template>
