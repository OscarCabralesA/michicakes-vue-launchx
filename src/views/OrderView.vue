<template>
    <h2>Hacer Pedido</h2>
   
    <OrderForm />

</template>

<script>
import OrderForm from '../components/OrderForm.vue'

export default {
    name: 'OrderView', 
    components: {
        OrderForm,
    },
}
</script>
