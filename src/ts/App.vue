<template>
<div>
  <dl>
    <dt>
      Alt+C
    </dt>
    <dd>
      <input v-on:keyup.alt.67="hoge('Alt+C',$event)">
    </dd>
    <dt>
      Ctrl+any
    </dt>
    <dd>
      <input v-on:keyup.ctrl="hoge('Ctrl+E',$event)">
    </dd>
    <dt>
      Shift+any
    </dt>
    <dd>
      <input v-on:keyup.shift="hoge('Shift',$event)">
    </dd>
    <dt>
      Meta+any
    </dt>
    <dd>
      <input v-on:keyup.meta="hoge('Meta',$event)">
    </dd>
    <dt>
      Exact Ctrl
    </dt>
    <dd>
      <button v-on:click.ctrl.exact="hoge('Exact Ctrl',$event)"></button>
    </dd>
    <dt>
      Left Click
    </dt>
    <dd>
      <input v-on:click.left="hoge('Left Click',$event)">
    </dd>
    <dt>
      Middle Click
    </dt>
    <dd>
      <input v-on:click.middle="hoge('Middle Click',$event)">
    </dd>
    <dt>
      Right Click
    </dt>
    <dd>
      <input v-on:click.right="hoge('Right Click',$event)">
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

