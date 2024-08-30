<script>
// 引入库
import { reactive, toRefs } from 'vue'
import axios from 'axios'

export default {
    name: 'MainHome',
    setup() {
        // STEP1 ------ 设定初始值
        document.title = 'Windows Up-to-Date'
        let data = reactive({
            list: [],
            isLoading: true,
        })

        // STEP2 ------ 获取数据
        // 此处填写 Windows 最新数据的 API 地址，相关 API 方面，咕咕正在 TODO 状态中
        // 目前仅仅对 github.com/crrashh1542/win-up-to-date@data/versions.json 做了反代而已
        axios.get('https://wutd.api.crrashh.com/v1/latestVersions')

            // STEP3 ------ 处理并修改数据
            .then((response) => {
                data.list = response.data.content
                data.isLoading = false
            })
            .catch((error) => {
                console.log(error)
            })

        // STEP4 ------ 返回数据
        return { ...toRefs(data) }
    },
    methods: {
        constructRoute(category, build) {
            return '/detail/' + category + '/' + build
        },
    },
    props: {
        // 接收 SettingDialog 传到父组件的数据
        isShowFlight: Boolean,
        isShowBranch: Boolean,
    },
}
</script>

<template>
    vue-router-home
</template>

<style lang="less" scoped>
@import url('@s/global.less');

.block {
    margin: 15px 0;

    span {
        margin-right: 0.75em;
    }

    .card {
        margin-right: 5px;
        padding: 10px 5px 10px 20px;

        .category {
            font-size: 18px;
        }

        .version {
            padding: 4px 0 10px;
        }

        .detail {
            font-size: 16px;
            line-height: 1.5;
            word-break: break-word;
            color: @wu-color-text-accent;
        }

        .detail::before {
            font-size: 14px;
            padding-right: 7px;
        }

        .detail.branch::before {
            content: '\e993';
        }

        .detail.codename::before {
            content: '\e9d7';
        }
    }
}

/* 卡片对于不同设备端适配 */

// SEC 1 ------ 两列
@media screen and (min-width: 1150px) {
    .card {
        --card-width: 32%;
    }
}

@media screen and (max-width: 1150px) {
    .card {
        --card-width: 48%;
    }
}

// SEC 2 ------ 一列
@media screen and (max-width: 620px) {
    .card {
        --card-width: 100%;
    }
}
</style>
