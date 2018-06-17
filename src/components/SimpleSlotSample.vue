<template>
  <div>
    <h2>I'm the child title</h2>
    <slot>
      This will only be displayed if there is no content to be distributed.
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CurrencyInput from './CurrencyInput.vue'
@Component
export default class SimpleSlotSample extends Vue {}
</script>

