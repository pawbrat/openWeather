<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Search @myEvent="consumeData"/>
    <ul>
      <li v-for="day in days" v-bind:key="day.id" v-bind:msg=day>
         <Day :msg="day"></Day>
      </li>
    </ul>
  </div>
</template>

<script>
import groupChunks from './components/weatherData';
import Day from './components/Day.vue';
import HelloWorld from './components/HelloWorld.vue';
import Search from './components/Search.vue';

export default {
  name: 'app',
  components: {
    Day,
    HelloWorld, 
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
        console.log('upsik');
        groupChunks(data.list);
        //data.list.forEach(item => {
        //  console.log(item.dt_txt);
        //})
        //this.days = data.list.slice(0, 5);
        //console.log(this.days);
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
</style>
