import React, { useEffect, useState } from "react"
import './PersonalAccountPage.scss'

import { TabsContent } from "./TabsContent"
import { MyData } from "./tabPages/MyData"

import { ReactComponent as UserIcon } from '../../components/Icons/UserIcon.svg'
import { ReactComponent as BellIcon } from '../../components/Icons/UserInterface/BellIcon.svg'



export const PersonalAccountPage = () => {
    const [ active, setActive ] = useState(0);
  
    const openTab = (e: any) => {setActive(e.target.dataset.index);
    };


    const contentBtnTabs = [
        { content: <MyData/> },
        { content: 'Уведомления' },
        { content: 'Реестры' },
        { content: 'Метаданные' },
        { content: 'Безопасность' },
        { content: 'Мои загрузки' },
        { content: 'Выход' },
      ];




    return <div className="personal-account">

        <div className="personal-account_title">
            <h1>Личный кабинет</h1>
        </div>

        <div className="personal-account_main">
            <div className="personal-account_tabs">
                <button className={`personal-account_tabs--button-up ${0 == active ? 'tabs-button-active' : ''}`} data-index={0} onClick={openTab}><UserIcon/>Мои данные</button>
                <button className={`${1 == active ? 'tabs-button-active' : ''}`} data-index={1} onClick={openTab}><BellIcon/>Уведомления</button>
                <button className={`${2 == active ? 'tabs-button-active' : ''}`} data-index={2} onClick={openTab}><BellIcon/>Реестры</button>
                <button className={`${3 == active ? 'tabs-button-active' : ''}`} data-index={3} onClick={openTab}><BellIcon/>Метаданные</button>
                <button className={`${4 == active ? 'tabs-button-active' : ''}`} data-index={4} onClick={openTab}><BellIcon/>Безопасность</button>
                <button className={`${5 == active ? 'tabs-button-active' : ''}`} data-index={5} onClick={openTab}><BellIcon/>Мои загрузки</button>
                <button className={`personal-account_tabs--button-down ${6 == active ? 'tabs-button-active' : ''}`} data-index={6} onClick={openTab}><BellIcon/>Выход</button>
            </div>

            {contentBtnTabs && <TabsContent {...contentBtnTabs[active]} />}
        </div>
    </div>
}