import {Animal,Dog,Lion,Monkey} from "./animals";
import {IFireShow} from "./interfaces";

const animals: Animal[] = [
    new Dog('123',18)
    new Lion('sz', 34),
    new Monkey('fh', 28)
]

/**
 * 类型保护函数 :通过该函数能触发TS的类型保护，该函数必须返回Boolean
 *
 */
function hasFireShow(ani: object ) :ani is IFireShow {

    if((ani as unknown as IFireShow).singleFire() && (ani as unknown as IFireShow).doubleFire()){
        return true;
    }
    return false;
}


animals.forEach(item => {

    if(hasFireShow(item)){
        item.singleFire();
        item.doubleFire();
    }
})