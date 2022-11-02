import { ref, shallowRef } from "vue";
import TvShow from "../components/TvShow.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

const show = ref(false);
const component = shallowRef;

export function useModal() {
  return {
    show,
    component,
    showModal: (type) => {
      show.value = true;
      switch (type) {
        case "tvShow":
          return (component.value = TvShow);
        case "errorMessage":
          return (component.value = ErrorMessage);
      }
    },
    hideModal: () => (show.value = false),
  };
}
