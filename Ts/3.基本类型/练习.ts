/**
 * 创建扑克牌
 */

//花色
type Color = "♥"| "♠"| "♣" |"◇";

//单张扑克牌为一个object
type NormalCard = {
    color: Color
    mark: number
}

//一副扑克牌
type Deck = NormalCard[]

/**
 * 创建扑克牌
 * @returns {Deck}
 */
function createDeck(): Deck {
    const deck:Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({mark: 1, color:'♥'})
        deck.push({mark: 1, color:'♠'})
        deck.push({mark: 1, color:'♣'})
        deck.push({mark: 1, color:'◇'})
    }
    return deck;
}

/**
 * 打印扑克牌
 *
 * */
function  printDeck (deck:Deck){
    deck.forEach(card =>{
        let str:string = card.color;
        if(card.mark <=10){
            str += card.mark;
        }else if (card.mark ===11){
            str += "J";
        }else if (card.mark ===12){
            str += 'Q';
        }else if (card.mark ===13){
            str += 'K';
        }else {
            str = 'A'
        }
        console.log(str)
    })
}