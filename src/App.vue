<script>
// Crrashh1542 does not exist at all!

import '@s/reset.less'
import 'normalize.css/normalize.css'
// import { toRefs, reactive } from 'vue'

import Wrapper from './components/Wrapper.vue'
// import Foo from './components/Footer.vue'
// import Setting from './components/Setting.vue'

export default {
    name: 'App',
    // components: { Appbar, Foo, Setting, Navbar },
    components: { Wrapper },
    // setup() {
    //     // STEP1 ------ 设置卡片显示的初始值，避免出现 undefined
    //     let [oriFlightVisibility, oriBranchVisibility] = [true, true]
    //     let data = reactive({
    //         isShowFlight: oriFlightVisibility,
    //         isShowBranch: oriBranchVisibility,
    //     })
    //     let [flightVisibility, branchVisibility] =  
    //             [oriFlightVisibility, oriBranchVisibility]

    //     // 切换显示状态
    //     function setState(emitData) {
    //         // STEP2 ------ 获取子组件传递的信息 和 App 的 data 信息，0 是类型，1 是值
    //         let [stateType, stateValue] = [emitData[0], emitData[1]]

    //         // STEP3 ------ 判断类型并改变值
    //         if (stateType === 'isShowFlight') {
    //             flightVisibility = stateValue
    //         } else if (stateType === 'isShowBranch') {
    //             branchVisibility = stateValue
    //         }

    //         // STEP4 ------ 对 data 数据做出替换
    //         data.isShowFlight = flightVisibility
    //         data.isShowBranch = branchVisibility

    //         // console.log('flight ', data.isShowFlight, '\nbranch ', data.isShowBranch)
    //     }
    //     return { ...toRefs(data), setState }
    // },
}
</script>

<template>
    <Wrapper>
        <router-view></router-view>
    </Wrapper>
</template>

<style lang="less">
</style>
