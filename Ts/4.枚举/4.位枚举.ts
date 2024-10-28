/**
 *
 * 使用场景：
 *
 * */

//  实际情况可能一个用户具备多个权限,存在组合权限的问题，一一列举出来不现实的方案。
enum Permission {
    Read,
    Write,  // 修改
    Create, // 新建
    Deltete
}


//解决办法 通过二进制位上是否有1 来标识是否具备某种权限
enum Permission1 {
    Read = 1,     //0001
    Write = 2,   //0010
    Create = 4,  //0100
    Deltete = 8  //1000
}

//1.如何组合权限  使用或运算 规则 (位上相同位置有1则为1，否则为0)
/**
 *  | 或运算
 *  Permission1.Read | Permission1.Write
 *
 *  0001
 *  或
 *  0010
 *= 0011
 *
 *
 * @type {number}
 */
let p = Permission1.Read | Permission1.Write


//2.如何判断是否具备某个权限
/**
 * hashPermission(p, Permission.Read)
 * @param {Permission1} target 权限对象
 * @param {Permission1} p 具备的某个权限
 *
 * & 且运算(相同运算都为1,结果为1)
 *
 */
function hashPermission(target: Permission1, p:Permission1){
    return (target & p) === p;
}

//3.如何删除某个权限
/**
 *
 * 去掉读权限
 *
 * ^ 异或 (两个位置 ，相同取0, 不同取1)
 *  0011 (读 + 写 权限)
 *  异或
 *  0010 (写)
 *= 0001 (仅有读权限)
 *
 * @type {number}
 */
p = p ^ Permission.Write;
