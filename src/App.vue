<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  min-width: 1024px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin:0;
  padding:0;
}
li {
  list-style:none;
}
a {
  text-decoration: none;
}
img {
  vertical-align:top;
  border:none;
}
</style>
