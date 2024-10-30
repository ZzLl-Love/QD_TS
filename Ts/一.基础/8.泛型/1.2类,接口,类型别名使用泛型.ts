/****
 *
 * 统一在名称后面加<T> T-泛型名称
 */

/***
 * 类型别名
 */
//old  问题：不具备通用性
type callback = (n:number, i:number) => boolean

//change
type callbackPro<T> = (n:T, i:number) =>boolean

//use
function filter<T>(arr: T[], callback: callbackPro<T>) :T[] {

    const newArr: T[] = [];
    arr.forEach((item, index) =>{
        if(callback(item, index)){
            newArr.push(item)
        }
    })

    return newArr;
}

//test
const arr = [2,5,6,7,8,9]
console.log(filter(arr,n=>n%2!==0));


/**
 * 类
 */
export class ArrayHelper<T> {


    // arr:T[];

    constructor(private arr:T[]){}

    take(n:number) :T[] {
        if(n >=this.arr.length){
            return arr;
        }

        const newArr:T[] = [];

        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }


}



/**
 * 接口
 */



