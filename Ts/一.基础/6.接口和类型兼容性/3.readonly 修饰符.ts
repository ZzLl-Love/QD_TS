/**
 * readonly 只读修饰符
 * */

interface User1 {
    id: string
    name: string
    age: number
}
//
// let u: User = {id: '123',name: 'zyy',age: 18}
// u.id = '234'; //这里问题，id实际情况不应该被修改


/**
 * 使用readonly 后，id不允许被update
 * 只读修饰符 不在编译结果中
 */
interface User2 {
    readonly id: string
    name: string
    age: number
}

// let arr: readonly number[] = [3,4,5,6] 修饰数组只可读


interface User3 {
    id:   string
    name: string
    age:  number
    readonly  arr: string[]  //不能重新给数组赋值，但是可以改变数组的内容
}