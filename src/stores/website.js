import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    showFilters: true,
  }),
});
