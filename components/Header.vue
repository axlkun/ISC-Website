<template>
    <header class="header" :class="{ 'stick': menuOpen }">
        <nav>

            <div class="container-bar">
                <a class="logo" href="/">
                    <div>
                        <img :src="logo" alt="Icono" />
                    </div>
                </a>

                <button class="hide-icon" @click="toggleMenu" aria-label="Toggle Menu">
                    <v-icon :icon="menuOpen ? 'mdi mdi-close-box' : 'mdi mdi-menu'"></v-icon>
                </button>

            </div>

            <div class="container-menu" :class="{ 'hide': !menuOpen }">
                <ul class="menu desktop-menu">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                    <li><a href="/sobre-nosotros">Servicios</a></li>
                    <li><a href="/proyectos">Proyectos</a></li>
                    <li><a href="/sobre-nosotros" class="button">Contacto</a></li>
                </ul>

                <div class="hide-icon">
                    <p>info@isc.com</p>
                </div>
            </div>

        </nav>
    </header>
</template>
  
<script setup>
import { ref } from 'vue';
import logo from '../assets/logo.png';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;

  if (!menuOpen.value) {
    window.scrollTo(0, 0);
  }
};

// const redirectSection = (sectionName) => {
//   const windowWidth = window.innerWidth;

//   if (windowWidth <= 1024) {
//     menuOpen.value = !menuOpen.value;
//   }

//   scrollToSection(sectionName);
// };
</script>
  
<style scoped>
.header {
    width: 100%;
    max-height: 100vh;
    background-color: var(--primary-background);
}

.stick {
    position: fixed;
    z-index: 100;
    height: 100vh;
}

nav {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo img {
    width: 48px;
    height: 48px;
}

.logo p {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-blue);
}

.logo p span {
    color: var(--primary-black);
}

.hide-icon {
    @media only screen and (min-width: 1024px) {
        display: none;
    }
}

.container-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.container-menu {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        height: auto;
    }
}

.menu {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        height: auto;
        gap: 15px;
    }
}

.menu a {
    font-size: 43px;
    line-height: 1.2;
    cursor: pointer;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }

    &:hover {
        color: var(--primary-blue);
    }
}

a:visited {
    color: black;
  }

ul.menu li a.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 2px 8px;
    border-radius: 8px;
}

ul.menu li a.button:hover {
    opacity: 0.9;
    text-decoration: none;
    color: var(--primary-background);
}

/* */
.hide {
    display: none;

    @media only screen and (min-width: 1024px) {
        display: block;
    }
}
</style>