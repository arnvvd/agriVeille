<template>
    <nav class="nav nav--main">
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
                <router-link :to="{name: 'about'}">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .nav {
        &--main {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
        }
    }
</style>