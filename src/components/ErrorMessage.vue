<script setup>
import { useModal } from "../composables/modal";
import { useErrorsStore } from "../stores/errors";

const errorsStore = useErrorsStore();
</script>

<template>
  <div class="modal-card">
    <article class="message is-danger">
      <div class="message-header">
        <p>{{ errorsStore.errorHeader }}</p>
        <button
          class="delete"
          aria-label="delete"
          @click="useModal().hideModal"
        ></button>
      </div>
      <div class="message-body">
        {{ errorsStore.errorMessage }}
      </div>
    </article>
  </div>
</template>
