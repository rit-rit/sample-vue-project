import Vue from 'vue';

const v = new Vue({
  el: '#app',
  template: `<div id="app">{{message}}</div>
 `,
  data: { message: 'Hollo World!' },
});
