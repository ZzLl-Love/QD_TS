/**
 *泛型约束：
 *
 * 用于规定泛型的取值
 * */

interface hasNameProperty {
    name: string
}


function nameToUpperCase<T extends hasNameProperty> (obj:T) :T{
    obj.name = obj.name.split(" ")
        .map(item =>item[0].toUpperCase() + item.substring(1))
        .join(" ")
    return obj;
}


const  o = {
    name: 'kevin yuan',
    age: 22,
    gender: '男'
}

const newO = nameToUpperCase(o);
