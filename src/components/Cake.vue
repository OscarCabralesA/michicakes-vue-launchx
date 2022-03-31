<template>
    <a href="#">
        <div class="grid-item">
            <img class="cake-img" :src="require(`@/assets/img/${imgName}`)" :alt="imgAlt">
            <br>
            <p class="cake-name">{{name}}</p>
            <p class="cake-cost">{{cost}}</p>
        </div>
    </a>
</template>

<script>
export default {
    name: 'Cake', 
    props: {
        imgName: String,
        imgAlt: String,
        name: String,
        cost: String, 
    }
}
</script>

<style>
.grid-item{
    /*border: 1px solid rgba(0, 0, 0, 0.8);*/
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    text-align: center;
}

.grid-item:hover{
    background-color:rgb(252, 239, 252);
    box-shadow: inset;
}

.cake-img{
    width: 200px;
    height: 185px;
}

.cake-name{
    color: orange;
    font-weight: bold;
    text-decoration: none;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.cake-name:hover{
    text-decoration: underline orange;
}

.cake-cost{
    color: black;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>