import './CreatingTable.scss'
import { Button } from "../../../../components/Button"

import { ReactComponent as DoubleArrowIcon } from '../../../../components/Icons/UserInterface/DoubleArrowIcon.svg'

type Props = {
    data: any
}

export const CreatingTable = ({data}: Props) => {
    
    const tab = data?.map((el: any, index: any) => {
        if (index >= 10) {
            return
        }
        return <tr>
            <td></td>
            <td>{el.registrationNumber}</td>
            <td></td>
            <td>{el.name}</td>
            <td>{el.classCode}</td>
            <td>{el.softwareClass}</td>
            <td>{el.registrationDate}</td>
            <td className='registries_table--address'><a href={el.url}>Ссылка</a></td>
        </tr>
    })
    

    return <table className="registries_table">

        <thead>
            <tr>
                <td><Button Icon={DoubleArrowIcon}/></td>
                <td>Регистрационный номер</td>
                <td><Button Icon={DoubleArrowIcon}/></td>
                <td>Наименование программного обеспечения</td>
                <td>Код класса</td>
                <td>Класс программного обеспечения</td>
                <td>Дата регистрации</td>
                <td className='registries_table--address'>Адрес сайта</td>
            </tr>
        </thead>

        <tbody>
            {tab}
        </tbody>
        
    </table>
}