/**
 *  [泛型专题]
 *
 *
 ***/

//问题引出 take 函数取出数组的前n项
function take(arr,n){

    if(n >=arr.length){
        return arr;
    }

    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
}

/**
 *
 * problem: arr 的类型无法确定 string number.....
 *
 * 引出：
 *  书写函数时,会丢失一些类型信息(多个位置的类型应该保持一致/有关联关系)
 *
 * @param arr 数组
 * @param {number} n 取前n项数组
 * @returns {any}
 */
function take(arr:any[],n:number):any[]{

    if(n >=arr.length){
        return arr;
    }

    const newArr:any[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
}

/***
 *
 * 泛型定义：
 *      附属于函数、类、接口、类型别名之上的类型
 *
 * 函数中使用：
 *      函数名之后使用<泛型名称>
 *
 * 使用场景：
 *  泛型相当于一个类型变量,在定义时无法预先知道具体的类型,可以用该变量来代替,只有调用时才知道他的确切类型
 *
 * 大多数, TS会智能根据传递的参数，推导出泛型的具体类型; 如果无法完成推导，并且又没有传递具体的类型，默认为空对象。
 *
 * 泛型给默认值
 * function take<T=number>(arr:T[],n:number):T[] {.....}
 *
 */
function take<T>(arr:T[],n:number):T[]{

    if(n >=arr.length){
        return arr;
    }

    const newArr:T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
}

const result = take<number>([1,2,3,4,5,6], 2);
