<template>
  <div id="app">
    <Search @myEvent="consumeData"/>
    <ul>
      <li v-for="day in days" v-bind:key="day.id" v-bind:day=day>
         <Day :day="day"></Day>
      </li>
    </ul>
  </div>
</template>

<script>
import weatherData from './core/weatherData';
import Day from './components/Day.vue';
import Search from './components/Search.vue';

export default {
  name: 'app',
  components: {
    Day,
    Search
  },
  data: function() {
    return {
      days: []
    };
  },
  methods: {
    consumeData(data) {
      if(data.list) {
        this.days = weatherData.groupChunks(data.list);
      }
    }, 

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app ul {
  padding: 0;
  list-style-type: none;
}
</style>
