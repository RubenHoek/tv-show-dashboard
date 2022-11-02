<script setup>
defineProps({
  titel: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  danger: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="hero is-small" :class="[danger ? 'is-danger' : 'is-primary']">
    <div class="hero-body">
      <p class="title">
        {{ titel }}
      </p>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
