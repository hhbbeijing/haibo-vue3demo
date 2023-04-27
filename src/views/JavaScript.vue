<template>
    <div class="about">
      <h1>Title : {{ h1Message }}</h1>
      <!-- 原始 HTML \ 简写语法-->
      <p v-bind:id="id">{{ rawHtml }}</p>
      <span v-html="rawHtml" :id="id"></span>
      <!-- boolean -->
      <Button :disable="isButtonDisable">Button</Button>
      <!--
        JavaScript 表达式可以被使用在如下场景上：
            在文本插值中 (双大括号)
            在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中
      -->
      <Button :disable="isButtonDisable">{{ isButtonDisable ? "disable : true" : "disable : false" }}</Button>
      <!-- 调用函数 -->
      <span>{{ getDate() }}</span>
      <!-- 计算属性 默认是只读的 -->
      <span>{{ '计算属性缓存及更新：' +  getSpanResult}}</span>
      <button @click="clickNumberPlus">计算属性</button>
      <!-- 可写方式 -->
      <span>{{ '计算属性 可写：' +  fullName}}</span>
      <button @click="clickNumberPlusWrite">计算属性可写</button>
      <span>{{ '计算属性 另一种写法：' +  fullNameOther}}</span>
      <span>{{ '浮点数：' + (0.1 + 0.2) }}</span>
      <span>{{ '变量初始化之函数：' +formData.formId }}</span>
      <p><input v-model="question"/></p>
      <p>{{ answer }}</p>
        <!-- 语法糖之 箭头函数 -->
        <button @click="sugerFun">语法糖之 箭头函数 </button>
        <!-- 对象字面量是指以{}形式直接表示的对象 -->
        <button @click="objectFun">语法糖之 对象字面量 </button>
        <!-- async -->
        <button @click="asyncFun">async </button>
        <!-- async await-->
        <button @click="asyncAwaitFun">async awati</button>
        <!-- Promise all-->
        <button @click="promiseAllFun">Promise.all-</button>
        <!-- Promise race-->
        <button @click="promiseRaceFun">Promise.race-</button>
        <!-- 枚举 -->
        <button @click="meijuFun">枚举</button>
        <!-- === == -->
        <button @click="equalClick"> 0 === "0"</button>
    </div>
</template>
<script>
import { nextTick } from 'vue';
import { funJiantou, standradFun, shapeFlags } from './javascript.js';
    function initFormData(){
        return {
            formId: 'formId',
            formName: 'formName'
        }
    }
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay));



export default {
        data() {
            return {
                h1Message: "This is an JavaScript page",
                id: 'This is id.',
                rawHtml: "<span style='color: red'>This should be red.</span>",
                isButtonDisable: false,
                spanID: 0,
                firstName: 'han',
                lastName: 'haibo',
                formData: new initFormData(),
                question: '请提问',
                answer: '答案'
            }
        },
        computed: {
            getSpanResult(){
                return this.spanID;
            },
            fullName: {
                get() {
                    return this.firstName + ' ' + this.lastName;
                },
                set(newValue) {
                    [this.firstName, this.lastName] = newValue.split(' ');
                }
            },
            fullNameOther() {
                return this.firstName + ' ' + this.lastName;
            } 

        },
        watch: {
            question(newValue, oldValue){
                if (newValue.includes('?')) {
                    this.getAnswer();
                }
            }
        },
        methods: {
            getDate() {

                return (new Date());
            },
            clickNumberPlus() {
                this.spanID++
                this.getSpanResult = 1000
            },
            clickNumberPlusWrite() {
                this.fullName = 'han haibo' + this.spanID++;
            },
            async getAnswer() {
                this.answer = 'Thinking...'
                try {
                    const res = await fetch('https://yesno.wtf/api')
                    this.answer = (await res.json()).answer
                } catch (error) {
                    this.answer = 'Error! Could not reach the API. ' + error
                }
            },
            sugerFun() {
                funJiantou("这是一个箭头函数！");
                standradFun("标准函数！");
            },
            objectFun() {
                //对象字面量是指以{}形式直接表示的对象
                let student = {name: "Xiao ming", age: 18}
                let teacher = ['teacher Li','teacher Wang']
                let teg01 = {studentKey: student,teacherKey: teacher}
                console.log(JSON.stringify(teg01))
                let teg02 = {student, teacher}
                console.log(JSON.stringify(teg02))
                //对象解构
                let name = student.name
                let { age } = student.age
                console.log('对象解构：name : ' + name + ' , age : ' + age)
            },
            async logAsync() {
                return "async 返回一个Promise对象!"
            },
            asyncFun(){
                console.log(this.logAsync());
                this.logAsync().then(e => {
                    console.log("then : " + e)
                })
                // console.log('这是一个async 异步函数')
                // new Promise.resolve(
                //     console.log('async 函数一定会返回一个 promise 对象。如果一个 async 函数的返回值看起来不是 promise，那么它将会被隐式地包装在一个 promise 中。')
                // );
            },
            numTimeOut() {
                return new Promise(resolve => {
                    setTimeout(() => resolve("timeout"),1000)
                })
                //return "timeout......"
            },
            async asyncAwaitFun() {
                console.log('start....')
                const e = await this.numTimeOut();
                console.log(e)
                console.log('end....')
            },
            promiseAllFun() {
                let promise1 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 1500, 'one');
                });

                let promise2 = new Promise((resolve, reject) => {
                    setTimeout(reject, 5000, 'two...');
                });
                Promise.all([promise1, promise2]).then(([value1,value2]) => {
                    console.log('e:'+value1+"----value2:"+value2);
                    // Both resolve, but promise2 is faster
                }).catch((val) => {
                    console.log("catch:"+val)
                });
            },
            promiseRaceFun() {
                let promise1 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 1500, 'one');
                });

                let promise2 = new Promise((resolve, reject) => {
                    setTimeout(reject, 500, 'two...');
                });
                Promise.race([promise1, promise2]).then(response =>
                    console.log('race then :'+response)
                ).catch(error =>
                    console.log('error:'+error)
                )
            },
            meijuFun() {
                console.log("eat : " + shapeFlags.EAT)
                console.log("DRINK : " + shapeFlags.DRINK)
                console.log("SLEEP : " + shapeFlags.SLEEP)
            },
            equalClick(){
                console.log(" 0 === '0' : " + (0 === '0'))
                console.log(" 0 == '0' : " + (0 == '0'))
            }

        }
    }
</script>
<style>
    @media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>