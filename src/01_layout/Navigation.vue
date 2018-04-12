<template>
    <nav class="nav nav--main">
        <ul>
            <li class="nav__item nav__item--left heading--6" v-if="isBack">
                <router-link :to="{name: 'home'}">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.29 57.62">
                            <path d="M36.31,5.66,31.43,0,1.3,26a3.74,3.74,0,0,0,0,5.66l30.14,26L36.32,52,13.79,32.55h85.5V25.08H13.79Z"/>
                        </svg>
                    </span>
                    <span>Back</span>
                </router-link>
            </li>
            <li class="nav__item nav__item--right heading--6" >
                 <router-link :to="{name: 'about'}">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isBack: false
        }
    },
    props: ['stories'],
    mounted() {
        this.isBack = this.$route.meta.back
    },
    watch: {
        '$route' (to, from) {
            this.isBack = to.meta.back;
        }
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
            margin: 4rem 6rem;
            width: calc(100% - 12rem);
        }

        &__item {
            position: absolute;
            top: 0;

            span {
                display: inline-block;
                vertical-align: middle;

                &:first-child {
                    width: 2rem;
                    margin-right: 1rem;
                }
            }

            &--left {
                left: 0;
            }

            &--right {
                right: 0;
            }
        }
    }
</style>
