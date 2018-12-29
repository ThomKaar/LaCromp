<template>
  <div id="app"> 
  <v-app>
      <v-toolbar id="toolbar">
        <a href="/">LOGO</a>
        <v-toolbar-title href="/">LaCromp</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn><router-link to="/createAccount">Create Account</router-link></v-btn>
          <v-btn><router-link to="/login">Login</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view/>
    </v-app>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#toolbar{
  background: #F4C5C5;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
