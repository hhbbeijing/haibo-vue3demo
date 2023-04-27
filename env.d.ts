/// <reference types="vite/client" />
//定义 .vue文件的类型
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}
