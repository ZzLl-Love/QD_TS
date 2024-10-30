/**
 * 如果有的模块是使用module.exports ={.....}
 * 默认导入会报错
 *
 *
 * 解决办法
 *  import {xxxx} from "xxxx"
 *  import * as xxx frm "xxxx"
 *
 *  启用配置  esModuleInterop: true
 * */