<template>
  <div>
    <p v-bind:class="[activeClass,errorClass]">aaaa
    </p>
    <p v-bind:class="[isActive?activeClass:'',errorClass]">aaaa
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
  activeClass: string = 'active'
  errorClass: string = 'text-danger'

  reverse(): void {
    this.isActive = !this.isActive
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

