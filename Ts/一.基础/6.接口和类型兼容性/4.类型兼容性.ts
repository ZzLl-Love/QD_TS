/**
 *  [类型兼容性判断]
 *
 * 1.类型兼容性
 *   B-->A ，如果能完成类型赋值，则B和A类型兼容
 * 2.鸭子变型法 (子结构辩型法) ： 目标类型需要某一些特征，赋值的类型只要能满足该特征即可。
 *      -- 基本类型： 完全匹配
 *      -- 对象类型:
 *
 * 3.类型断言 as
 *
 * 4. 当直接使用对象字面量进行赋值的时候会进行更加的类型判断
 *
 * 5. 函数类型
 *      --  参数：传递给目标函数的参数可以少,但是类型得匹配上
 *      --  返回值：要求返回则必须返回并且类型要匹配
 *                 不要求返回的时候随意
 * * **/

//对象类型
interface Duck{
    sound: '嘎嘎叫'
    swin(): void
}

let person = {
    name: '伪装成鸭子的人',
    age: 11,
    sound: '嘎嘎叫' as '嘎嘎叫',
    swin(){
        console.log('test')
    }
}

//  person 的子结构 sound  满足目标类型  duck的某个特性sound
let duck: Duck = person;


// 证明为什么要使用鸭子变型法
//假设有个函数，用于得到服务器的某个接口的返回结果，是一个用户对象(数据可能有100个字段：属性)，而我的业务只需要其中的几个字段
interface ResponseUser {
    loginId:string,
    nickName: string,
    gender: '男'|'女'
}

// let u: ResponseUser = '函数调用返回的100个数据'， 业务只需要id, name, sex


//5. 函数类型



