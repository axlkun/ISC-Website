<template>
  <v-app id="app">

    <myHeader/>
    <myHero/>
    <mySobreNosotros/>
    
    <myServicios/>
    <myNuestraFormula/>
    <myProyectos/>
    <myParallax/>
    <myContact/>
    <myFooter/>
    <!-- .... -->
  </v-app>
</template>

<script setup>
import myHeader from './components/Header.vue';
import myHero from './components/Hero.vue';
import mySobreNosotros from './components/SobreNosotros.vue';
import myNuestraFormula from './components/NuestraFormula.vue';
import myServicios from './components/Servicios.vue';
import myProyectos from './components/Proyectos.vue';
import myParallax from './components/Parallax.vue';
import myContact from './components/Contact.vue';
import myFooter from './components/Footer.vue';



</script>