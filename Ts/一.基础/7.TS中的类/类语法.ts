/**
 *  1.新增语法部分
 *      -属性
 *         使用属性列表类描述类中的属性
 *         初始化位置: 构造函数中 属性默认值
 *         属性可以用？号来修饰成可选的
 *         属性可以用 readonly 来修饰成可读的
 *         访问修饰符可以控制类中某个成员的访问权限
 *            -- private  私有的只有在类中可以访问
 * **/

// class User {
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
// }


//使用属性列表类描述类中的属性
class User {
    readonly id:number
    name: string
    age: number
    gender: '男' | '女' = '男'
    pId ?: string
    publishNumber: number = 3  //每天允许发送文章总数
    curNumber:number = 0  // 已经发送的文章数
    constructor(name:string, age:number){
        this.id = Math.random();
        this.name = name;
        this.age = age;
    }
}

const user = new User('zyy', 18);



