<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #8B5CF6;
    margin: 0.5rem;
    padding: 8px 10px;
    border: 1px #6D28D9 solid;
    border-radius: 10px;


    &.router-link-exact-active {
      
      
      background: #6D28D9;
      color: #fff;
    }
  }
}
</style>
