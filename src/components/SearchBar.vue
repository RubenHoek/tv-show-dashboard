<script setup>
import { ref } from "vue";

defineProps({
  placeholder: {
    type: String,
    default: "Search",
  },
});

const input = ref("");
</script>

<template>
  <p class="control has-icons-left">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      v-model="input"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('enter')"
    />
    <span class="icon is-left">
      <i class="fas fa-search" aria-hidden="true"></i>
    </span>
  </p>
</template>
