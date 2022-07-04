import React from "react"
import './Header.scss'

import { NavigationButton } from "../Button/NavigationButton"
import { Button } from "../Button"
import { Input } from "../Input"

import { ReactComponent as LogoIcon } from '../Icons/LogoIcon.svg'
import { ReactComponent as SearchIcon } from '../Icons/UserInterface/SearchIcon.svg'
import { ReactComponent as CalendarIcon } from '../Icons/UserInterface/CalendarIcon.svg'
import { ReactComponent as BellIcon } from '../Icons/UserInterface/BellIcon.svg'
import { ReactComponent as UpperArrowIcon } from '../Icons/UserInterface/UpperArrowIcon.svg'



export const Header = () => {
    return <div className="header">

        <div className="header_logo-seach">
            <NavigationButton className="header_logo" Icon={LogoIcon}/>
            <div className="header_seach">
                <SearchIcon/>
                <Input/>
            </div>
        </div>

        <div className="header_notification-user-calendar">
            <div className="header_calendar">
                <CalendarIcon/>
            </div>
            <div className="header_notification">
                <BellIcon/>
                <div className="header_notification--number">4</div>
            </div>
            <div className="header_user">
                <img className="header_user--img" src="https://s3-alpha-sig.figma.com/img/d835/0a92/1d03d73360fa772829d007cce5379724?Expires=1658102400&Signature=B6DLcWsl2dTYF4PgmYpusy-VqJWro7bkjy6Xz4Jsd6VI7~wz3NIeVMgAHQElbRRRDl749bWMuREu04R1zNoPse9EUx42yZVqFOHVqHS7tpAkeS0pMFYNf5XwNMg8vIp34X-3ZGNWcklqRHtbvUc7df1-ZcnhzjRoyFsZrN1WZHA9cRwwABrV4-0v2I8ppSXPbbDoBivFaMUufb7CJICqL5Zy6RRLR89rKnm1jfpS0YeabsSHToWmPwBflCVyGUC3vmFpvWxVkPDvMu7MWqx9XA7O2Mrb5Hacg-H5CgM7XM3wV~eY8BAaycon13JWbSuSCdTBtepxn0yn8RR0PFv7yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                <p className="header_user--name">Захар Палазник</p>
                <Button className="header_user--arrow" Icon={UpperArrowIcon}/>
            </div>
        </div>
        

    </div>
}