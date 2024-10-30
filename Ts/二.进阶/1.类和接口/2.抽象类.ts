/**
 * 有时，某个类只表示一个抽象概念，主要用于提取子类共有的成员，而不是直接创建它的对象，该类可以作为抽象类。
 *
 * 父类中有些成员是必须存在的，但是不知道成员的值/实现是什么
 *      ==》必须存在一种约束，让继承该类的子类必须实现该成员。
 *
 * 抽象类中 可以有抽象成员，这些抽象成员必须在子类中实现
 *
 * 设计模式 - 模板模式:
 *      有些方法，所有子类实现的流程完全一致,只是流程中的某个步骤具体实现不一致，可以将不一致的方法提交给父类，
 *      在父类中完成整个流程的实现。
 *      即 :遇到实现不一致的方法时，将该方法做成抽象方法。
 * */
abstract  class Chess {
    x:number = 0
    y:number = 0

   abstract readonly name:string = ''
    //每个旗子的移动规则，交由子类自己实现
   protected abstract  rule (targetX: number ,targetY: number);
    move(targetX:number, targetY:number): boolean {

        //父类统一管理子类公有代码
        console.log('1.边界判断')
        console.log('2.目标位置是否为己方旗帜')

        //规则判断  this 指向的实现类（子类）
        //好处在于： 1. 减少子类的重复代码  2.子类只需要实现自己关心的部分。
        if(this.rule(targetX, targetY)){
            this.x = targetX;
            this.y = targetY;
        }

        return false;
    }

}

class Horse extends Chess {
     name: string;
     constructor(value:string){
         super();
         this.name = value;
     }

    protected rule(targetX: number, targetY: number) {
         console.log("实现马的移动规则")
    }
}


class Pao extends Chess {

    set name(value) {
        this.name = value;
    }

    protected rule(targetX: number, targetY: number) {
        console.log("实现炮的移动规则")
    }

}

