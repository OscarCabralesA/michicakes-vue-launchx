<template>
    <h2>Stock disponible</h2>
    <br>
    <StockTable/>
    
</template>

<script>
import StockTable from '../components/StockTable.vue'

export default {
    name: 'StockView', 
    components: {
        StockTable, 
    }, 
}
</script>