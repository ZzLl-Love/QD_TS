/**
 * 函数的相关约束
 * */


/**
 *
 * 函数重载：
 *  在函数实现之前，对函数调用的多种情况进行声明
 *  都为number 想乘返回  |  都为string 拼接返回
 * @param {number | string} a
 * @param {number | string} b
 * @returns {number | string}
 *
 */

function combine(a:number, b:number) :number;
function combine(a:string, b:string) :string;

function combine(a:number | string , b: number| string) : number | string  {

    if(typeof a ==="number" && typeof b==="number"){
        return a * b;
    } else if (typeof a ==="string" && typeof b==="string") {
        return a + b;
    }
    throw new Error('a 和 b 必须为相同的类型')
}

// number 使用
combine(3, 3);
//string 使用
combine("hello" , "ts");


/**
 * 可选参数： 可以再某些参数名后面加？号,表示该参数可以不传递
 *  a, b必传，[c可选] ,将有值的数据相加返回
 *  注: 可选参数不能放在第一位，只能出现在末尾，并且可选参数可以有多个
 */
function sum(a:number, b:number,  c?:number){
  if(c){
    return  a+b+c;
  }else{
      return a+b;
  }
}
sum(1,2)
sum(1,2,3)