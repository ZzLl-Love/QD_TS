/**
 * 静态成员
 *
 * 静态 方法中this的指向
 *  --实例方法中的this指向的是当前对象
 *  --静态方法中的this指向的是当前类
 * */

class User {

    private static users: User[] = [];

    constructor(
        public loginId: string,
        public loginpwd: string,
        public name: string,
        public age: number,
    ){
        //将新建的用户加入到数组中
        User.users.push(this);
    }

    // 登录方法
   static login(loginId:string, loginpwd:string): User | undefined {

       // return User.users.find(u=>u.loginId===loginId && u.loginpwd ===loginpwd);
       return this.users.find(u=>u.loginId===loginId && u.loginpwd ===loginpwd);
    }
}

// 如果用new 一个对象然后调用方法 代表注册用户才能登录。 不合理：用户已经注册了
const loginUser = User.login('xxx','xxx');

const user = new User('123','456', 'xxx', 123);
// user.login(); 对象不能.这个方法


/**
 * 设计模式
 *
 * 某些情况下允许类的对象最多只有一个
 */
class Board {
    width: number = 500;
    height:number = 700;

    //构造函数私有化，防止new对象
    private constructor(){}

    private static _board? : Board

    static  createBoard():Board {

        if(this._board){
            return this._board
        }
        return this._board = new Board();
    }

    init(){
        console.log("初始化棋盘")
    }
}




