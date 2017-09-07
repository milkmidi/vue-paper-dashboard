<template lang="pug">
.bootstrap-switch.bootstrap-switch-wrapper.bootstrap-switch-animate(
  :class="{'bootstrap-switch-on':on, 'bootstrap-switch-off':!on}",
  @click="switchClickHandler"
  )
  .bootstrap-switch-container
    span.bootstrap-switch-handle-on.bootstrap-switch-
    span.bootstrap-switch-label
    span.bootstrap-switch-handle-off.bootstrap-switch-default
</template>

<script>
export default {
  data() {
    return {
      on: true,
    };
  },
  methods: {
    switchClickHandler() {
      this.on = !this.on;
    },
  },
};
</script>
