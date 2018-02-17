<template>
<div>
<template v-if="loginType==='username'">
  <label>Username</label>
  <input placeholder="Enter your name">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
<br>
<button @click="toggle">Toggle login Type</button>
<br>
<template v-if="loginType==='username'">
  <label>Username</label>
  <input placeholder="Enter your name" key="usename-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
<br>
<button @click="toggle">Toggle login Type</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  loginType: String = "username";

  toggle(): void {
    this.loginType === "username"
      ? (this.loginType = "email")
      : (this.loginType = "username");
  }
}
</script>
