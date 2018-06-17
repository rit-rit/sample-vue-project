<template>
  <span>$<input ref="input" v-bind="value" v-on:input="updateValue($event.target.value)"></span>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import App from './App.vue'
import { Prop } from 'vue-property-decorator'
@Component
export default class CurrencyInput extends Vue {
  @Prop() value: String
  $refs: {
    input: App
  }
  updateValue(value: string): void {
    var formattedValue = value
      .trim()
      .slice(
        0,
        value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3
      )
    if (formattedValue !== value) {
      this.$refs['input'].value = formattedValue
    }
    this.$emit('input', Number(formattedValue))
  }
}
</script>

