import {action, makeObservable, observable} from "mobx";
import {ICard} from '../interfaces/userInterface'
import {IDialog} from "../interfaces/MessegesInterface";

interface IAbonent {
    name: string,
    img: string,
    numberPhone: string
}
interface IUser {
    name: string,
    dialogs: Array<IDialog>,
    memberCards: ICard[],
    abonents: Array<IAbonent>
}

export class UserData {
    @observable user: IUser = {
        name: 'Алексей',
        memberCards: [
            {
                balance: '1,01',
                type: 'RUB',
                cardType: 'Инвест Моментум',
                cardNumber: '4483 3425 8565 7093',
                cardExp: '01/25',
                cardCVC: '585',
                cardHolder: 'Алексей'
            },
            {
                balance: '127 357,58',
                type: 'USD',
                cardType: 'Инвест Про',
                cardNumber: '2452 1234 4532 2722',
                cardExp: '25/31',
                cardCVC: '795',
                cardHolder: 'Алексей'
            }
        ],
        dialogs: [
            {
                dialog_uid: 12,
                name: 'Поддержка',
                avatar: 'https://i.imgur.com/nZpezzD.png',
                description: 'В сети 24/7',
                messages: [
                    {
                        from: 'Поддержка',
                        message: 'Здравствуйте',
                        date: '9 марта 2022'
                    },
                    {
                        from: 'Алексей',
                        message: 'Здравствуйте, а как долго вы работаете?',
                        date: '9 марта 2022'
                    }
                ]
            },
            {
                dialog_uid: 6,
                name: 'Брат',
                avatar: 'https://sun3-20.userapi.com/impg/V6rr12hkGKhWvvOayGGmhFUj92CVqlSOue-TxQ/ILf956-7As0.jpg?size=721x1080&quality=95&sign=d49f36109aa45c95ec40745ddcd27f45&type=album',
                description: 'Лежу на диване и копаю деньги',
                messages: [
                    {
                        from: 'Брат',
                        message: 'Здарова, чё как?',
                        date: '9 марта 2022'
                    }
                ]
            }
        ],
        abonents: [
            {
                name: 'Мама',
                img: 'https://avavatar.ru/images/full/37/UlmAP6JF8di2118Q.jpg',
                numberPhone: '+79536621782'
            },
            {
                name: 'Денис',
                img: 'https://i.pinimg.com/originals/8e/a9/a1/8ea9a1c43814dcad98dacc63ae9e9bb0.jpg',
                numberPhone: '+79227623458'
            },
            {
                name: 'Андрей',
                img: 'https://static4.vivoo.ru/datas/photos/750x750/a5/1a/88c0e75323b26281e55fa8ee3778.jpg?1',
                numberPhone: '+79120097652'
            },
            {
                name: 'Брат',
                img: 'https://sun3-20.userapi.com/impg/V6rr12hkGKhWvvOayGGmhFUj92CVqlSOue-TxQ/ILf956-7As0.jpg?size=721x1080&quality=95&sign=d49f36109aa45c95ec40745ddcd27f45&type=album',
                numberPhone: '+79527203011'
            },
            {
                name: 'Любимая',
                img: 'https://i.yapx.ru/VyJ77.jpg',
                numberPhone: '+79822135095'
            }
        ]
    };

    @action
    pushMessage(uid: string, payload: any) {
        const dialog = this.user.dialogs.find(dialog => dialog.dialog_uid == uid)
        if(dialog && dialog.messages) dialog.messages.push(payload)
    }


    constructor() {
        makeObservable(this);
    }
}

export default new UserData()