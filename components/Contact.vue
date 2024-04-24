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
                        <p>En ISC, estamos listos para ayudarte a llevar tus ideas a la realidad. Ponte en contacto con
                            nostros para cotizar tu proyecto.</p>
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

                        <a class="button" href="#" target="_blank">
                            <div class="social-name">
                                <span class="mdi mdi-linkedin"></span>
                                <span>Linkdln</span>
                            </div>
                            <div>
                                <span class="mdi mdi-arrow-right-thin"></span>
                            </div>
                        </a>

                        <a class="button" href="#" target="_blank">
                            <div class="social-name">
                                <span class="mdi mdi-facebook"></span>
                                <span>Facebook</span>
                            </div>
                            <div>
                                <span class="mdi mdi-arrow-right-thin"></span>
                            </div>
                        </a>

                        <a class="button" href="#" target="_blank">
                            <div class="social-name">
                                <span class="mdi mdi-instagram"></span>
                                <span>Instagram</span>
                            </div>
                            <div>
                                <span class="mdi mdi-arrow-right-thin"></span>
                            </div>
                        </a>
                    </v-sheet>

                    <v-sheet class="direct-contact">

                        <a class="button" href="#" target="_blank">
                            <div class="social-name">
                                <span class="mdi mdi-email"></span>
                                <span>Email</span>
                            </div>
                            <div>
                                <span class="mdi mdi-arrow-right-thin"></span>
                            </div>
                        </a>
                    </v-sheet>
                </v-sheet>

            </v-sheet>

        </v-sheet>
    </v-sheet>
</template>

<script setup>

</script>

<style scoped>
.contact {
    background-color: var(--primary-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        min-height: 70vh;
    }
}

.contact-container {
    width: 90%;

    display: flex;
    flex-direction: column;
    margin: 20px 0;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;

    }
}

.contact-description,
.contact-links {
    flex-grow: 1;
    flex-basis: 50%;
}

.contact-description {
    background-color: var(--secondary-blue);
}

.contact-description-container {
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
    font-size: 14px;
    line-height: 1.2;
    margin-top: 30px;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;
    }
}

.container-description-title p {

    font-size: 25px;
    line-height: 1;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {

        font-size: 30px;
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

.contact-links {
    background-color: var(--secondary-grey);

}

.contact-link-container {
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

.follow {
    background: transparent;
}

.direct-contact {
    background: transparent;
    border-top: 1px solid var(--primary-background);


}

.contact-link-container a {
    font-size: 25px;
    text-align: center;
    color: var(--primary-background);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;


    @media only screen and (min-width: 1024px) {

        font-size: 30px;
        cursor: pointer;
    }

    &:hover {
        transform: scale(1.01);
        color: var(--primary-grey);
    }
}

.social-name{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>