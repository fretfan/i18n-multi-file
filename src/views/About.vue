<template>
  <div class="about">
    <h1>This is an about page with messages</h1>
    <p>{{ $t("about.msg1") }}</p>
    <p>{{ $t("about.msg2") }}</p>
    <p>{{ $t("about.msg3") }}</p>
    <p>{{ $t("about.msg4") }}</p>
    <p>{{ $t("about.msg5") }}</p>
    <!--    <p v-for="i in 500" :key="i">{{$t(`about.msg${i}`)}}</p>-->
  </div>
</template>
