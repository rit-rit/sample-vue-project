<template>
  <div>
    <div v-for="(value,key,index) in object">
      {{index}}-{{key}}-{{value}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  object: Object = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  }
}
</script>
