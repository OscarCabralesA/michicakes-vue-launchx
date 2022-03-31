<template>
    <form  action="post">
        <section class="client-form-order">
            <div class="client-form-data">
                <label for="name">NOMBRE </label><br>
                <input class="input-text-etc" type="text" name="name" id="name"><br><br>
                <label for="phone">TELÉFONO </label><br>
                <input class="input-text-etc" type="number" name="phone" id="phone"><br><br>
                <label for="email">CORREO </label><br>
                <input class="input-text-etc" type="email" name="email" id="email"><br>
                
                <br>
                <label for="cake-message">Escribir mensaje en el pastel <br>(opcional)</label><br>
                <textarea name="cake-message" id="cake-message" cols="20" rows="3"></textarea>

            </div>

            
                
            <div class="client-form-data">
                <h3>Elige tu pastel</h3>
                <p class="info-sentence">Puedes seleccionar más de un sabor para combinarlos</p>
                <br>
                <input type="checkbox" name="pastel-red-velvet" id="pastel-red-velvet" value="pastel-red-velvet">
                <label for="pastel-red-velvet">RED VELVET</label>
                <br>
                <input type="checkbox" name="pastel-chocolate" id="pastel-chocolate" value="pastel-chocolate">
                <label for="pastel-chocolate">CHOCOLATE</label>
                <br>
                <input type="checkbox" name="pastel-moka" id="pastel-moka" value="pastel-moka">
                <label for="pastel-moka">MOKA</label>
                <br>
                <input type="checkbox" name="pastel-nuez" id="pastel-nuez" value="pastel-nuez">
                <label for="pastel-nuez">NUEZ</label>
                <br>
                <input type="checkbox" name="pastel-queso" id="pastel-queso" value="pastel-queso">
                <label for="pastel-queso">QUESO</label>
                <br>
                <input type="checkbox" name="pastel-zanahoria" id="pastel-zanahoria" value="pastel-zanahoria">
                <label for="pastel-zanahoria">ZANAHORIA</label>
                <br>
                <input type="checkbox" name="pastel-besos-fresa" id="pastel-besos-fresa" value="pastel-besos-fresa">
                <label for="pastel-besos-fresa">BESOS DE FRESA</label>
                <br>
                <input type="checkbox" name="pastel-yogurt-fresas" id="pastel-yogurt-fresas" value="pastel-yogurt-fresas">
                <label for="pastel-yogurt-fresas">YOGURT DE FRESA</label>
                <br>
                <br>
                <h3>Elige la decoración</h3>
                <p class="info-sentence">Puedes seleccionar más de una decoración</p>
                <br>
                <input type="checkbox" name="figuras-betun" id="figuras-betun" value="figuras-betun">
                <label for="figuras-betun">Figuras con betún</label>
                <br>
                <input type="checkbox" name="chocolate-rallado" id="chocolate-rallado" value="chocolate-rallado">
                <label for="chocolate-rallado">Chocolate rallado</label>
                <br>
                <input type="checkbox" name="Perlas" id="perlas" value="perlas">
                <label for="perlas">Perlas</label>
                <br>
                <input type="checkbox" name="fresas" id="fresas" value="fresas">
                <label for="fresas">Fresas</label>
                <br>
                <input type="checkbox" name="uvas" id="uvas" value="uvas">
                <label for="uvas">Uvas</label>
                <br>
                
            </div>
            <section class="client-form-data">
                <label for="additional-request">Petición adicional</label><br>
                <textarea name="additional-request" id="additional-request" cols="80" rows="3"></textarea>
                <br><br>
                <button type="button" name="submit-cake-order" id="submit-cake-order">HACER PEDIDO</button>
            </section>
            
        </section>
    </form>
</template>

<script>

export default {
    name: 'OrderForm', 
    components: {
         
    }
}
</script>

<style>
.input-text-etc{
    padding: 6px 10px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
}

textarea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    height: 70px;
    padding: 12px 12px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
}

.client-form-order{
    /*border: 1px solid black;*/

    display: flex;
    width: 40%;
    position: relative;
    left: 25%;
    padding: 3%;
    flex-wrap: wrap;
}

.client-form-data{
    /*border: 1px solid gray;*/
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    padding: 1.5%;
    width: fit-content;
    height: fit-content;
}
</style>