<template>
  <div>
    <div v-for="(value,key,index) in items">
      {{index}}-{{key}}-{{value}}
    </div>
    <button @click="push">Push</button>
    <button @click="pop">Pop</button>
    <button @click="shift">Shift</button>
    <button @click="unshift">Unshift</button>
    <button @click="slice">Slice</button>
    <button @click="sort">Sort</button>
    <button @click="reverse">Reverse</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  items: Object[] = [{ message: 'Foo' }, { message: 'Bar' }]
  count: number = 0
  push(): void {
    this.items.push({ message: 'Baz' + this.count })
    this.count = this.count + 1
  }

  pop(): void {
    this.items.pop()
  }

  shift(): void {
    this.items.shift()
  }
  unshift(): void {
    this.items.unshift({ message: 'Baz' + this.count })
    this.count = this.count + 1
  }

  slice(): void {
    this.items = this.items.slice(2)
  }

  sort(): void {
    this.items.sort(function(a: any, b: any): number {
      a = a['message']
      b = b['message']
      return a == b ? 0 : a > b ? 1 : -1
    })
  }

  reverse(): void {
    this.items.reverse()
  }
}
</script>
