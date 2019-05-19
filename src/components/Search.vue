<template>
  <div>
    <input v-model="city" v-on:keyup.enter="callAPI(city)"/>
    <button @click="callAPI(city)">search</button>
    <p>{{errorMessage}}</p>
  </div>
</template>

<script>
import api from './api';
export default {
  name: 'Search',
  props: {
    msg: String
  },
  data() {
    return {
      city: '',
      errorMessage: ''
    }
  },
  methods: {
    callAPI: function(city){
      api.get(`?q=${city}`).then(response => {
            this.errorMessage = '';
            this.$emit('myEvent', response.data)
          })
          .catch(error => {
            this.errorMessage = error.response.data.message;
          });
    }
  }
}
</script>
