<template>
  <div class="container">
    <div class="header-footer">
      <!--<img alt="logo" src="(../assets/image/logo.png)"> -->
    </div>
    <MyFolders />
    <MyRessources />
    <div class="header-footer">
    </div>
  </div>
</template>

<script>
import MyRessources from './components/MyRessources.vue'
import MyFolders from './components/MyFolders.vue'

export default {
  name: 'App',
  components: {
    MyRessources,
    MyFolders,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #B4CDED;
}

.container {
  max-width: 1920px;
  margin:0 auto;
}

.header-footer {
  background-color: #4C5F6B;
  color: white;
  padding: 50px;
}

img {
  width: 100px;
}

.contenu_header {
  margin: auto 9rem;
  display: flex;
  align-items: center;
}

</style>
