<template>
  <!-- <TestPage /> -->
  <!-- <CounterComponent /> -->
  <div id="app">
    <ColourPickerGame />
  </div>
</template>

<script>
// import TestPage from './components/TestPage.vue'
// import CounterComponent from './components/CounterComponent.vue'
import ColourPickerGame from './components/ColourPickerGame.vue'
export default {
  name: 'App',
  components: {
    // TestPage,
    // CounterComponent,
    ColourPickerGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
