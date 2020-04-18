<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page2">Page2</router-link>
    </div>
    <div class="locale-changer">
      <select @input="changeLocale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
          lang
        }}</option>
      </select>
    </div>
    <p>{{ $t("global.msg11") }}</p>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "locale-changer",
  data() {
    return {
      locale: "en",
      langs: ["en", "ee"]
    };
  },
  methods: {
    changeLocale(event: any) {
      const locale = event.target.value;
      this.$i18n.locale = locale;
      // console.log('setting to val:');
      // console.log(event.target.value);
      // console.log(this.$router.currentRoute);
      // const locale = event.target.value;
      // const curRoute = this.$router.currentRoute;
      // if (curRoute.name !== 'Home') {
      //   loadLanguageAsync(locale, curRoute.name).then(this.$i18n.locale = locale);
      // }
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
