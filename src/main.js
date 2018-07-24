import Vue from 'vue'
import App from './App.vue'
import VoerroTagsInput from '@voerro/vue-tagsinput';

var TagsInput = Vue.component('tags-input', VoerroTagsInput);
new Vue({
  el: '#app',
  components: {TagsInput},
  render: h => h(App)
})
