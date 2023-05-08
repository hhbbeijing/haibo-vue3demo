<script setup lang="ts">
import { RouterLink, RouterView,  } from 'vue-router'
</script>

<template>
    <div>
        <transition name="el-fade-in-linear">
            <router-view :key="$route.fullpath" />
        </transition>
    </div>
<!--    <header>-->
<!--        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
<!--        <div class="wrapper">-->
<!--            <HelloWorld msg="You did it!" />-->
<!--            <nav>-->
<!--                <RouterLink to="/">Home</RouterLink>-->
<!--                <RouterLink to="/about">About</RouterLink>-->
<!--                <RouterLink to="/javaScript">javaScript</RouterLink>-->
<!--                <RouterLink to="/slotExample">Vue - 插槽</RouterLink>-->
<!--            </nav>-->
<!--        </div>-->
<!--    </header>-->

<!--    <RouterView />-->
</template>

<style scoped>

</style>
