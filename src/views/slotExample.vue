<template>
    <div class="about">
        <h1>插槽简介</h1>
        <!-- 默认内容 -->
        <FancyButton></FancyButton>
        <FancyButton>点击按钮</FancyButton>
        <!-- 具名插槽 有以下两种写法-->
        <BaseLayout>
            <template v-slot:header>
                <span>填充header内容</span>
            </template>
<!--            <span>这是隐式的默认插槽写法。但请使用以下方式，填充默认内容，方便管理</span>-->
            <template #default>
                <span>填充默认内容，default</span>
            </template>
            <template #footer>
                <span>填充footer内容</span>
            </template>
        </BaseLayout>
        <!-- 具名插槽 动态插槽名-->
        <BaseLayout>
            <template v-slot:[dynamicSlotName]>
                <span>动态插槽名</span>
            </template>
        </BaseLayout>
        <!-- 作用域插槽 -->
        <my-component v-slot="slotProps">
            {{slotProps.text}}{{slotProps.count}}
        </my-component>
        <!-- 作用域插槽 解构-->
        <p>作用域插槽 解构：</p>
        <my-component #default="{ text, count}">
            {{text}}{{count}}
        </my-component>
        <my-component>
            <template #header="headerProps">
                {{headerProps}}
            </template>
        </my-component>
        <my-component>
            <template v-slot:header="headerProps">
                {{headerProps.message}}
            </template>
        </my-component>
        <div>
            <svg-icon icon="http://www.yygnb.com/demo/car.svg"></svg-icon>
            <svg-icon :class-name="`svg-icon-15`" icon="icon_menu_activation"></svg-icon>
        </div>

    </div>
</template>

<script>
import FancyButton from "./compent/FancyButton.vue";
import BaseLayout from "@/views/compent/BaseLayout.vue";
import MyComponent from "@/views/compent/MyComponent.vue";
import svgIcon from"@/components/svg-icon/index.vue"
export default {
    name: "slotExample.vue",
    components:{
        FancyButton,
        BaseLayout,
        MyComponent,
        svgIcon
    },
    data() {
        return{
            dynamicSlotName: "header"
        }
    },
    methods: {

    }

}
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

</style>