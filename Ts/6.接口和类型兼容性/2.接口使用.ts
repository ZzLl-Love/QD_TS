/**
 * 扩展类型 接口
 * TypeScript: 用于约束类、 对象、函数的契约(标准)
 *
 * 接口和类型别名一样不出现在编译结果中
 * **/


// 对象 --- 如何使用接口约束对象
interface User {
    name: string
    age:  number
    sayHello: ()=>void  //sayHello(): void

}

// let u:User = {name: "fgj", age: 18}


//函数
// let u:User = {name:"123",age: 18, sayHello(){
//         console.log("test function()")
//     }}

/**
 * 接口约束函数  Condition 函数名   参数n类型为number  返回值为boolean
 */
interface Condition {  //定界符
    (n:number):boolean
}


//约束
function sum(numbers: number[], callBack: Condition) {
    let s = 0;
    numbers.forEach(item =>{
        if(callBack(item)){
            s+=item;
        }
    })
}

//use
sum([1,3,5,7,9],n=>n%2 !==0);


/**
 * 1.接口可以被继承
 *  一个接口可以继承多个接口  interface C extends A,B
 *
 * 2.类型别名也可以实现同样的效果 需要通过 ```&```，它叫做交叉类型
 *  type A = {T1: string}
 *  type B = {T2: string}
 * 示例:  type C = { T3:boolean} & A & B
 *
 * 3.接口和交叉类型的区别
 *  子接口不能覆盖父接口的类型, 交叉类型会把相同的类型进行交叉(不是覆盖！！！)
 *
 **/
interface A {
    T1:number
}


interface B extends A {
    T2: string
}

let u: B = {
    T1: 33,
    T2: '123'
}


