import React, { useEffect } from "react"
import './PersonalAccountPage.scss'

import { TabsContent } from "./TabsContent"
import { MyData } from "./tabPages/MyData"



export const PersonalAccountPage = () => {
    const [ active, setActive ] = React.useState(0);
  
    const openTab = (e: any) => {setActive(e.target.dataset.index);
    };


    const contentBtnTabs = [
        { content: <MyData/> },
        { content: 'My favorites' },
        { content: 'Popular' },
      ];




    return <div className="personal-account">

        <div className="personal-account_title">
            <h1>Личный кабинет</h1>
        </div>

        <div className="personal-account_main">
            <div className="personal-account_tabs">
                <button data-index={0} onClick={openTab}>Мои данные</button>
                <button data-index={1} onClick={openTab}>Уведомления</button>
                <button data-index={2} onClick={openTab}>Реестры</button>
            </div>

            {contentBtnTabs && <TabsContent {...contentBtnTabs[active]} />}
        </div>
    </div>
}