<template>
    <div>
        <!-- 标题 -->
        <div class="title">
            <div class="title-content">
                <div class="div-left">
                    <img alt="logo" src="@/assets/logo.svg" width="25" height="25" />
                    <span>即刻收藏</span>
                </div>
                <div class="div-middle">
                    <el-button type="text">分类1</el-button>
                    <el-button type="text">分类2</el-button>
                </div>
                <div>
                    <el-button type="text">登录</el-button>
                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: "HomePageView.vue"
}
</script>

<style lang="scss" scoped>
.title {
    z-index: 99999999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 88px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease-in 0s;
    background-color: rgba(255, 255, 255, 0.94);
    backdrop-filter: saturate(250%) blur(14px) brightness(100%);
    box-shadow: none;
}
.title-content{
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

}
.div-left{

}
.div-middle{
    display: flex;
    flex: 1;
}
.div-right{

}
</style>