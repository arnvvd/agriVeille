<template>
    <div class="loader">
        <img src="static/assets/images/loader.gif" alt="Loader example">
    </div>
</template>

<style lang="scss">
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fec801;
        z-index: 100;

        img {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 30rem;
            transform: translate(-50%, -50%);
        }  
    }
</style>