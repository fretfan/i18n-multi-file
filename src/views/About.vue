<template>
  <div class="about">
    <h1>This is an about page with messages</h1>
    <p>{{ $t("global.msg11") }}</p>
    <p>{{ $t("about.asd") }}</p>
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

export default Vue.extend({
  mounted() {
    console.log("##########loaded messages#######")
    console.log(this.$i18n.messages);
  }
});
</script>
