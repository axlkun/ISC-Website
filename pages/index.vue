<template>
    <v-sheet>
        <myHero/>
        <mySobreNosotros/>
        <myServicios/>
        <myNuestraFormula/>
        <myProyectos/>
        <myParallax/>
        <myContact/>
    </v-sheet>
  </template>
  
  <script setup>
  import myHero from '../components/Hero.vue';
  import mySobreNosotros from '../components/SobreNosotros.vue';
  import myNuestraFormula from '../components/NuestraFormula.vue';
  import myServicios from '../components/Servicios.vue';
  import myProyectos from '../components/Proyectos.vue';
  import myParallax from '../components/Parallax.vue';
  import myContact from '../components/Contact.vue';
  
  </script>