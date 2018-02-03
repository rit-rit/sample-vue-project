<template>
<div>
  <p>Message: {{msg}}</p>
  <p v-once>This will never change: {{msg}}</p>
  <button @click="msg=msg + 'a'">change</button>
  <br>
  <p>Using mastaches:{{rawHtml}}</p>
  <p>Using v-html directive:<span v-html="rawHtml"></span></p>
  <p v-bind:id="dynamicId">dynamicId</p>
  <button @click="dynamicId=dynamicId + 'a'">change</button>
  <br>
  <button v-bind:disabled="isButtonDisabled">Button</button>
  <button @click="isButtonDisabled=!isButtonDisabled">change</button>
  <br>
  {{number +1}}
  <br>
  {{ok?"YES":"NO"}}
  <button @click="ok=!ok">change</button>
  <br>
  {{message.split('').reverse().join('')}}
  <div v-bind:id="'list-' +id"></div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "Message",
      rawHtml: "<span style='color:red'>This should be red</span>",
      dynamicId: "Dynamic ID",
      isButtonDisabled: true,
      number: 1,
      ok: true,
      message: "Message",
      id: "This is id"
    };
  }
});
</script>
