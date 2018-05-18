<template>
  <div>
    <p>WatchedFullName:{{watchedFullName}}</p>
    WatchedFirstName: <input v-model="watchedFirstName">
    <br> WatchedLastName: <input v-model="watchedLastName">
    <p>ComputedFullName:{{computedFullName}}</p>
    ComputedfirstName: <input v-model="computedFirstName">
    <br> ComputedlastName: <input v-model="computedLastName">
    <br> ComputedFullName: <input v-model="computedFullName">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  watchedFirstName: string = 'Foo';
  watchedLastName: string = 'Bar';
  watchedFullName: string = 'Foo Bar';

  computedFirstName: string = 'Foo';
  computedLastName: string = 'Bar';

  @Watch('watchedFirstName')
  updateWatchedFirstName(val: string) {
    this.watchedFullName = val + ' ' + this.watchedLastName;
  }
  @Watch('watchedLastName')
  updateWatchedLastName(val: string) {
    this.watchedFullName = this.watchedFirstName + ' ' + val;
  }

  get computedFullName(): string {
    return this.computedFirstName + ' ' + this.computedLastName;
  }
  set computedFullName(newValue: string) {
    var names: string[] = newValue.split(' ');
    this.computedFirstName = names[0];
    this.computedLastName = names[names.length - 1];
  }
}
</script>
