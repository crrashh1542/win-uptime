<script setup>
defineOptions({ name: 'WidgetCatalog' })
</script>

<template>
    <div class="catalog text-2xl my-3 font-medium">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
@import url('@s/global.less');

.catalog {
    color: @wu-color-text-imp;
    margin-bottom: 10px;
}
</style>
