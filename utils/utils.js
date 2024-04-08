export function scrollToSection(targetSection) {

    if (targetSection === 'projects') {
      window.location.href = '/proyectos';
    } else if (targetSection === 'blog') {
      window.location.href = '/blog';
    }else if(targetSection == 'home'){
      window.location.href = '/';
    }
     else {
      const section = document.getElementById(targetSection);
      const windowWidth = window.innerWidth;
    
      if (section) {
    
        if (windowWidth <= 1024) {
    
          const headerHeight = document.querySelector('.container-bar').offsetHeight; // Obtiene la altura del encabezado
          const sectionTop = section.getBoundingClientRect().top + headerHeight + 20;
    
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });
        } else {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    
    
      } else {
        // Si el elemento no se encuentra en la página actual, realiza una redirección a la página que contiene el elemento.
        window.location.href = `/#${targetSection}`;
      }
    }
  
  }
  
  // export function redirectTo(routeName, params) {
  //   this.$router.push({ name: routeName, params: params });
  //   window.scrollTo(0, 0);
  // }