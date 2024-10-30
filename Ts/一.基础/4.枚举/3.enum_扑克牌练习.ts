/**
 *
 * 使用枚举 改造 扑克牌程序
 * 创建扑克牌
 */

//花色
// type Color = "♥"| "♠"| "♣" |"◇";

enum Color{
    heart= '♥',
    spade= '♣',
    club= '♠',
    diamond= '◇',

}

//牌面
enum Mark {
   A = 'A',
   two = '2',
   three = '3',
   four = '4',
   five = '5',
   six = '6',
   seven = '7',
   eight = '8',
   nine = '9',
   ten = '10',
   elevent = 'J',
   twelve = 'Q',
   king = 'K',
}


//单张扑克牌为一个object
type NormalCard = {
    color: Color
    mark: Mark
}

//一副扑克牌
type Deck = NormalCard[]

/**
 * 创建扑克牌
 * @returns {Deck}
 */
function createDeck(): Deck {
    const deck:Deck = [];
    // for (let i = 1; i <= 13; i++) {
    //     deck.push({mark: 1, color:'♥'})
    //     deck.push({mark: 1, color:'♠'})
    //     deck.push({mark: 1, color:'♣'})
    //     deck.push({mark: 1, color:'◇'})
    // }

    const marks  = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks){
        for(const c of colors){
            deck.push({
                color : c,
                mark  : m,
            })
        }
    }
    return deck;
}

/**
 * 打印扑克牌
 *
 * */
// function  printDeck (deck:Deck){
//     deck.forEach(card =>{
//         let str:string = card.color;
//         if(card.mark <=10){
//             str += card.mark;
//         }else if (card.mark ===11){
//             str += "J";
//         }else if (card.mark ===12){
//             str += 'Q';
//         }else if (card.mark ===13){
//             str += 'K';
//         }else {
//             str = 'A'
//         }
//         console.log(str)
//     })
// }


// 使用enum 方式来实现打印
function  printDeck (deck:Deck){
    deck.forEach(card =>{
        let str:string = card.color + card.mark;
        console.log(str)
    })
}