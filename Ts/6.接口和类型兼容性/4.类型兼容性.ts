/**
 * 1.类型兼容性
 *   B-->A ，如果能完成类型赋值，则B和A类型兼容
 * 2.鸭子变型法 (子结构辩型法) ： 目标类型需要某一些特征，赋值的类型只要能满足该特征即可。
 *      -- 基本类型： 完全匹配
 *      -- 对象类型:
 *
 * 3.类型断言 as
 *
 * **/

//对象类型
interface Duck{
    sound: '嘎嘎叫'
    swin(): void
}

let person = {
    name: '伪装成鸭子的人',
    age: 11,
    sound: '嘎嘎叫' as '嘎嘎叫'
    swin(){
        console.log('test')
    }
}

//  person 的子结构 sound  满足目标类型  duck的某个特性sound
let duck: Duck = person;

//