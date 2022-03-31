<template>
    <section >
        <div class="baker-orders">
            <table>
                <tr>
                    <th>NOMBRE</th>
                    <th>TELÉFONO</th>
                    <th>CORREO</th>
                    <th>MENSAJE</th>
                    <th>SABORES</th>
                    <th>ADORNOS</th>
                    <th>ADICIONAL</th>
                </tr>
                <tr>
                    <td>Carlos Sánchez</td>
                    <td>3339026423</td>
                    <td>carlowo@gmail.com</td>
                    <td>"Feliz Cumpleaños!"</td>
                    <td>Chocolate<br>Besos Fresa</td>
                    <td>Fresas</td>
                    <td>Las fresas en rodajas, por favor</td>
                </tr>
                <tr>
                    <td>Fernanda Martinez</td>
                    <td>3349056424</td>
                    <td>fermar54@gmail.com</td>
                    <td>"50 años!"</td>
                    <td>Red Velvet<br>Zanahoria</td>
                    <td>Chocolate rallado</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>Karen Valdez</td>
                    <td>3315619532</td>
                    <td>karkar3354@hotmail.com</td>
                    <td>"FELICIDADES"</td>
                    <td>Nuez<br>Moka</td>
                    <td>Figuras de betún</td>
                    <td>Que las figuras sean corazones</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'OrdersTable', 
    components: {
        
    }
}
</script>

<style>
table {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: fit-content;
    border: 3px solid rgb(148, 88, 9);
    border-collapse: collapse;
}
th, td {
    padding: 10px;
    border: 1px solid rgb(148, 88, 9);
}

.baker-orders{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
}
</style>