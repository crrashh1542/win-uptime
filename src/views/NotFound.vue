<script setup>
import Button from '../components/widgets/Button.vue'

defineOptions({ name: 'ViewNotFound' })
document.title = '404 / Windows Up-to-Date'

function goBack(){
    this.$router.back(-1)
}
function goHome(){
    this.$router.push('/')
}
</script>

<template>
    <div class="error">
        <h1>404 NOT Found</h1>
        <p>( > < )&nbsp;&nbsp;Error！这样我会出现困扰的！</p><br/>
        <p>
            <Button @click="goBack">返回上级</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button @click="goHome">回到主页</Button>
        </p>
    </div>
</template>

<style lang="less" scoped>
.error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 1.5;
}
</style>