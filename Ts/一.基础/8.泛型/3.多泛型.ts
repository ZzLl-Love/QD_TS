

//将两个数组进行混合, [1,3,4] +  ["a", "b", "c"] = [1, "a", 3,"b", 4, "c]
function mixinArray<T,K>(arr1:T[], arr2: K[]) :(T|K)[] {

    if(arr1.length !== arr2.length){
        throw new Error('两个数组的长度不等')
    }

    let result:(T|K)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i])
        result.push(arr2[i])
    }
    return result;
}

const newArray = mixinArray([1,3,4],["a", "b", "c"]);