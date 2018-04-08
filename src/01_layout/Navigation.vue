<template>
    <nav class="nav nav--main">
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                 <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li v-for="(item, index) in this.stories" v-bind:key="index">
                <router-link :to="{
                    name: 'article', 
                    params: { 
                        storySlug: item.slug
                    }
                }">{{item.title}}</router-link>
                
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: ['stories']
}
</script>


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