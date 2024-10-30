/**
 * 不使用接口的实现时
 *  1.成员函数没有约束力
 *  2.容易将类型和能力融合在一起
 *
 * 接口可以继承类，标识该类的所有成员都在接口中
 */
import {IFireShow, IBalanceShow, IWisdomShow} from "./interfaces";


export  abstract  class Animal {
    abstract type: string
    constructor(
        public name: string,
        public age: number
    ){ }

    sayHello(){
        console.log(`各位观众大家好,我是${this.type}, 我叫${this.name},今年${this.age}`);
    }
}


export class Lion extends Animal implements IFireShow {
    type: string = '狮子';

    doubleFire(): void {
        console.log(`${this.name} 穿越了单火圈`);
    }

    singleFire(): void {
        console.log(`${this.name} 穿越了双火圈`);
    }

}

export class Tigger extends Animal implements IFireShow {
    type: string = '老虎';

    doubleFire(): void {
        console.log(`${this.name} 穿越了单火圈`);
    }

    singleFire(): void {
        console.log(`${this.name} 穿越了双火圈`);
    }

}

export class Monkey extends Animal implements IBalanceShow {
    type: string = '猴子';

    dumuqiao(): void {
        console.log(`${this.name} 表演走独木桥`);
    }

    zougangsi(): void {
        console.log(`${this.name} 表演走钢丝`);
    }
}

export class Dog extends Animal implements  IWisdomShow {
    type: string = '狗';

    suanshuit(): void {
        console.log(`${this.name} 表演做算术题`);
    }

    tiaowu(): void {
        console.log(`${this.name} 表演跳舞`);
    }

}