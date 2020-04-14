<template>
  <div class="about">
    <button @click="loadTr('en', 'about')">Load EN</button>
    <button @click="loadTr('ee', 'about')">Load EE</button>
    <h1>This is an about page with messages</h1>
    <p>{{ $t("global.msg1") }}</p>
    <p>{{ $t("about.msg1") }}</p>
    <p>{{ $t("about.msg2") }}</p>
    <p>{{ $t("about.msg3") }}</p>
    <p>{{ $t("about.msg4") }}</p>
    <p>{{ $t("about.msg5") }}</p>
    <!--    <p v-for="i in 500" :key="i">{{$t(`about.msg${i}`)}}</p>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { loadLanguageAsync } from "@/i18n";

export default Vue.extend({
  methods: {
    loadTr(lang: any, module: any) {
      loadLanguageAsync(lang, module);
    }
  }
});
</script>
