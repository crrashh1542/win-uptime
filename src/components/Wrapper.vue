<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { version } from '../../package.json'
import Foo from './Footer.vue';

defineOptions({ name: 'MainWrapper' })
const appVersion = ref(version)
</script>

<template>
    <!-- Part 1 ---- 顶部导航栏 -->
    <div class="topbar">
        <div class="title">
            <span class="name">Windows Up-to-Date</span>&nbsp;
            <span class="version">v{{ appVersion }}</span>
        </div>
        <div class="u-grow"></div>
        <div class="setting">
            <Icon icon="fluent:settings-24-regular" />
        </div>
    </div>


        <!-- Part 2 ---- 左侧（移动端底部）导航栏 -->
        <div class="navbar">
            <router-link to="/" class="section">
                <Icon icon="fluent:tag-24-filled"></Icon>
                <div class="name">版本</div>
            </router-link>
            <router-link to="/category" class="section">
                <Icon icon="fluent:library-24-regular" />
                <div class="name">分类</div>
            </router-link>
            <router-link to="/about" class="section">
                <Icon icon="fluent:info-24-regular" />
                <div class="name">关于</div>
            </router-link>
        </div>

        <!-- Part 3 ---- 主体部分 -->
        <main>
            <div class="container">
                <slot />
            </div>
            <Foo />
        </main>

</template>

<style lang="less">
@import url('@s/reset.less');

.topbar {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 2 * 14px);
    height: 54px;
    padding: 0 14px;
    font-size: 18px;
    user-select: none;

    .title {
        .name {
            color: #222;
            font-weight: 600;
        }
        .version {
            color: #999;
            font-size: 14px;
        }
    }
    .setting {
        cursor: pointer;
        svg {
            width: 1.2em;
            height: 1.2em;
        }
    }
}

.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: calc(100% - 54px);
    width: 72px;
    text-align: center;
    left: 0;
    bottom: 0;
    user-select: none;

    .section {
        width: 66px;
        padding: 10px 0;
        border-radius: 6px;
        svg {
            width: 1.6em;
            height: 1.6em;
        }
        .name {
            font-size: 12px;
        }
    }

    // 被选中的 section
    .section.path-active {
        position: relative;
        background-color: @wu-color-main;
        border: 1px solid @wu-color-border;
        color: @wu-color-blue;
    }
    .section.path-active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 25%;
        height: 50%;
        width: 4px;
        background-color: @wu-color-blue;
        border-radius: 2px;
    }

    // 使最后一个 child 置底
    .section:last-child {
        margin-top: auto;
    }
}

main {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 72px);
    height: calc(100% - 54px);
    margin: 48px 0 0 72px;
    border-left: 1px solid @wu-color-border;
    border-top: 1px solid @wu-color-border;
    background-color: @wu-color-main;
    border-radius: @wu-layout-radius 0 0 0;
    text-align: left;
    overflow: auto;
    box-shadow: 0px 0px 8px #00000011;
    scroll-behavior: smooth;
    // 设置 flex 是为了能让 footer 始终置于页面底部
    flex-direction: column;
    justify-content: space-between;
    .container { // 此处 container 用于将内容包装在一个 div 内，保证 flex 中只有一个 div 和 footer，防止冲突
        padding: 24px 36px 12px;

    }
}

</style>