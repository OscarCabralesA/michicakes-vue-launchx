<template>
    <div class="navbar">
        <router-link to="/" class="navbar-element">INICIO</router-link>
        <router-link to="/hacer-pedido" class="navbar-element">HACER PEDIDO</router-link>
        <router-link to="/pedidos-recientes" class="navbar-element">PEDIDOS RECIENTES</router-link>
        <router-link to="/stock" class="navbar-element">STOCK</router-link>
    </div>
</template>

<script>

export default {
  name: 'NavVar',
  props: {

  }
}
</script>

<style>
.navbar{
    display: flex;
    justify-content:center;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navbar-element{
    margin: 15px;
    padding: 10px;
    color: brown;
    font-size: 20px;
}

.navbar-element:visited{
    color: brown;
}
.navbar-element:hover{
    background-color: beige;
}
</style>