<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import icons from '@/assets/icons'
import Card from '@/components/widgets/Card.vue'
import LoadAnim from '@/components/widgets/LoadAnim.vue'

// STEP1 ---- 初始化
document.title = 'Windows Up-to-Date'
let state = reactive({
    list: [],
    isLoading: true,
})

// STEP2 ---- 获取数据并填充
axios.get('https://wutd.api.crrashh.com/v2/latestVersions')
    .then(response => {
        state.list = response.data.content
        state.isLoading = false
    })
    .catch(error => {
        console.error(error)
    })
</script>

<template>
    <div class="u-banner">当前版本列表</div>
    <LoadAnim v-if="state.isLoading" mode="filled" />

    <!-- 内容块 BEGIN -->
        <div class="block" v-if="!state.isLoading" v-for="c in state.list" :key="c.id">

            <!-- 标题 -->
            <div class="u-catalog">
                <img :src="icons[c.icon]" class="u-box-s u-icon">&nbsp;
                {{ c.category }}
            </div>

            <!-- 内容卡片（若存在 category 属性，则提供 router-link） -->
            <Card v-for="build in c.releases" :key="build.name" :class="build.style">
                <!-- 如果 build.category 存在则设置 router-link -->
                <router-link :to="'/detail/' + build.category + '/' + build.version"
                    v-if="build.category !== undefined">
                    <div class="row">
                        <span :class="'channel u-float-l ' + build.style">{{ build.channel }}</span>
                        <span class="u-space-r u-float-r">
                            <img :src="icons.rocket" class="u-box-xs u-icon" />&nbsp;
                            {{ build.codename }} {{ build.semester }}
                        </span>
                    </div>
                    <div class="number">{{ build.version }}</div>
                    <div class="row">
                        <img :src="icons.branch" class="u-box-xs u-icon"/>
                        {{ build.branch }}
                    </div>
                </router-link>

                <span v-else>
                    <div class="row">
                        <span :class="'channel u-float-l ' + build.style">{{ build.channel }}</span>
                        <span class="u-space-r u-float-r">
                            <img :src="icons.rocket" class="u-box-xs u-icon" />&nbsp;
                            {{ build.codename }} {{ build.semester }}
                        </span>
                    </div>
                    <div class="number">{{ build.version }}</div>
                    <div class="row">
                        <img :src="icons.branch" class="u-box-xs u-icon"/>
                        {{ build.branch }}
                    </div>
                </span>
            </Card>
        </div>
</template>

<style lang="less" scoped>
@import url('@/styles/reset.less');

.block {
    margin: 1em 0;

    .card {
        width: var(--card-width);
        max-width: 400px;
        margin-right: 5px;
        padding: 10px 5px 10px 20px;
        border-radius: 8px;
        box-shadow: @wu-layout-shadow;

        .row {
            font-size: 16px;
            color: @wu-color-text-accent;
            overflow: hidden;
            vertical-align: middle;
            line-height: 1.5;
            .channel {
                font-size: 18px;
                font-weight: 500;
            }
        }
        .number {
            font-size: 25px;
            line-height: 32px;
            font-weight: 600;
            margin: 0 0 8px;
        }
    }
}

/* 频道颜色变化 ----- BEGIN */
.color-amber .channel {
    color: @wu-color-amber;
}
.color-orange .channel {
    color: @wu-color-orange;
}
.color-yellow .channel {
    color: @wu-color-yellow;
}
.color-green .channel {
    color: @wu-color-green;
}
.color-teal .channel {
    color: @wu-color-teal;
}
.color-theme .channel {
    color: @wu-color-blue;
}
.color-purple .channel {
    color: @wu-color-purple;
}
/* 频道颜色变化 ----- END */

/* 卡片多端适配 ----- BEGIN */
// SEC 1 ------ 两列
@media screen and (min-width: 1150px) {
    .card {
        --card-width: calc(31% - 5px * 3);
    }
}
@media screen and (max-width: 1150px) {
    .card {
        --card-width: 46%;
    }
}
// SEC 2 ------ 一列
@media screen and (max-width: 620px) {
    .card {
        --card-width: 100%;
    }
}
/* 卡片多端适配 ----- END */
</style>