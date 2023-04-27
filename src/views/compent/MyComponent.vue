<template>
    <div>
        <slot :text="message" :count="100"></slot>
        <header>
            <slot name="header" message="header-message"></slot>
        </header>
    </div>
</template>

<script>
export default {
    name: "MyComponent.vue",
    data() {
        return {
            message: "消息"
        }
    }
}
</script>

<style scoped>

</style>