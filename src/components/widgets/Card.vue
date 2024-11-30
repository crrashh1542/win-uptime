<script setup>
defineOptions({ name: 'WidgetCard' })
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="less">
@import url('@/styles/global.less');

.card {
    display: block;
    margin: 3px 0;
    padding: 18px calc(12px + 1.2%);
    line-height: 1.2;
    border-radius: @wu-layout-radius;
    background-color: @wu-color-main;
    border: 1px solid #e6e6e6;
    font-size: 18px;
}
</style>
