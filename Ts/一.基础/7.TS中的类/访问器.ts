 /**
  *
  *  访问器
  *   作用： 用于控制属性的读取和赋值
  *
  *
  * **/
     //使用属性列表类描述类中的属性
 class User {
     name: string
     age: number
     constructor(name:string, age:number){
         this.name = name;
         this.age = age;
     }

     get name () {
         return Math.floor(this.name);
     }

     set name(value: string) {
         return this.name;
     }
 }

 const user = new User('ZYY', 18)
 user.name = "123";
 console.log(user.name);
