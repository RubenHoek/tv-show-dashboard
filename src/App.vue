<script setup>
import { RouterLink, RouterView } from "vue-router";
import SelectGenre from "./components/SelectGenre.vue";
import { useModal } from "./composables/modal";
import { useWebsiteStore } from "./stores/website";

const modal = useModal();
const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- Set modal on top of everything when used -->
  <div class="modal" :class="{ 'is-active': modal.show.value }">
    <div class="modal-background" @click.self="modal.hideModal"></div>
    <div class="modal-content">
      <component :is="modal.component.value" />
    </div>

    <button class="modal-close is-large" @click="modal.hideModal"></button>
  </div>

  <header>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <RouterLink to="/">
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/logo.svg"
              width="125"
              height="125"
          /></RouterLink>
        </div>

        <div class="level-item">
          <RouterLink to="/rating">View shows by rating</RouterLink>
        </div>

        <div class="level-item">
          <RouterLink to="/search">Search all TvShows</RouterLink>
        </div>

        <div class="level-item">
          <RouterLink to="/about">About</RouterLink>
        </div>
      </div>

      <div class="level-right" v-if="websiteStore.showFilters">
        <div class="level-item">
          <p><strong>Genre filter: </strong></p>
        </div>
        <div class="level-item">
          <SelectGenre />
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
