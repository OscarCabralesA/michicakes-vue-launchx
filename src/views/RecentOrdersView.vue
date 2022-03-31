<template>
    <OrdersTable/>
</template>


<script>
import OrdersTable from '../components/OrdersTable.vue'

export default {
    name: 'RecentOrdersView', 
    components: {
        OrdersTable
    }
}
</script>