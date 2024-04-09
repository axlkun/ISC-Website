<template>
  <v-app id="app">

    <myHeader/>
    <myHero/>
    <mySobreNosotros/>
    <myServicios/>
    <myProyectos/>
    <!-- .... -->
  </v-app>
</template>

<script setup>
import myHeader from './components/Header.vue';
import myHero from './components/Hero.vue';
import mySobreNosotros from './components/SobreNosotros.vue';
import myServicios from './components/Servicios.vue';
import myProyectos from './components/Proyectos.vue';



</script>