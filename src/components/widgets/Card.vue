<script setup>
// 接收 mode 参数，若是 section 则为块级元素，否则为内联元素
const props = defineProps(['mode'])
let mode = props.mode
if (mode !== 'section'){ mode = '' }
</script>

<template>
    <div :class="'card ' + mode">
        <slot></slot>
    </div>
</template>

<style lang="less">
@import url('@/styles/global.less');

.card {
    display: inline-block;
    margin: 3px 0;
    padding: 18px calc(12px + 1.2%);
    line-height: 1.2;
    border-radius: @wu-layout-radius;
    background-color: @wu-color-main;
    border: 1px solid #e6e6e6;
    font-size: 18px;
}
.card.section {
    display: block;
}
</style>
