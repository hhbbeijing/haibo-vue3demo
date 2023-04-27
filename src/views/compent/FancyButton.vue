<template>
    <button type="submit">
        <!-- <slot> 元素是一个插槽出口 (slot outlet)，标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染。 -->
        <slot>默认内容</slot>
    </button>
</template>

<script>
export default {
    name: "FancyButton.vue"
}
</script>

<style scoped>

</style>