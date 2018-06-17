<template>
  <li>{{todo.text}}</li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    todo: String
  }
})
export default class TodoItem extends Vue {}
</script>
