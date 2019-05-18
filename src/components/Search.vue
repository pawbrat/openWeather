<template>
  <div>
    <input v-model="city"/>
    <button @click="callAPI(city)">search</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    msg: String
  },
  data() {
    return {
      city: ''
    }
  },
  methods: {
    callAPI: (city) => {
      console.log('will fetch weather forecast for ' + city);
    }
  }
}
</script>
