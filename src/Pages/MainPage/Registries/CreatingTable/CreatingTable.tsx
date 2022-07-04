import './CreatingTable.scss'
import { Button } from "../../../../components/Button";

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
            <td className="registries_table--shift">{el.registrationNumber}</td>
            <td></td>
            <td className="registries_table--shift">{el.name}</td>
            <td>{el.classCode}</td>
            <td>{el.softwareClass}</td>
            <td>{el.registrationDate}</td>
            <td>{el.url}</td>
        </tr>
    })
    

    return <table className="registries_table">

        <thead>
            <tr>
                <td><Button/></td>
                <th>Регистрационный номер</th>
                <td><Button/></td>
                <th>Наименование программного обеспечения</th>
                <th>Код класса</th>
                <th>Класс программного обеспечения</th>
                <th>Дата регистрации</th>
                <th>Адрес сайта</th>
            </tr>
        </thead>

        <tbody>
            {tab}
        </tbody>
        
    </table>
}