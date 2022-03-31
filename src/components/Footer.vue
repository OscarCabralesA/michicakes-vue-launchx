<template>
        <footer >
            <div class="footer-item">
                
                <p>33-95-64-10-70</p>
                <p class="info-sentence">SERVICIO A DOMICILIO EN LA ZMG <br> LOS 365 DÍAS DEL AÑO</p>
                <br>
                <p>HORARIO DE ATENCIÓN 9:00 A 21:00</p>
            </div>
            <div class="footer-item">
                <a href="#">
                    <img class="footer-img" src="@/assets/img/facebook-icon.png" alt="Logo facebook">
                </a>
                <a href="#">
                    <img class="footer-img" src="@/assets/img/instagram-icon.png" alt="Logo instagram">
                </a>
            </div>
        </footer>
</template>
<style scoped>


footer{
    
    display: flex;

    width: 100%;
    min-height: 10%;

    padding: 1%;

    justify-content: space-between;
    
    align-items: center;
    background-color: #ecb66f;   
}

.footer-item{
    position: relative;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    color: rgb(53, 52, 51);
    width: fit-content;
    display: block;
}
.footer-img{
    max-width: 100%;
    width: 4%;
    margin-left: 3%;
    
}

.footer-img:hover{
    width: 4.25%;
}
</style>