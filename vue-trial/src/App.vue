<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/insert">Insert</router-link> |
    <router-link to="/list">List</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
  $pri: #ffbf02;
  $sec: #f38c02;
  $bg: #080f16;

*{
  margin: 0;
  padding: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $pri;
  background: $bg;
  height: 100vh;
}
button{
  margin: 1rem;
  color: $bg;
  padding: 10px 20px;
  background: $pri;
  border-radius: 3px;
  border: none;
  box-shadow: -4px 3px 0 $sec;
  &:hover {
  color: $bg;
  background: $pri;
  font-weight: bold;
  box-shadow: -4px 3px 0 $sec;
}
}

#nav {
  padding: 30px;

  a {
    color: $bg;
    padding: 5px;

      background: $sec;
      border-radius: 3px;
      text-decoration: none;

    &.router-link-exact-active, :hover {
      color: $bg;
      background: $pri;
      font-weight: bold;
      box-shadow: -4px 3px 0 $sec; 
    }
  }
}
</style>
