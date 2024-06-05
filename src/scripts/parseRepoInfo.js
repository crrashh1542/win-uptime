'use strict'
/**
 * 此脚本用于在处理本项目相关信息
 * @author crrashh1542
 * @version 1.7
 */

import packageInfo from '/package.json'
import buildInfo from '/scripts/buildInfo.json'

// packageInfo 相关
const packageVerNum = packageInfo.version // 项目版本号
const packageRepo = packageInfo.repository.url.split('+')[1] // 项目地址
const packageDeps = packageInfo.devDependencies // 依赖版本

// buildInfo 相关
const buildNum = buildInfo.build // 构建次数

// 数据合并
const pVersion = 'v' + packageVerNum + ' (build ' + buildNum + ')' // 完整版本
const pRepoName = packageRepo.split('https://github.com/')[1] // 项目名
const pVue = 'v' + packageDeps['vue'].split('^')[1] // Vue 框架版本
const pUI = 'v' + packageDeps['@fluentui/web-components'].split('^')[1] // 组件库版本

// 导出数据
export default [
   ['项目版本', 'w-icon-version', pVersion],
   ['项目地址', 'w-icon-github', packageRepo, pRepoName],
   ['Vue 框架版本', 'w-icon-vuejs', pVue],
   ['Fluent UI 组件库版本', 'w-icon-fluent', pUI],
   [
      '交流群组', 'w-icon-qq',
      '//qm.qq.com/cgi-bin/qm/qr?k=i3uo_SoY8qYCP-DwlWN0MvBFzU7dIl-V&group_code=442133970',
      '442133970',
   ],
]
