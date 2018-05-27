<template>
  <div>
    <p v-bind:class="{active:isActive}">aaaa
      <button @click="reverse()">Reverse!!</button>
    </p>
    <p v-bind:class="classObject">aaaa
      <button @click="reverse()">Reverse!!</button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  isActive: boolean = true
  error = null

  reverse(): void {
    this.isActive = !this.isActive
  }
  get classObject(): Object {
    return {
      active: Boolean(this.isActive),
      'text-danger': !Boolean(this.isActive)
    }
  }
}
</script>

<style scoped>
.active {
  color: blue;
}
.text-danger {
  font-size: 200%;
}
</style>

