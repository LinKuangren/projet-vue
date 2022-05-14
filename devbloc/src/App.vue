<template>
  <div class="header">
    <div class="contenu_header">
      <img alt="logo projet" src="../public/logo_final.png">
      <nav class="nav_header">
        <router-link to="/">Acceuil</router-link> |
        <router-link to="/dossier">Dossier</router-link> |
        <router-link to="/ressources">Ressources</router-link>
      </nav>
    </div>
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

.header {
  background-color: #B4CDED;
  color: white;
}

img {
  width: 100px;
}

.contenu_header {
  margin: auto 9rem;
  display: flex;
}

.footer {
  background-color: #B4CDED;
  color: white;
}

nav {
  padding: 30px;
}

.nav_header {
  margin: 10px 0 0 23rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
