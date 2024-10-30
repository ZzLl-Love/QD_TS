/**
 * 可选的静态的类型选择系统
 *
 * */

    // 类型别名
    let  u: {
        name: string
        age:number
        sex: '男' | '女'
    }

    //该函数返回用户数组
    function getUsers() : { name: string
                            age:number
                            sex: '男' | '女'}[] {
            return [];
    }

    /**
    * type 类型别名
    */
    type User = {
        name: string
        age:number
        sex: '男' | '女'
    }


    let u: User

    u = {
        name: 'zyy',
        age: 15,
        sex: '男'
    }


    //
    function getUsersSimple():User[] {
        return [];
    }