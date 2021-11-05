<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Главная
      </router-link> |
      <router-link to="/history">
        История
      </router-link> |
      <router-link :to="{ path: 'history', query: { action: 'add' }}">
        История добавлений
      </router-link> |
      <router-link :to="{ path: 'history', query: { action: 'remove' }}">
        История удалений
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.highlight-text {
  background: #b1ffdc;
}
</style>
