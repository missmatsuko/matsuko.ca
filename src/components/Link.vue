<template>
  <component
    :is="type"
    v-bind="$props"
    v-bind:to="isInternal ? to : null"
    v-bind:href="to"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'Link',
    props: {
      to: {
        required: true,
        default: '',
        type: String,
      },
    },
    computed: {
      isInternal() {
        return /^\/(?!\/)/.test(this.to);
      },
      type() {
        return this.isInternal ? 'g-link' : 'a';
      },
    },
  };
</script>
