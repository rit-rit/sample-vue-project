<template>
<currency-input v-model="price"></currency-input>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CurrencyInput from "./CurrencyInput.vue";
@Component({
  components: {
    currencyInput: CurrencyInput
  }
})
export default class App extends Vue {
  value: string = "";
}
</script>

