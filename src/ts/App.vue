<template>
<div>
  <dl>
    <dt>
      Enter
    </dt>
    <dd>
      <input v-on:keyup.enter="hoge('Enter',$event)">
    </dd>
    <dt>
      Tab
    </dt>
    <dd>
      <input v-on:keyup.tab="hoge('Tab',$event)">
    </dd>
    <dt>
      Delete
    </dt>
    <dd>
      <input v-on:keyup.delete="hoge('Delete',$event)">
    </dd>
    <dt>
      Escape
    </dt>
    <dd>
      <input v-on:keyup.esc="hoge('Escape',$event)">
    </dd>
    <dt>
      Space
    </dt>
    <dd>
      <input v-on:keyup.space="hoge('Space',$event)">
    </dd>
    <dt>
      Up
    </dt>
    <dd>
      <input v-on:keyup.up="hoge('Up',$event)">
    </dd>
    <dt>
      Down
    </dt>
    <dd>
      <input v-on:keyup.down="hoge('Down',$event)">
    </dd>
    <dt>
      Left
    </dt>
    <dd>
      <input v-on:keyup.left="hoge('Left',$event)">
    </dd>
    <dt>
      Right
    </dt>
    <dd>
      <input v-on:keyup.right="hoge('Right',$event)">
    </dd>
    <dt>
      PageDown
    </dt>
    <dd>
      <input v-on:keyup.page-down="hoge('PageDown',$event)">
    </dd>

  </dl>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  hoge(message: string, event: Event): void {
    alert("Message:" + message + ",Event:" + event.type);
  }
}
</script>

