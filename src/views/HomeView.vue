<template>
    <h2>Pasteles</h2>
    <section class="grid-container">
        <Cake name="RED VELVET" cost="$380.00" imgName="pastel-red-velvet.png" imgAlt="Pastel Red Velvet" />
        <Cake name="CHOCOLATE" cost="$375.00" imgName="pastel-chocolate.png" imgAlt="Pastel chocolate"/>
        <Cake name="MOKA" cost="$375.00" imgName="pastel-moka.png" imgAlt="Pastel Moka"/>
        <Cake name="NUEZ" cost="$375.00" imgName="pastel-nuez.png" imgAlt="Pastel Nuez"/>
        <Cake name="QUESO" cost="$270.00" imgName="pastel-queso.png" imgAlt="Pastel Queso"/>
        <Cake name="ZANAHORIA" cost="$395.00" imgName="pastel-zanahoria.png" imgAlt="Pastel Zanahoria"/>
        <Cake name="BESOS DE FRESA" cost="$270.00" imgName="pastel-besos-fresa.png" imgAlt="Pastel Besos de Fresa"/>
        <Cake name="YOGURT DE FRESA" cost="$300.00" imgName="pastel-yogurt-fresas.png" imgAlt="Pastel Yogurt de Fresa"/>
    </section>

    <section class="map-section">
        <div>
            <h3>Ubícanos</h3>
            <p class="info-sentence">Av. Camino a Bosque de San Isidro # 1475-A10, Bosques del Centinela II, 45133 Zapopan, Jal.</p>
            <br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.0749578873956!2d-103.38539931482599!3d20.75454737880013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af8af07cff5b%3A0xf93fdf4dea19246e!2sNeufeld%20-%20Ca%C3%B1adas!5e0!3m2!1sen!2smx!4v1646510918877!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">    </iframe>
        </div>
    </section>
    
</template>
  
<script>
// @ is an alias to /src

import Cake from '../components/Cake.vue'

export default {
  name: 'HomeView', 
  components: {
    Cake,
  },

  
}
</script>


<style>
.grid-container {
    /*border:1px solid rgb(53, 52, 51);*/
    display: flex;
    height: fit-content;
    width: 60%;
    /*margin: 10%;*/
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    transform: translate(33%);
  }
  


.map-section{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>