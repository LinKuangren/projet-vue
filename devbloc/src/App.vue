<template>
  <div class="header">
    <nav>
      <router-link to="/">Acceuil</router-link> |
      <router-link to="/dossier">Dossier</router-link> |
      <router-link to="/ressources">Ressources</router-link>
    </nav>
  </div>
  <router-view/>
  <div class="footer">
    <nav>
      <router-link to="/">Acceuil</router-link> |
      <router-link to="/dossier">Dossier</router-link> |
      <router-link to="/ressources">Ressources</router-link>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  background-color: #B4CDED;
  color: white;
}

.footer{
  background-color: #B4CDED;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
