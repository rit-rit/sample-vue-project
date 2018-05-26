<template>
  <div>
    <div>
      <p v-for="message in messages" v-bind:key="message">
        {{message}}</p>
      <messageEventExample v-on:message="handleMessage"></messageEventExample>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import MessageEventExample from './MessageEventExample.vue'
@Component({
  components: {
    messageEventExample: MessageEventExample
  }
})
export default class App extends Vue {
  messages: string[] = []
  handleMessage(payload: any): void {
    this.messages.push(payload.message)
  }
}
</script>

