<script setup>
defineProps({
  countryItem: {
    type: Boolean,
    default: false,
  },
  id: Number,
  name: String,
  officialSite: String,
  language: String,
  premiered: String,
  airdate: String,
  airtime: String,
  rating: Number,
});
</script>

<template>
  <div class="panel-block" @click="$emit('open', id)">
    <div class="container">
      <a>{{ name }}</a>
      <template v-if="countryItem">
        <p v-if="airdate">
          Date: <strong>{{ airdate }}</strong>
        </p>
        <p v-if="airtime">
          Time: <strong>{{ airtime }}</strong>
        </p>
      </template>
      <template v-else>
        <p v-if="rating">
          Rating: <strong>{{ rating }}</strong>
        </p>
        <p v-if="language">
          Language: <strong>{{ language }}</strong>
        </p>
        <p v-if="premiered">
          Premiered: <strong>{{ premiered }}</strong>
        </p>
      </template>
    </div>
    <div class="container">
      <div>Official website:</div>
      <a v-if="officialSite" :href="officialSite" target="_blank">{{
        officialSite
      }}</a>
      <p v-else><em>Sorry!</em> There is no website known in our database.</p>
    </div>
  </div>
</template>

<style>
.container {
  overflow: hidden !important;
  flex: 1 1 0px;
}
</style>
