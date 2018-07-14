<template>
  <div id="app">
    <map-component />
  </div>
</template>

<script>
  import MapComponent from './components/MapComponent'

  export default {
    name: 'app',
    components: {
      MapComponent
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;

  /* Set the height to match that of the viewport. */
  height: 100vh;

  /* Set the width to match that of the viewport. */
  width: 100vw;

  /* Remove any browser-default margins. */
  margin: 0;

}
/* Optional: Makes the sample page fill the window. */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
