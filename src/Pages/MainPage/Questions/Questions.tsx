import React, { useState } from "react"
import './Questions.scss'

import { Button } from "../../../components/Button"
import { ReactComponent as plus } from '../../../components/Icons/plus.svg'



export const Questions = () => {
    const [one, setOne] = useState('close')
    const [two, setTwo] = useState('close')
    const [three, setThree] = useState('close')
    const [four, setFour] = useState('close')
    const [five, setFive] = useState('close')
    const [six, setSix] = useState('close')
    const [seven, setSeven] = useState('close')

    const oneChange = () => {
        if (one === 'close') {
            setOne('open')
        }else {
            setOne('close')
        }
    }

    const twoChange = () => {
        if (two === 'close') {
            setTwo('open')
        }else {
            setTwo('close')
        }
    }

    const threeChange = () => {
        if (three === 'close') {
            setThree('open')
        }else {
            setThree('close')
        }
    }

    const fourChange = () => {
        if (four === 'close') {
            setFour('open')
        }else {
            setFour('close')
        }
    }

    const fiveChange = () => {
        if (five === 'close') {
            setFive('open')
        }else {
            setFive('close')
        }
    }

    const sixChange = () => {
        if (six === 'close') {
            setSix('open')
        }else {
            setSix('close')
        }
    }

    const sevenChange = () => {
        if (seven === 'close') {
            setSeven('open')
        }else {
            setSeven('close')
        }
    }


    return <div className="questions">

        <div className="questions_title">
            <h1>Вопрос-ответ</h1>
        </div>

        <div className="questions_general-box">
            <div className="one">
                    <Button className={`one_button one_button-${one}`} onClick={oneChange} Icon={plus} text='Для подачи заявления необходимо подготовить'/>
                    <p className={`one_${one}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
            <div className="two">
                    <Button className={`two_button two_button-${two}`} onClick={twoChange} Icon={plus} text='Связь с оператором реестра'/>
                    <p className={`two_${two}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
            <div className="three">
                    <Button className={`three_button three_button-${three}`} onClick={threeChange} Icon={plus} text='Как подать заявление на включение программного обеспечения в реестр'/>
                    <p className={`three_${three}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
            <div className="four">
                    <Button className={`four_button four_button-${four}`} onClick={fourChange} Icon={plus} text='Где можно подать заявление'/>
                    <p className={`four_${four}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
            <div className="five">
                    <Button className={`five_button five_button-${five}`} onClick={fiveChange} Icon={plus} text='Как узнать мне причину отказа'/>
                    <p className={`five_${five}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
            <div className="six">
                    <Button className={`six_button six_button-${six}`} onClick={sixChange} Icon={plus} text='Что делать, если Вам отказали'/>
                    <p className={`six_${six}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
            <div className="seven">
                    <Button className={`seven_button seven_button-${seven}`} onClick={sevenChange} Icon={plus} text='Изменение реестревой записи'/>
                    <p className={`seven_${seven}`}><p>1. Данные для авторизации в личном кабинете</p><p>2. Квалифицированный сертификат ключа проверки электронной подписи.</p><p>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</p><p>4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</p></p>
            </div>
        </div>

    </div>
}