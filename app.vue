<template>
  <v-app id="app">

    <myHeader></myHeader>
    <main>
      <NuxtPage />
    </main>
    <myFooter></myFooter>
  </v-app>
</template>

<script setup>
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';

</script>