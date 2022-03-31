<template>
  <Header/>
  <NavVar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import NavVar from './components/NavVar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App', 
  components: {
    Header,
    NavVar,  
    Footer
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/

*{
    /*font-family: Arial, Helvetica, sans-serif;*/
    margin: 0;
}

body{ 
    height:100vh;
    margin:0; 
    margin-bottom: 5%;
}


header{
    background-color: rgb(241, 226, 229);
    height: 110px;
    position: sticky;
    top: 0;
}



h2{
    text-align: center;
    text-decoration: underline;
    font-size: 32px;
}

h3{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 550;
    font-size: 18px;
}

a{
    color: inherit;
}

a:link{
    text-decoration: none;
}

button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    border: 0;
    border-radius: 12%;
    background-color: rgb(228, 200, 140);
    cursor: pointer;
}

button:hover{
    background-color: rgb(224, 186, 104);

}

.info-sentence{
    color: gray;
    font-size: 14px;
    font-weight: 300;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
