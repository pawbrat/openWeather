<template>
  <div>
    <h2>{{day[0].label}}</h2>
    {{getAverages()}}
    <ul>
      <li v-for="entry in day" v-bind:key="entry.id">
        <h4>{{entry.hours}}</h4>
        temperature: {{entry.main.temp}} 
        <br/>weather: {{entry.weather[0].description}}
      </li>
    </ul>
  </div>
</template>

<script>
import weatherData from '../core/weatherData';
export default {
  name: 'Day',
  props: {
    day: Array
  },
  methods: {
    getAverages() {
      let averages = weatherData.getAvgData(this.day);
      return `average: ${averages.avg} | min: ${averages.min} | max: ${averages.max}`;
    }
  }
}
</script>
