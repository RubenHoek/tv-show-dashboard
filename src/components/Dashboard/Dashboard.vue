<script setup>
import { toRefs } from "vue";
import DashboardItem from "./DashboardItem.vue";
import { useModal } from "../../composables/modal";
import { useTvShowStore } from "../../stores/tvShow";

const tvShowStore = useTvShowStore();

const props = defineProps({
  panelTabs: {
    type: Array,
  },
  dashboardItems: {
    type: Array,
    required: true,
  },
  countryItems: {
    type: Boolean,
    default: false,
  },
});

const { dashboardItems, countryItems } = toRefs(props);

function setCurrentTvShow(id) {
  let getShow = dashboardItems.value.find((show) => show.id === id);
  let currentTvShow = countryItems.value ? getShow.show : getShow;
  console.log(currentTvShow);
  tvShowStore.setCurrentTvShow(currentTvShow);
  useModal().showModal("tvShow");
}
</script>

<template>
  <article class="panel is-link">
    <p v-if="countryItems && panelTabs" class="panel-tabs">
      <a
        v-for="tab in panelTabs"
        :key="tab"
        @click="$emit('tabClicked', tab)"
        :class="{ 'is-active': tab === tvShowStore.selectedCountry }"
        >{{ tab }}</a
      >
    </p>

    <template v-if="countryItems">
      <DashboardItem
        @open="setCurrentTvShow"
        v-for="item in dashboardItems"
        :key="item.id"
        :id="item.id"
        :name="item.show.name"
        :officialSite="item.show.officialSite"
        :countryItem="true"
        :airdate="item.airdate"
        :airtime="item.airtime"
      />
    </template>

    <template v-else>
      <DashboardItem
        @open="setCurrentTvShow"
        v-for="item in dashboardItems"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :officialSite="item.officialSite"
        :language="item.language"
        :premiered="item.premiered"
        :rating="item.rating.average"
      />
    </template>
  </article>
</template>
