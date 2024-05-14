<template>
    <div class="proyecto">

        <div class="proyecto-heading">
            <div class="proyecto-tittle">
                <h1>Park On the Roof</h1>
            </div>

            <div class="proyecto-small-description">

                <p>The design and layout of a Park On the Roof play a crucial role in creating a harmonious living
                    environment. Factors such as natural lighting, ventilation, and spatial flow contribute to the
                    overall ambiance and functionality of the build.</p>

            </div>
        </div>

        <div class="proyecto-image">
            <img :src="edificio3" alt="Imagen Sobre Nosotros" loading="lazy"/>
        </div>

        <div class="proyecto-data">
            <div class="proyecto-details">

                <div>
                    <p>Ubicación: </p>
                    <h2>Monterrey, Nuevo León</h2>
                </div>
                <div>
                    <p>Fecha: </p>
                    <h2>Agosto, 2018</h2>
                </div>
                <div>
                    <p>Cliente: </p>
                    <h2>Sean O'Malley</h2>
                </div>
                
            </div>

            <div class="proyecto-data-small-description">

                <p>"Park On the Roof" - A residential or commercial project in New York City that is expected to be completed in 2016 for a client named Max Twinks.

                    The design and layout of a Park On the Roof play a crucial role in creating a harmonious living environment. Factors such as natural lighting, ventilation, and spatial flow contribute to the overall ambiance and functionality of the build.</p>

            </div>
        </div>

        <div class="proyecto-html">

            <div class="proyecto-html-text">
                <h2>Experience Nature's Oasis At The Park On The Roof.</h2>

                <p>A Green Paradise: As you step into Park On the Roof, prepare to be embraced by a vibrant tapestry of greenery. The park boasts meticulously landscaped gardens, verdant lawns, and a diverse range of flora that create a refreshing atmosphere. Take leisurely strolls along winding pathways, breathe in the crisp air, and let the soothing sounds of nature envelop your senses.</p>
    
                <p>Serene Relaxation: Find your own peaceful sanctuary amidst the hustle and bustle of the city. Park On the Roof offers ample seating areas where you can unwind, read a book, or simply soak up the sun's warm rays. Lounge on comfortable benches, lounge chairs, or picnic blankets, and let the tranquility of the surroundings wash away your stress, allowing you to rejuvenate both body and mind.</p>
    
                <p>Recreational Delights: The park is not just a place for relaxation but also a hub for recreational activities. Engage in friendly games of frisbee, practice yoga on the open grassy areas, or challenge friends to a game of badminton. Park On the Roof provides ample space for outdoor activities, ensuring that there is something for everyone to enjoy.</p>

                <img :src="edificio6" alt="Imagen Sobre Nosotros" loading="lazy"/>
    
                <p>Botanical Wonders: Delve into a world of botanical wonders as you explore the park's dedicated gardens and themed areas. From vibrant flower beds to aromatic herb gardens, each section showcases the beauty and diversity of plant life. Learn about different species, admire the colorful blooms, and discover the tranquility that comes from being in the presence of nature's bounty.</p>
            </div>
            
        </div>

        <!-- <myProyectosRecientes/> -->
    </div>
</template>

<script setup>
import edificio3 from 'assets/edificio-1.webp';
import edificio6 from 'assets/edificio-9.webp'
// import myProyectosRecientes from '../components/ProyectosRecientes.vue';
</script>

<style>
.proyecto {
    background-color: var(--primary-background);
}

.proyecto-heading, .proyecto-data {
    max-width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 768px) {

        flex-direction: row;
        max-width: 70%;

    }
}

.proyecto-tittle,
  .proyecto-small-description, .proyecto-details, .proyecto-data-small-description {
    flex: 1; /* Ambos elementos ocuparán el 50% del espacio disponible */
  }

  .proyecto-details{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .proyecto-details div{
    display: flex;
    flex-direction: row;
    gap: 15px;
    border-bottom: 1px solid gray;
  }

  .proyecto-details div h2{
    font-weight: bold;
  }

  .proyecto-heading h1{
    font-size: 30px;
    font-weight: bold;
    color: var(--secondary-blue);
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 45px;
    }
  }

   .proyecto-heading p {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.proyecto-image{
    max-width: 90%;
    max-height: 500px;
    margin: 30px auto;
    overflow: hidden;
}

.proyecto-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.proyecto-html{
    background-color: var(--secondary-blue);
}

.proyecto-html-text{
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 35px 0;
    line-height: 1.5;

    @media (min-width: 768px) {
        max-width: 70%;

    }
}

.proyecto-html-text h2{
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.proyecto-html-text p{
    color: white;
}
</style>