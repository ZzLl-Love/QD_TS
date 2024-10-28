/**
 *
 *  配置名称                        含义
 *  module                        设置编译结果中使用的模块化标准
 *  moduleResolution              设置解析模块的模式
 *  noImplicitUseStrice           编译结果中不包含"use strict"
 *  removeComments                编译结果中移除注释
 *  noEmitOnError                 错误时不生成编译结果
 *  esModuleInterop               启用ES模块化交互非ES模块导出
 *
 *  TS中如何书写模块化语句
 *  编译结果使用的是什么模块化标准
 *
 * */


//TS中如何书写模块化语句
// TS中，导入和导出模块, 统一使用ES6的模块化标准 export | import
export const name = "zyy";

//编译结果中的模块化
/**
 * [导出]  [导入]
 * 如果编译结果的模块化标准是ES6： 没有区别
 * 如果编译结果的模块化标准是CommonJS： 导出的声明会变成exports的属性, 默认导出会变成exports.defaults 属性
 *
 *
 *
 *
 *
 */
