<template>
  <div>
    <input v-model="city" v-on:keyup.enter="callAPI(city)" placeholder="type city name" autofocus/>
    <button @click="callAPI(city)">search</button>
    <p>{{errorMessage}}</p>
  </div>
</template>

<script>
import api from '../core/api';
export default {
  name: 'Search',
  props: {
    msg: String
  },
  data() {
    return {
      city: '',
      units: 'metric', //or imperial, @TODO selectable from dropdown or based on locale...
      errorMessage: ''
    }
  },
  methods: {
    callAPI: function(city){
      api.get(`?q=${city}&units=${this.units}`).then(response => {
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
