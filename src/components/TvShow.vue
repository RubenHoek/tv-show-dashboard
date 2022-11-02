<script setup>
import { useTvShowStore } from "../stores/tvShow";

const tvShowStore = useTvShowStore();
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-58x58">
            <img
              :src="tvShowStore.currentTvShow.image.medium"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ tvShowStore.currentTvShow.name }}</p>
          <div class="content is-6">
            <p v-if="tvShowStore.currentTvShow.language">
              Language: {{ tvShowStore.currentTvShow.language }}
            </p>
            <p v-if="tvShowStore.currentTvShow.officialSite">
              Website:
              <a :href="tvShowStore.currentTvShow.officialSite">{{
                tvShowStore.currentTvShow.officialSite
              }}</a>
            </p>
            <p v-if="tvShowStore.currentTvShow.premiered">
              Premiered: {{ tvShowStore.currentTvShow.premiered }}
            </p>
            <p v-if="tvShowStore.currentTvShow.type">
              Type: {{ tvShowStore.currentTvShow.type }}
            </p>
          </div>
        </div>
      </div>

      <div class="content">
        <p v-html="tvShowStore.currentTvShow.summary"></p>
      </div>

      <footer
        class="card-footer"
        v-if="
          typeof tvShowStore.currentTvShow.genres !== 'undefined' &&
          tvShowStore.currentTvShow.genres.length > 0
        "
      >
        <p
          class="card-footer-item"
          v-for="genre in tvShowStore.currentTvShow.genres"
          :key="genre"
        >
          {{ genre }}
        </p>
      </footer>
    </div>
  </div>
</template>
