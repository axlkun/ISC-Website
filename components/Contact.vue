<template>
    <v-sheet class="contact" id="contact">
        <v-sheet class="contact-container">
            <v-sheet class="contact-description">
                <v-sheet class="contact-description-container">
                    <v-sheet class="container-description-title">
                        <h2>¿Tienes un proyecto en mente?</h2>
                        <p>¡Nosotros lo desarrollamos!</p>
                    </v-sheet>
                    <v-sheet class="container-description-description">
                        <p>En ISC, estamos listos para ayudarte a llevar tus ideas a la realidad. </p>
        
                        <p>Ponte en contacto con nostros para cotizar tu proyecto.</p>
                    </v-sheet>
        
                    <v-sheet class="tags">
                        <p>Gerencia y Administración de proyectos</p>
                        <p>Ejecución y Supervisión de Obra</p>
                        <p>Obra Civil</p>
                        <p>Diseño Arquitectónico</p>
                        <p>Cálculos estructurales</p>
                        <p>Desarrollo de Ingenierías</p>
                    </v-sheet>
                </v-sheet>
                
            </v-sheet>
    
            <v-sheet class="contact-links">
                <v-sheet class="contact-link-container">
                    <v-sheet class="follow">
    
                        <h3 ><a class="button" href="#" target="_blank">Linkdln <span class="mdi mdi-arrow-right-thin"></span></a></h3>
    
                        <h3 ><a class="button" href="#" target="_blank">Facebook <span class="mdi mdi-arrow-right-thin"></span></a></h3>
    
                        <h3 ><a class="button" href="#" target="_blank">Instagram <span class="mdi mdi-arrow-right-thin"></span></a></h3>
                    
                </v-sheet>
    
                <v-sheet class="direct-contact">
    
                    <h3 ><a class="button" href="mailto:#">Email <span class="mdi mdi-arrow-right-thin"></span></a></h3>
                </v-sheet>
                </v-sheet>
                
            </v-sheet>
    
        </v-sheet>
    </v-sheet>
    </template>
    
    <script>
    export default{
        name: 'contactSection'
    }
    </script>
    
    <style scoped>
    .contact {
        background-color: var(--primary-grey);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        @media only screen and (min-width: 1024px) {
            min-height: 100vh;
        }
    }
    
    .contact-container {
        width: 100%;
        
        display: flex;
        flex-direction: column;
    
        @media only screen and (min-width: 1024px) {
            flex-direction: row;
            width: 90%;
        }
    }
    
    .contact-description,
    .contact-links{
        flex-grow: 1;
        flex-basis: 50%;
    }
    
    .contact-description{
        background-color: var(--primary-blue);
    }
    
    .contact-description-container{
        width: 90%;
        margin: 15px auto;
        background: transparent;
    
        @media only screen and (min-width: 1024px) {
    
            width: 85%;
        }
    }
    
    .container-description-title,
    .container-description-description {
        background: transparent;
        color: var(--primary-background);
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 16px;
        line-height: 1.2;
        margin-top: 30px;
    
        @media only screen and (min-width: 1024px) {
    
            font-size: 20px;
        }
    }
    
    .container-description-title p{
    
        font-size: 35px;
        line-height: 1;
        font-weight: bold;
    
        @media only screen and (min-width: 1024px) {
    
            font-size: 55px;
        }
    
    }
    
    .tags {
        background: transparent;
        display: flex;
        flex-direction: row;
        gap: 15px;
        flex-wrap: wrap;
        margin: 30px 0;
    }
    
    .tags p {
        color: var(--primary-background);
        border: 1px solid var(--primary-background);
        border-radius: 10px;
        padding: 1px 5px;
    }
    
    .contact-links{
        background-color: var(--primary-blue);
        
    }
    
    .contact-link-container{
        width: 90%;
        margin: 15px auto;
        background: transparent;
        display: flex;
        flex-direction: column;
        gap: 15px;
    
        @media only screen and (min-width: 1024px) {
    
            width: 85%;
            gap: 50px;
        }
    }
    
    .follow{
        background: transparent;
    }
    
    .direct-contact{
        background: transparent;
        border-top: 1px solid var(--primary-background);
        
    
    }
    
    .contact-link-container a{
        font-size: 25px;
        text-align: center;
        color: var(--primary-background);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 15px 0;
        
    
        @media only screen and (min-width: 1024px) {
           
            font-size: 55px;
            cursor: pointer;
        }
    
        &:hover{
            transform: scale(1.01);
            color: var(--primary-grey);
        }
    }
    
    </style>