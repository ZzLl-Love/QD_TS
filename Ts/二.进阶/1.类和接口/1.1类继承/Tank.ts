/**
 *
 * 注意this 关键字，在继承关系中,this的指向是动态的，调用方法时根据具体的调用方决定this的指向
 *
 * protected :受保护的成员，只能在自身和子类中访问
 *
 * super 关键字 ： 在子类的方法中可以使用super关键字读取父类成员
 *
 * 传递性和单根性
 *
 * 单根性：  每个类最多只有一个父类
 * 传递性：  A -> B -> C 则 A 是 C的间接父类
 */
export class Tank  {

    x:number = 0;
    y:number = 0;
}


//玩家坦克
export class PlayerTank extends Tank{
    x:number = 20; //注:成员重写不能修改父类的类型
    y:number = 20;
}

//敌方坦克
export class EnemyTank extends Tank {

}

