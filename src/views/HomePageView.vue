<template>
    <div style="display: flex;flex-direction: column;">
        <!-- 标题 -->
        <div class="title">
            <div class="title-content">
                <div class="div-left">
                    <img alt="logo" src="@/assets/logo.svg" width="25" height="25" />
                    <span style="color: #4285f4;font-weight: normal;">即</span>
                    <span style="color: #ea4335;font-weight: normal;">刻</span>
                    <span style="color: #fbbc05;font-weight: normal;">收</span>
                    <span style="color: #34a853;font-weight: normal;">藏</span>
                </div>
                <div class="div-middle">
                    <el-tabs v-model="tabsName" @tab-click="tabsClickHandle">
                        <el-tab-pane v-for="(item,key) in tabsList" :key="key" :label="item.label" :name="item.name"></el-tab-pane>
                    </el-tabs>
                </div>
                <div>
                    <el-button type="primary">登录</el-button>
                </div>
            </div>

        </div>
        <!-- 内容 -->
        <div style="width: 100%;height: 50%;align-items: flex-start;justify-content: center;display: flex;flex-direction: column">
            <div class="div-title">网站导航</div>
            <div>
                <el-table :stripe="true" :data="tableData" :show-header="false" :row-class-name="tableRowClassName">
                    <el-table-column v-for="(item,index,key) in tableHeader"
                                     :key="key"
                                     :label="item.labelHeader"
                                     align="center"
                                     min-width="120px"
                                     :row-class-name="tableRowClassName">
                        <template v-slot="{ row }">
                            <a class="a-href" :href="row[item.href]" target="_blank">{{ row[item.prop] }}</a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePageView.vue",
    data() {
        return {
            elInput: null,
            tabsName: 1,
            tabsList:[{name: 1, label: "工作"},{name: 2, label: "生活 ~-~"},{name: 3, label: "其他"}],
            tableHeader: [{labelHeader:"data1",prop:"data1"},
                {labelHeader:"data2",prop:"data2",href:"data1href"},
                {labelHeader:"data3",prop:"data3",href:"data2href"},
                {labelHeader:"data4",prop:"data4",href:"data3href"},
                {labelHeader:"data5",prop:"data5",href:"data4href"},
                {labelHeader:"data6",prop:"data6",href:"data5href"},
                {labelHeader:"data7",prop:"data7",href:"data6href"},
                {labelHeader:"data8",prop:"data8",href:"data7href"},
                {labelHeader:"data9",prop:"data9",href:"data8href"}],
            tableData:[{data1: "百度", data1href: "https://www.baidu.com",
                data2: "百度", data2href: "https://www.baidu.com",
                data3: "百度", data3href: "https://www.baidu.com",
                data4: "百度", data4href: "https://www.baidu.com",
                data5: "百度", data5href: "https://www.baidu.com",
                data6: "百度", data6href: "https://www.baidu.com",
                data7: "百度", data7href: "https://www.baidu.com",
                data8: "百度", data8href: "https://www.baidu.com",
                data9: "百度", data9href: "https://www.baidu.com"},
                {data1: "百度", data1href: "https://www.baidu.com",
                    data2: "百度", data2href: "https://www.baidu.com",
                    data3: "百度", data3href: "https://www.baidu.com",
                    data4: "百度", data4href: "https://www.baidu.com",
                    data5: "百度", data5href: "https://www.baidu.com",
                    data6: "百度", data6href: "https://www.baidu.com",
                    data7: "百度", data7href: "https://www.baidu.com",
                    data8: "百度", data8href: "https://www.baidu.com",
                    data9: "百度", data9href: "https://www.baidu.com"},
                {data1: "百度", data1href: "https://www.baidu.com",
                    data2: "百度", data2href: "https://www.baidu.com",
                    data3: "百度", data3href: "https://www.baidu.com",
                    data4: "百度", data4href: "https://www.baidu.com",
                    data5: "百度", data5href: "https://www.baidu.com",
                    data6: "百度", data6href: "https://www.baidu.com",
                    data7: "百度", data7href: "https://www.baidu.com",
                    data8: "百度", data8href: "https://www.baidu.com",
                    data9: "百度", data9href: "https://www.baidu.com"},
                {data1: "百度", data1href: "https://www.baidu.com",
                    data2: "百度", data2href: "https://www.baidu.com",
                    data3: "百度", data3href: "https://www.baidu.com",
                    data4: "百度", data4href: "https://www.baidu.com",
                    data5: "百度", data5href: "https://www.baidu.com",
                    data6: "百度", data6href: "https://www.baidu.com",
                    data7: "百度", data7href: "https://www.baidu.com",
                    data8: "百度", data8href: "https://www.baidu.com",
                    data9: "百度", data9href: "https://www.baidu.com"}]
        }
    },
    methods: {
        tabsClickHandle() {

        },
        tableRowClassName({row,rowIndex}){
            if (rowIndex % 4 === 2) {
                return 'warning-row'
            } else if (rowIndex % 4 === 0) {
                return 'success-row'
            }
            return ''
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__item {
    font-size: 20px;
}
.title {
    z-index: 99999999;
    position: fixed;
    top: 0;
    left: 0;
    width: 99vw;
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
    box-shadow: 0px 1px 8px #c7c7c7;
}
.title-content{
    width: 100%;
    display: flex;
    margin: 0 50px 0 50px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

}
.div-left{
    display: flex;
    justify-content: center;
    align-items: center;
}
.div-middle{
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 10px;
}
.div-right{

}
.a-href{
    color: black;
    background-color: transparent;
    &:link{
        color: black;
        background-color: transparent;
    }
    &:hover{
        color: #4285f4;
        background-color: transparent;
    }
    &:active{
        color: #4285f4;
        background-color: transparent;
    }
}
.div-title {
    color: #2e3440;
    font-size: 16px;
    font-weight: bold;
    height: 16px;
    line-height: 16px;
    border-left: 3px solid #00C3AC;
    padding-left: 14px;
    margin-bottom: 20px;
}
</style>