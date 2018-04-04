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
                <!-- {{https://gist.github.com/mathewbyrne/1280286}} -->
                <router-link :to="{
                    name: 'article', 
                    params: { 
                        storyTitle: item.title.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
                    }
                }">{{item.title}}</router-link>
                
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: ['stories'],
  mounted() {
      console.log(this.stories);
  }
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