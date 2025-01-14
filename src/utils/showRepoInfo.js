'use strict'
/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 2.3
 */

import buildInfo from '../../scripts/buildInfo.json'
import packageInfo from '../../package.json'

// 处理详细版本
const version = (() => {
    const packageVersion = packageInfo.version
    const buildNum = buildInfo.build
    const buildHash = buildInfo.hash

    return packageVersion + '.b' + buildNum + '.' + buildHash
})()

// 处理构建标签
const tag = (() => {
    // 处理版本号和分支
    const buildNum = buildInfo.build
    const buildBranch = buildInfo.branch

    // 处理构建时间
    const fullTime = buildInfo.time
    const [bYear, bMonth, bDay, bHour, bMin] = [
        fullTime.substring(2, 4),
        fullTime.substring(5, 7),
        fullTime.substring(8, 10),
        fullTime.substring(11, 13),
        fullTime.substring(14, 16),
    ]
    const buildTime = bYear + bMonth + bDay + '-' + bHour + bMin
    return buildNum + '.' + buildBranch + '.' + buildTime
})()

export default function showInfo() {
    let styleVerName = `font-size: 14px;
                       color: #000; 
                       background-color: #8ad5b3; 
                       padding: 5px 9px;
                       border-radius: 3px 0 0 3px;
                       margin: 10px 0; `
    let styleVerValue = `font-size: 14px; 
                        color: #fff; 
                        background-color: #607d8b; 
                        padding: 5px 9px;
                        border-radius: 0 3px 3px 0;
                        margin: 6px 0; `
    console.log('%c%s%c%s', styleVerName, 'wutd', styleVerValue, version)
    console.log('[Info] Build tag: ' + tag)
}
