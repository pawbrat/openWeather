<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Search/>
    <ul>
      <li v-for="day in days" v-bind:key="day.id" v-bind:msg=day>
         <Day :msg="day"></Day>
      </li>
    </ul>
  </div>
</template>

<script>
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
      days: [
        {id: 1, name: 1},
        {id: 2, name: 2},
        {id: 3, name: 3},
        {id: 4, name: 4},
        {id: 5, name: 5}
      ]
    };
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
