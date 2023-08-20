"use strict"
/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 2.1.0
 */

import repoInfo from '../../package.json'
import buildInfo from '../../temp/buildInfo.json'

// 获取项目版本和构建信息
const [repoName, repoVer, buildTime, buildHash] = 
    [repoInfo.name, repoInfo.version, buildInfo.time, buildInfo.hash]

export default function showInfo() {
    let styleName = `font-size: 14px;
                     color: #000; 
                     background-color: #8ad5b3; 
                     padding: 5px 9px;
                     border-radius: 3px 0 0 3px;
                     margin: 10px 0;
                     `
    let styleVer = `font-size: 14px; 
                    color: #fff; 
                    background-color: #607d8b; 
                    padding: 5px 9px;
                    border-radius: 0 3px 3px 0;
                    margin: 6px 0;
                    `

    console.log('%c%s%c%s', styleName, repoName, styleVer, repoVer + '@' + buildHash)
    console.log('[BuildInfo] Project built at ' + buildTime + '.')
}
